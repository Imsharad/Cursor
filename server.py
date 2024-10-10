from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import os
import frontmatter
from slugify import slugify  # ⬇️ Ensure slugify is imported

app = FastAPI()

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
    posts = []
    blog_dir = 'content/blog'  # Directory where Markdown files are stored
    for filename in os.listdir(blog_dir):
        if filename.endswith('.md'):
            filepath = os.path.join(blog_dir, filename)
            with open(filepath, 'r', encoding='utf-8') as file:
                post = frontmatter.load(file)
                slug = slugify(post.metadata.get('title'))
                posts.append({
                    'id': post.metadata.get('id'),
                    'title': post.metadata.get('title'),
                    'slug': slug,
                    'content': post.content,
                    'date': post.metadata.get('date'),
                    'author': {
                        'name': post.metadata.get('author', {}).get('name', ''),
                        'avatar': post.metadata.get('author', {}).get('avatar', ''),
                        'bio': post.metadata.get('author', {}).get('bio', ''),
                    },
                    'readTime': post.metadata.get('readTime'),
                    'category': post.metadata.get('category'),
                    'image': post.metadata.get('image'),
                    'tags': post.metadata.get('tags', []),
                })
    return posts

# Serve individual blog posts
@app.get('/content/blog/{slug}.md')
async def get_blog(slug: str):
    blog_dir = 'content/blog'
    file_path = os.path.join(blog_dir, f'{slug}.md')
    if os.path.exists(file_path):
        return FileResponse(file_path)
    return {"error": "Blog post not found"}, 404

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)