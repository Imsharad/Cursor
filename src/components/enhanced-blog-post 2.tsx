"'use client'"

import { MDXRemote } from "'next-mdx-remote'"
import { format } from "'date-fns'"
import Image from "'next/image'"
import Link from "'next/link'"
import { CalendarIcon, ClockIcon, TagIcon, UserIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "'lucide-react'"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// This would typically come from your data fetching method
const post = {
  id: 3,
  title: "How to Build a Successful Career in Tech",
  date: "2024-03-10",
  author: {
    name: "Alex Rivera",
    avatar: "https://example.com/avatars/alex-rivera.jpg",
    bio: "Alex Rivera is a seasoned tech professional with over 15 years of experience in software development and team leadership."
  },
  readTime: "10 min read",
  category: "Career",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  content: `
    Building a successful career in tech requires a combination of technical skills, soft skills, and strategic planning.

    ## 1. Continuous Learning

    The tech industry evolves rapidly. Stay updated with the latest technologies and trends:

    - Attend workshops and conferences
    - Take online courses
    - Read tech blogs and books

    ## 2. Develop Your Soft Skills

    Technical skills alone aren't enough. Focus on improving:

    - Communication
    - Teamwork
    - Problem-solving
    - Leadership

    ## 3. Build a Strong Network

    Networking can open doors to new opportunities:

    - Attend industry meetups
    - Participate in online tech communities
    - Contribute to open-source projects

    ## 4. Find a Mentor

    A mentor can provide guidance and help you navigate your career:

    - Look for experienced professionals in your field
    - Be proactive in seeking advice

    ## 5. Embrace Challenges

    Don't shy away from difficult projects:

    - They provide the best learning opportunities
    - They showcase your abilities to solve complex problems

    Remember, building a successful tech career is a journey. Stay patient, persistent, and always keep learning!
  `
}

export function EnhancedBlogPostComponent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="relative h-96">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <Badge className="mb-4 bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900">{post.category}</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <time dateTime={post.date}>{format(new Date(post.date), "'MMMM d, yyyy'")}</time>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <ScrollArea className="h-[60vh] pr-4">
            <div className="prose prose-lg max-w-none">
              <MDXRemote compiledSource={post.content} />
            </div>
          </ScrollArea>

          <Separator className="my-8" />

          <footer>
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-2">
                <TagIcon className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                <Badge variant="outline">Career Development</Badge>
                <Badge variant="outline">Technology</Badge>
                <Badge variant="outline">Professional Growth</Badge>
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
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{post.author.name}</h3>
                  <p className="text-neutral-500 mb-4 dark:text-neutral-400">
                    {post.author.bio}
                  </p>
                  <div className="flex gap-4">
                    <Link href={`/author/${post.author.name.toLowerCase().replace("'", "'-'")}`}>
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
  )
}