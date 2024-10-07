import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogContent } from '../../utils/api';
import { format } from 'date-fns';
import { CalendarIcon, ClockIcon, TagIcon, UserIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import './BlogPost.css';

interface BlogPostMetadata {
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  // Remove this line: const navigate = useNavigate();
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
  if (!metadata) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="relative h-96">
          <img
            src={metadata.image}
            alt={metadata.title}
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <Badge className="mb-4 bg-primary text-primary-foreground">{metadata.category}</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-4">
              {metadata.title}
            </h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src={metadata.author.avatar} alt={metadata.author.name} />
                  <AvatarFallback>{metadata.author.name[0]}</AvatarFallback>
                </Avatar>
                <span>{metadata.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <time dateTime={metadata.date}>{format(new Date(metadata.date), 'MMMM d, yyyy')}</time>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>{metadata.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <ScrollArea className="h-[60vh] pr-4">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          </ScrollArea>

          <Separator className="my-8" />

          <footer>
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-2">
                <TagIcon className="h-5 w-5 text-muted-foreground" />
                {metadata.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">{tag}</Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <TwitterIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Share on Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <LinkedinIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Share on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <FacebookIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Share on Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <Card>
              <CardContent className="flex items-center gap-6 p-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={metadata.author.avatar} alt={metadata.author.name} />
                  <AvatarFallback>{metadata.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{metadata.author.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {metadata.author.bio}
                  </p>
                  <div className="flex gap-4">
                    <Link to={`/author/${metadata.author.name.toLowerCase().replace(' ', '-')}`}>
                      <Button>View Profile</Button>
                    </Link>
                    <Button variant="outline">Follow</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </footer>
        </div>
      </article>
    </div>
  );
}

export default BlogPost;