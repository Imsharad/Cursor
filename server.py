from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import frontmatter

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
                posts.append({
                    'id': post.metadata.get('id'),
                    'title': post.metadata.get('title'),
                    'content': post.content,
                    'date': post.metadata.get('date'),
                    'author': post.metadata.get('author'),
                    'readTime': post.metadata.get('readTime'),
                    'category': post.metadata.get('category'),
                    'image': post.metadata.get('image'),
                })
    return posts

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)