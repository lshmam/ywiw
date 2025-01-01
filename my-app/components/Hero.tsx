import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transforming Ideas into Digital Reality</h1>
          <p className="text-xl mb-8">We craft cutting-edge web solutions that drive your business forward.</p>
          <Button asChild size="lg">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

