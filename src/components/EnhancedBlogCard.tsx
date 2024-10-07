import React from 'react'
import { Link } from 'react-router-dom'
import { BookmarkIcon, Clock, Share2 } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

interface EnhancedBlogCardProps {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  slug: string;
}

// ... (keep other subcomponents like CategoryBadge, BlogTitle, AuthorInfo, etc.)

const CategoryBadge = ({ category }: { category: string }) => (
  <span className="absolute -top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
    {category}
  </span>
)

const BlogTitle = ({ title, slug }: { title: string; slug: string }) => (
  <h3 className="text-xl font-bold leading-tight mb-2 mt-2 line-clamp-2">
    <Link to={`/blog/${slug}`} className="hover:underline">
      {title}
    </Link>
  </h3>
)

const BlogExcerpt = ({ content }: { content: string }) => {
  const truncatedContent = content.split(' ').slice(0, 30).join(' ') + '...'
  return <p className="text-gray-600 line-clamp-3">{truncatedContent}</p>
}

const AuthorInfo = ({ author, date, readTime }: { author: { name: string; avatar?: string }; date: string; readTime?: string }) => (
  <div className="flex items-center space-x-4 mb-4">
    {author.avatar && (
      <img
        src={author.avatar}
        alt={author.name}
        className="w-10 h-10 rounded-full"
      />
    )}
    <div>
      <p className="text-sm font-medium">{author.name}</p>
      <div className="flex items-center text-xs text-gray-500">
        <span className="mr-2">{date}</span>
        {readTime && (
          <>
            <Clock className="mr-1 h-3 w-3" />
            <span>{readTime}</span>
          </>
        )}
      </div>
    </div>
  </div>
)

// Removed BlogStats component since 'views' and 'comments' are no longer used

const BookmarkButton = () => (
  <Button variant="ghost" size="icon">
    <BookmarkIcon className="h-4 w-4" />
    <span className="sr-only">Bookmark</span>
  </Button>
)

const ShareButton = () => (
  <Button variant="ghost" size="icon">
    <Share2 className="h-4 w-4" />
    <span className="sr-only">Share</span>
  </Button>
)

const EnhancedBlogCard: React.FC<EnhancedBlogCardProps> = ({
  title,
  content,
  author,
  date,
  readTime,
  category,
  image,
  slug,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-[200px]"
        />
        <CategoryBadge category={category} />
      </div>
      <CardHeader>
        <BlogTitle title={title} slug={slug} />
        <BlogExcerpt content={content} />
      </CardHeader>
      <CardContent>
        <AuthorInfo author={author} date={date} readTime={readTime} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={`/blog/${slug}`} className="text-blue-500 hover:underline">
          Read More
        </Link>
        <div className="flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <BookmarkButton />
              </TooltipTrigger>
              <TooltipContent>
                <p>Bookmark this post</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <ShareButton />
              </TooltipTrigger>
              <TooltipContent>
                <p>Share this post</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  )
}

export default EnhancedBlogCard