
import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DiscountLabel() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-black text-white w-full py-3 px-4">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-center text-xs md:text-sm font-medium mr-2">
          🎉 Special offer: 20% off all items! Use code SUMMER20 at checkout
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-black hover:text-white "
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
    </div>
  )
}