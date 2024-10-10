import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnhancedBlogCard from '../components/EnhancedBlogCard';
import { fetchBlogPosts, BlogPost } from '../utils/api';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        console.log('Starting to fetch blog posts...');
        const fetchedPosts = await fetchBlogPosts();
        console.log('Fetched posts:', fetchedPosts);
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        {posts.length === 0 ? (
          <p className="text-center">No blog posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id}>
                <EnhancedBlogCard {...post} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;