"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export function SiteHeader() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold text-teal-600 dark:text-teal-400">Fermín Moreno</span>
        </Link>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="transition-colors hover:text-teal-600 dark:hover:text-teal-400">
              {t("nav.home")}
            </Link>
            <Link href="#about" className="transition-colors hover:text-teal-600 dark:hover:text-teal-400">
              {t("nav.about")}
            </Link>
            <Link href="#education" className="transition-colors hover:text-teal-600 dark:hover:text-teal-400">
              {t("nav.education")}
            </Link>
            <Link href="#experience" className="transition-colors hover:text-teal-600 dark:hover:text-teal-400">
              {t("nav.experience")}
            </Link>
            <Link href="#projects" className="transition-colors hover:text-teal-600 dark:hover:text-teal-400">
              {t("nav.projects")}
            </Link>
            <Link href="#skills" className="transition-colors hover:text-teal-600 dark:hover:text-teal-400">
              {t("nav.skills")}
            </Link>
            <Link href="#contact" className="transition-colors hover:text-teal-600 dark:hover:text-teal-400">
              {t("nav.contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 text-lg font-medium">
                <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">
                  {t("nav.home")}
                </Link>
                <Link href="#about" className="hover:text-teal-600 dark:hover:text-teal-400">
                  {t("nav.about")}
                </Link>
                <Link href="#education" className="hover:text-teal-600 dark:hover:text-teal-400">
                  {t("nav.education")}
                </Link>
                <Link href="#experience" className="hover:text-teal-600 dark:hover:text-teal-400">
                  {t("nav.experience")}
                </Link>
                <Link href="#projects" className="hover:text-teal-600 dark:hover:text-teal-400">
                  {t("nav.projects")}
                </Link>
                <Link href="#skills" className="hover:text-teal-600 dark:hover:text-teal-400">
                  {t("nav.skills")}
                </Link>
                <Link href="#contact" className="hover:text-teal-600 dark:hover:text-teal-400">
                  {t("nav.contact")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
