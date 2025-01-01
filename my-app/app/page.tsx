import Hero from '@/components/Hero'
import Statistics from '@/components/Statistics'
import Services from '@/components/Services'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Statistics />
      <Services />
      <Testimonial />
      <Footer />
    </main>
  )
}

