import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Client-Side",
      skills: ["HTML", "CSS", "JavaScript", "Vue.js", "React", "PHP", "Bootstrap", "UI/UX", "XML"],
    },
    {
      title: "Server-Side",
      skills: ["Spring Boot", "Laravel", "Node", "Next", "MySQL", "PostgreSQL", "SQL", "JSON", "Python", "APIs"],
    },
    {
      title: "Development & Operations",
      skills: ["GIT", "Scrum", "Agile", "Docker", "AWS s3", "Postman", "Maven"],
    },
    {
      title: "Mobile Development",
      skills: ["Android Studio", "Kotlin"],
    },
  ]

  const strengths = [
    {
      title: "Agile Methodologies",
      description:
        "Proficient in Scrum and Agile frameworks, improving project timelines by 50% and ensuring timely, cost-effective delivery.",
    },
    {
      title: "Strategic Planning",
      description:
        'Led digital strategies, including marketing campaigns that increased sales and boosted brand visibility 15x for "El Mensual."',
    },
    {
      title: "Problem Solving",
      description: "Identified and resolved complex technical issues, reducing project downtime by 15%.",
    },
  ]

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-600 dark:text-teal-400">
              Skills & Strengths
            </h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
              Technical expertise and professional strengths.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border-teal-100 dark:border-teal-900">
              <CardHeader>
                <CardTitle className="text-teal-700 dark:text-teal-300">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-teal-100 text-teal-800 hover:bg-teal-200 dark:bg-teal-900 dark:text-teal-100 dark:hover:bg-teal-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-teal-600 dark:text-teal-400">Key Strengths</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {strengths.map((strength) => (
              <Card key={strength.title} className="border-teal-100 dark:border-teal-900">
                <CardHeader>
                  <CardTitle className="text-teal-700 dark:text-teal-300">{strength.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400">{strength.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
