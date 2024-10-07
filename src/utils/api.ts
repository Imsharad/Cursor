import { marked } from 'marked'; // ⬇️ Import marked for markdown conversion

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  image: string;
  readTime?: string;
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch('http://localhost:8000/api/blog-posts');
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return response.json();
}

export const getBlogContent = async (slug: string) => {
  try {
    console.log('Fetching blog posts for slug:', slug);
    const response = await fetch('http://localhost:8000/api/blog-posts');
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    const posts: BlogPost[] = await response.json();
    console.log('Fetched posts:', posts);

    const post = posts.find(p => slugify(p.title) === slug);
    console.log('Found post:', post);
    
    if (!post) {
      throw new Error('Blog post not found');
    }

    return {
      content: convertMarkdownToHTML(post.content),
      metadata: {
        title: post.title,
        date: post.date,
        author: {
          name: post.author.name,
          avatar: post.author.avatar || '',
        },
        category: post.category,
        image: post.image,
      },
    };
  } catch (error) {
    console.error('Error fetching blog content:', error);
    throw error;
  }
};

// Helper function to convert Markdown to HTML
const convertMarkdownToHTML = (markdown: string): string => {
  return marked(markdown); // ✅ Use marked to convert markdown
};

// Helper function to create a slug from a title
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};