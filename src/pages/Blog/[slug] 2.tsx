import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogContent } from '../../utils/api';
import { format } from 'date-fns';
import { CalendarIcon, ClockIcon, TagIcon, LinkedinIcon, TwitterIcon, FacebookIcon, ArrowLeftIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";

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

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen text-red-600">{error}</div>;
  if (!metadata) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="relative h-[400px]">
            <img
              src={metadata.image}
              alt={metadata.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                {metadata.category}
              </Badge>
              <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-4">
                {metadata.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarImage src={metadata.author.avatar} alt={metadata.author.name} />
                    <AvatarFallback>{metadata.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{metadata.author.name}</span>
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

          <div className="p-8 sm:p-12">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            <Separator className="my-12" />

            <footer>
              <div className="flex flex-wrap justify-between items-center mb-8">
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
                  <TagIcon className="h-5 w-5 text-gray-400" />
                  {metadata.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">
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
                        <Button variant="outline" size="icon" className="hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">
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
                        <Button variant="outline" size="icon" className="hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200">
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

              <Card className="bg-gray-50 border-none shadow-md">
                <CardContent className="flex flex-col sm:flex-row items-center gap-6 p-6">
                  <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                    <AvatarImage src={metadata.author.avatar} alt={metadata.author.name} />
                    <AvatarFallback>{metadata.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-semibold mb-2">{metadata.author.name}</h3>
                    <p className="text-gray-600 mb-4 max-w-md">
                      {metadata.author.bio}
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                      <Link to={`/author/${metadata.author.name.toLowerCase().replace(' ', '-')}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
                          View Profile
                        </Button>
                      </Link>
                      <Button variant="outline" className="hover:bg-blue-50 transition-colors duration-200">
                        Follow
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </footer>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogPost;