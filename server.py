from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import csv
from datetime import datetime

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Read blog posts from CSV file
def read_blog_posts():
    posts = []
    with open('blog_posts.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            posts.append({
                'id': int(row['id']),
                'title': row['title'],
                'content': row['content'],
                'date': row['date']
            })
    return posts

@app.get("/api/blog-posts")
async def get_blog_posts():
    return read_blog_posts()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)