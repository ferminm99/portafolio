"use client";

import { useLanguage } from "@/contexts/language-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function EducationSection() {
  const { t } = useLanguage();

  const education = [
    {
      degree: t("education.degree1"),
      institution: t("education.institution"),
      period: "2018 - 2024",
      location: t("education.location"),
    },
    {
      degree: t("education.degree2"),
      institution: t("education.institution"),
      period: "2020 - 2024",
      location: t("education.location"),
    },
  ];

  return (
    <section
      id="education"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-teal-50/50 to-white dark:from-teal-950/30 dark:to-gray-950"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-600 dark:text-teal-400">
              {t("education.title")}
            </h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
              {t("education.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <Card key={index} className="border-teal-100 dark:border-teal-900">
              <CardHeader>
                <CardTitle className="text-teal-700 dark:text-teal-300">
                  {item.degree}
                </CardTitle>
                <CardDescription className="text-base font-medium text-gray-600 dark:text-gray-400">
                  {item.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.period}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.location}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {t("education.gpa")}: {item.gpa}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
