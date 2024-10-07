import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogContent } from '../../utils/api';
import './BlogPost.css'; // New CSS file for custom styles

interface BlogPostMetadata {
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  image: string;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [content, setContent] = React.useState<string>('');
  const [metadata, setMetadata] = React.useState<BlogPostMetadata | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>('');

  React.useEffect(() => {
    if (slug) {
      getBlogContent(slug)
        .then((data) => {
          setContent(data.content);
          setMetadata(data.metadata);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching blog content:', error);
          setError(`Failed to load blog post: ${error.message}`);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="blog-post-container">
      <header className="blog-header">
        <button onClick={() => navigate('/blog')} className="back-button">
          ← Back to Blog
        </button>
        {metadata && (
          <>
            <h1 className="blog-title">{metadata.title}</h1>
            <div className="blog-meta">
              <span className="blog-date">{metadata.date}</span>
              <span className="blog-author">By {metadata.author.name}</span>
              <span className="blog-category">{metadata.category}</span>
            </div>
          </>
        )}
      </header>
      {metadata && metadata.image && (
        <div className="blog-hero-image">
          <img src={metadata.image} alt={metadata.title} />
        </div>
      )}
      <article className="blog-content" dangerouslySetInnerHTML={{ __html: content }} />
      <footer className="blog-footer">
        <div className="author-bio">
          {metadata && metadata.author.avatar && (
            <img src={metadata.author.avatar} alt={metadata.author.name} className="author-avatar" />
          )}
          <p>Written by <strong>{metadata?.author.name}</strong></p>
        </div>
      </footer>
    </div>
  );
}

export default BlogPost;