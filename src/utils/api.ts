import { marked } from 'marked';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: string;
  image: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    console.log('Fetching blog posts from:', `${API_BASE_URL}/api/blog-posts`);
    const response = await fetch(`${API_BASE_URL}/api/blog-posts`);
    console.log('Response status:', response.status);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

export const getBlogContent = async (slug: string) => {
  try {
    const response = await fetch(`/api/blog-posts/${slug}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch blog post: ${response.statusText}`);
    }
    const post = await response.json();
    return {
      content: await convertMarkdownToHTML(post.content),
      metadata: {
        title: post.title,
        date: post.date,
        author: post.author,
        category: post.category,
        image: post.image,
        readTime: post.readTime,
        tags: post.tags || [],
      },
    };
  } catch (error) {
    console.error('Error fetching blog content:', error);
    throw error;
  }
};

const convertMarkdownToHTML = async (markdown: string): Promise<string> => {
  return marked(markdown);
};