"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t("experience.job1.title"),
      company: t("experience.job1.company"),
      period: "01/2021 - Present",
      location: t("education.location"),
      description: t("experience.job1.description"),
      achievements: [
        t("experience.job1.achievement1"),
        t("experience.job1.achievement2"),
        t("experience.job1.achievement3"),
        t("experience.job1.achievement4"),
      ],
    },
    {
      title: t("experience.job2.title"),
      company: t("experience.job2.company"),
      period: "2020 - 2023",
      location: t("education.location"),
      description: t("experience.job2.description"),
      achievements: [
        t("experience.job2.achievement1"),
        t("experience.job2.achievement2"),
        t("experience.job2.achievement3"),
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-teal-50/50 dark:from-gray-950 dark:to-teal-950/30"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-600 dark:text-teal-400">
              {t("experience.title")}
            </h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
              {t("experience.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="border-teal-100 dark:border-teal-900">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-teal-700 dark:text-teal-300">{experience.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-gray-600 dark:text-gray-400">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{experience.period}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-500">{experience.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{experience.description}</p>
                <ul className="space-y-2 list-disc pl-5">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
