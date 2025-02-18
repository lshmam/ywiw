import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Zap } from "lucide-react"
import { Star } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Palette className="h-6 w-6 mr-2" />
          <span className="font-bold">you win i win</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#portfolio">
            Portfolio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Crafting Digital Experiences For You
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We design and develop stunning websites that drive results for your business.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Palette className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Web Design</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Beautiful, user-friendly designs that captivate your audience.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Code className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Robust, scalable websites built with cutting-edge technologies.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Lightning-fast websites that rank higher and convert better.
                </p>
              </div>
            </div>
          </div>
        </section>
    
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  company: "TechStart Inc.",
                  review:
                    "WebCraft Studio transformed our online presence. Their design is not just beautiful, it's strategic and has significantly improved our user engagement.",
                  rating: 5,
                },
                {
                  name: "Sarah Lee",
                  company: "Green Earth Co.",
                  review:
                    "The team at WebCraft Studio is exceptional. They understood our eco-friendly brand and created a website that perfectly represents our mission.",
                  rating: 5,
                },
                {
                  name: "Michael Brown",
                  company: "Innovate Solutions",
                  review:
                    "Impressive technical skills and creative design. Our new website is fast, responsive, and has helped us attract more clients. Highly recommended!",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-4">"{testimonial.review}"</blockquote>
                  <div className="mt-auto">
                    <cite className="font-bold not-italic">{testimonial.name}</cite>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to elevate your online presence?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Let's create something amazing together. Get in touch with us today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 WebCraft Studio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

