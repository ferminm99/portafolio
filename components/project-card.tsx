import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border-teal-100 dark:border-teal-900">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold text-teal-700 dark:text-teal-300">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="font-normal bg-teal-100 text-teal-800 hover:bg-teal-200 dark:bg-teal-900 dark:text-teal-100 dark:hover:bg-teal-800"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800 hover:underline dark:text-teal-400 dark:hover:text-teal-300"
        >
          View Project <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  )
}
