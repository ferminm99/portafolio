import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Freelancer",
      period: "01/2021 - Present",
      location: "La Plata, Argentina",
      description:
        "Freelance full-stack developer delivering custom web solutions, ranging from business management systems to e-commerce platforms, ensuring successful delivery and optimization of business processes.",
      achievements: [
        'Collaborated on the development of a comprehensive business management system for "Impacto", including invoicing, inventory, and workflow optimization, managing operations for over 1,000 clients.',
        'Developed the official website for "El Mensual", showcasing 40 unique products, improving user experience, and increasing product visibility by 30%.',
        "Automated transaction management for financial tracking, saving clients over 100 hours monthly and ensuring precise reconciliation of bank balances, taxes, and credits.",
        "Implemented a business management platform for my own entrepreneurship, streamlining inventory, sales, and invoicing processes, resulting in a 70% administrative efficiency improvement.",
      ],
    },
    {
      title: "University Projects",
      company: "Universidad Nacional de La Plata",
      period: "2020 - 2023",
      location: "La Plata, Argentina",
      description: "Facultad de Informática in the Universidad Nacional de La Plata",
      achievements: [
        "Constructed a flood alert app for La Plata, simulating 10 real-time emergency scenarios and improving system response times.",
        "Built a platform to schedule and manage 20 simulated sports events, enhancing skills in data structures and responsive UI design.",
        'Created "La Justa" app to manage the sale and inventory of vegetable bags for an agricultural company, handling 15 inventory items and transactions.',
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
              Experience
            </h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
              Professional experience and key achievements.
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
