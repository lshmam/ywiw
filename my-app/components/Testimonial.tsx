import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonial() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-20 h-20 mb-4">
                <AvatarImage src="/placeholder.svg" alt="Client" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <blockquote className="text-xl italic mb-4">
                "Working with this web development agency has been a game-changer for our business. Their expertise and dedication to our project exceeded our expectations."
              </blockquote>
              <cite className="font-semibold">John Doe, CEO of TechCorp</cite>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

