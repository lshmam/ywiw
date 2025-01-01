import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Rocket } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-purple-600" />,
      title: 'Web Development',
      description: 'Custom websites and web applications tailored to your needs.',
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: 'UI/UX Design',
      description: 'Intuitive and visually appealing interfaces that engage users.',
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital solutions to boost your online presence.',
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

