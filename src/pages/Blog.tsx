import React, { useState, useEffect } from 'react';
import EnhancedBlogCard from '../components/EnhancedBlogCard';
import { fetchBlogPosts, BlogPost } from '../utils/api';

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchBlogPosts();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      {posts.length === 0 ? (
        <p className="text-center">No blog posts found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <EnhancedBlogCard
              key={post.id}
              title={post.title}
              content={post.content}
              author={post.author}
              date={post.date}
              readTime={post.readTime || '5 min read'}
              category={post.category}
              image={post.image}
              slug={slugify(post.title)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;