"use client";

import Link from "next/link";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/language-switcher";

export default function Home() {
  const { t } = useLanguage();

  const projects = [
    {
      id: "anotaciones-bancarias",
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      image: "/project-anotaciones.jpg", // Local image
      link: "https://anotaciones-bancarias-elmensual-demo.vercel.app/",
      tags: ["Next.js", "Financial", "Data Visualization"],
    },
    {
      id: "el-mensual",
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      image: "/project-elmensual.jpg", // Local image
      link: "https://elmensual.com.ar",
      tags: ["Web Development", "E-commerce", "UI/UX"],
    },
    {
      id: "fitness-health-app",
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      image: "/project-fitness.jpg", // Local image
      link: "https://github.com/ferminm99/FitnessAndHealthApp",
      tags: ["Android", "Kotlin", "Mobile Development"],
    },
    {
      id: "impacto-management",
      title: t("projects.project4.title"),
      description: t("projects.project4.description"),
      image: "/project-locales.jpg", // Local image
      link: "#",
      tags: ["Full Stack", "Business Solutions", "Database"],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40 border-b border-border/40 bg-gradient-to-br from-background to-teal-50/30 dark:to-teal-950/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Fermín Moreno
                  </h1>
                  <p className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-300">
                    {t("hero.title")} {t("hero.subtitle")}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#projects">
                    <Button className="px-4 py-2 bg-teal-600 hover:bg-teal-700">
                      {t("hero.viewProjects")}{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button
                      variant="outline"
                      className="px-4 py-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    >
                      {t("hero.contactMe")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-xl border border-border/40 bg-muted/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-600 dark:text-teal-400">
                  {t("about.title")}
                </h2>
                <p className="text-gray-700 md:text-xl dark:text-gray-300">
                  {t("about.p1")}
                </p>
                <p className="text-gray-700 md:text-xl dark:text-gray-300">
                  {t("about.p2")}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <div className="flex items-center text-teal-600 dark:text-teal-400">
                    <span className="font-medium mr-2">
                      {t("about.languages")}
                    </span>
                    <span>{t("about.languagesList")}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-border/40 bg-muted/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <EducationSection />

        <ExperienceSection />

        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-teal-50/50 to-white dark:from-teal-950/30 dark:to-gray-950"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-600 dark:text-teal-400">
                  {t("projects.title")}
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                  {t("projects.subtitle")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 pt-10 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* Entrepreneurship Card */}
            <div className="mx-auto max-w-5xl pt-10">
              <Card className="overflow-hidden transition-all hover:shadow-md border-teal-100 dark:border-teal-900">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 flex items-center justify-center">
                      <Instagram className="h-16 w-16 text-pink-600 dark:text-pink-300" />
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-teal-700 dark:text-teal-300">
                      {t("projects.entrepreneurship.title")}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {t("projects.entrepreneurship.description")}
                    </p>
                    <CardFooter className="px-0 pt-4">
                      <Link
                        href="https://www.instagram.com/ElMensual_LaPlata"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800 hover:underline dark:text-teal-400 dark:hover:text-teal-300"
                      >
                        {t("projects.entrepreneurship.viewStore")}{" "}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </CardFooter>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <SkillsSection />

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-600 dark:text-teal-400">
                  {t("contact.title")}
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                  {t("contact.subtitle")}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link href="mailto:ferminmorenoz99@gmail.com">
                  <Button
                    variant="outline"
                    className="gap-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950/30"
                  >
                    <Mail className="h-4 w-4" />
                    ferminmorenoz99@gmail.com
                  </Button>
                </Link>
                <Link
                  href="https://github.com/ferminm99"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="gap-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950/30"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/fermin-moreno/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="gap-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950/30"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <LanguageSwitcher variant="full" />
    </div>
  );
}
