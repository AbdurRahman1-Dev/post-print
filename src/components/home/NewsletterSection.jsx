
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Star, Rocket } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted email:", email)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#842f93] to-[#2e1f74] text-white overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center">
          <Star className="w-12 h-12 mb-4 animate-twinkle text-yellow-300" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
            Join Our Celestial Newsletter
          </h2>
          <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
            Embark on a journey through the digital cosmos. Subscribe to receive stellar updates and cosmic insights.
          </p>
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <div className="relative">
              <Input
                className="w-full pl-10 pr-4 py-2 bg-white/10 border-white/20 text-white placeholder-white/50 placeholder:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
            </div>
            <Button
              className="w-full bg-white text-purple-900 rounded-full hover:bg-white/90 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg group"
              type="submit"
            >
              {isSubmitted ? (
                "Welcome aboard!"
              ) : (
                <>
                  Subscribe
                  <Rocket className="ml-2 inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" size={20} />
                </>
              )}
            </Button>
          </form>

        </div>
      </div>
    </section>
  )
}