import React from 'react'
import { Link } from 'react-router-dom'
import { BookmarkIcon, Clock, Share2, CalendarIcon, UserIcon } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { format } from 'date-fns'

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
  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-3 py-1 rounded-full shadow-md">
    {category}
  </Badge>
)

const BlogTitle = ({ title, slug }: { title: string; slug: string }) => (
  <h3 className="text-2xl font-bold tracking-tight leading-tight mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
    <Link to={`/blog/${slug}`} className="hover:underline">
      {title}
    </Link>
  </h3>
)

const BlogExcerpt = ({ content }: { content: string }) => {
  const truncatedContent = content.split(' ').slice(0, 25).join(' ') + '...'
  return <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{truncatedContent}</p>
}

const AuthorInfo = ({ author, date, readTime }: { author: { name: string; avatar?: string }; date: string; readTime?: string }) => (
  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8 border-2 border-white shadow-sm">
        <AvatarImage src={author.avatar} alt={author.name} />
        <AvatarFallback>{author.name[0]}</AvatarFallback>
      </Avatar>
      <span className="font-medium">{author.name}</span>
    </div>
    <div className="flex items-center gap-2">
      <CalendarIcon className="h-4 w-4" />
      <time dateTime={date}>{format(new Date(date), "MMMM d, yyyy")}</time>
    </div>
    {readTime && (
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4" />
        <span>{readTime}</span>
      </div>
    )}
  </div>
)

const BookmarkButton = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof Button>>((props, ref) => (
  <Button ref={ref} variant="ghost" size="icon" className="text-gray-500 hover:text-blue-600 transition-colors duration-300" {...props}>
    <BookmarkIcon className="h-5 w-5" />
    <span className="sr-only">Bookmark</span>
  </Button>
))
BookmarkButton.displayName = 'BookmarkButton'

const ShareButton = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof Button>>((props, ref) => (
  <Button ref={ref} variant="ghost" size="icon" className="text-gray-500 hover:text-blue-600 transition-colors duration-300" {...props}>
    <Share2 className="h-5 w-5" />
    <span className="sr-only">Share</span>
  </Button>
))
ShareButton.displayName = 'ShareButton'

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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative h-56 sm:h-64">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full brightness-90 group-hover:brightness-100 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <CategoryBadge category={category} />
      </div>
      <CardHeader className="pb-2">
        <BlogTitle title={title} slug={slug} />
      </CardHeader>
      <CardContent className="space-y-4">
        <BlogExcerpt content={content} />
        <AuthorInfo author={author} date={date} readTime={readTime} />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Link to={`/blog/${slug}`}>
          <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            Read More
          </Button>
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