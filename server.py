from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import os
import frontmatter
from slugify import slugify
import logging
import uvicorn
import socket

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# Get allowed origins from environment variable
# allowed_origins = os.environ.get("ALLOWED_ORIGINS", "http://localhost:5173").split(",")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (only for development/testing)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Read blog posts from Markdown files
@app.get("/api/blog-posts")
async def get_blog_posts():
    logger.info("Received request for /api/blog-posts")
    blog_dir = 'content/blog'
    logger.info(f"Checking directory: {os.path.abspath(blog_dir)}")
    if not os.path.exists(blog_dir):
        logger.error(f"Directory {blog_dir} does not exist")
        raise HTTPException(status_code=404, detail="Blog directory not found")
    files = os.listdir(blog_dir)
    logger.info(f"Found files: {files}")
    posts = []
    for filename in files:
        if filename.endswith('.md'):
            filepath = os.path.join(blog_dir, filename)
            logger.info(f"Processing file: {filepath}")
            try:
                with open(filepath, 'r', encoding='utf-8') as file:
                    post = frontmatter.load(file)
                    slug = slugify(post.metadata.get('title'))
                    posts.append({
                        'id': post.metadata.get('id', ''),
                        'title': post.metadata.get('title', ''),
                        'slug': slug,
                        'date': post.metadata.get('date', ''),
                        'author': post.metadata.get('author', {'name': '', 'avatar': '', 'bio': ''}),
                        'category': post.metadata.get('category', ''),
                        'image': post.metadata.get('image', ''),
                        'readTime': post.metadata.get('readTime', ''),
                        'tags': post.metadata.get('tags', []),
                    })
                logger.info(f"Successfully processed {filename}")
            except Exception as e:
                logger.error(f"Error processing {filename}: {str(e)}")
    logger.info(f"Returning {len(posts)} posts")
    return posts

# Serve individual blog posts
@app.get('/api/blog-posts/{slug}')
async def get_blog_post(slug: str):
    logger.info(f"Received request for blog post with slug: {slug}")
    blog_dir = 'content/blog'
    for filename in os.listdir(blog_dir):
        if filename.endswith('.md'):
            filepath = os.path.join(blog_dir, filename)
            with open(filepath, 'r', encoding='utf-8') as file:
                post = frontmatter.load(file)
                if slugify(post.metadata.get('title')) == slug:
                    logger.info(f"Found matching post: {filename}")
                    return {
                        'id': post.metadata.get('id'),
                        'title': post.metadata.get('title'),
                        'content': post.content,
                        'date': post.metadata.get('date'),
                        'author': post.metadata.get('author'),
                        'category': post.metadata.get('category'),
                        'image': post.metadata.get('image'),
                        'readTime': post.metadata.get('readTime'),
                        'tags': post.metadata.get('tags', []),
                        'slug': slug
                    }
    logger.warning(f"No post found for slug: {slug}")
    raise HTTPException(status_code=404, detail="Blog post not found")

# Add a test endpoint
@app.get("/api/test")
async def test_endpoint():
    return {"message": "API is working"}

# Mount static files at /assets
app.mount("/assets", StaticFiles(directory="dist/assets"), name="static")

# Serve index.html for all other routes
@app.get("/{full_path:path}")
async def serve_app(full_path: str):
    if full_path.startswith("api/"):
        raise HTTPException(status_code=404, detail="API route not found")
    return FileResponse("dist/index.html")

def find_free_port(start_port, max_port=65535):
    for port in range(start_port, max_port + 1):
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.bind(('', port))
            s.close()
            return port
        except OSError:
            continue
    return None



if __name__ == "__main__":
    start_port = int(os.environ.get("PORT", 8000))
    max_port = start_port + 100  # Try up to 100 ports after the start port
    
    free_port = find_free_port(start_port, max_port)
    
    if free_port is None:
        logger.error(f"No free ports found between {start_port} and {max_port}")
        exit(1)
    
    logger.info(f"Starting server on port {free_port}")
    uvicorn.run(app, host="0.0.0.0", port=free_port)