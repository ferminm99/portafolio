import Link from "next/link"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Fermín Moreno. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/ferminm99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/fermin-moreno/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:ferminmorenoz99@gmail.com"
            className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://www.instagram.com/yourinstagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
