
import { useState } from "react"
import { Menu, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import logo from "../../assets/images/Poshprint-logo.svg"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Print Items", href: "/about" },
    { name: "Flyers", href: "/contact" },
    { name: "T-Shirts", href: "/contact" },
    { name: "Services", href: "/contact" },
    { name: "Custom Order", href: "/contact" },
  ]

  const SearchInput = () => (
    <form className="w-full">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search..."
          
          className="w-full pr-10 py-5"
        />
        <Button
          type="submit"
          // size="xl"
          className="absolute right-0 top-0 h-full rounded-l-none"
        >
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </form>
  )

  return (
    <nav className="w-full border-b  bg-white sticky top-0 left-0 sm:static z-50">
<div className="container mx-auto px-2 py-3">
        {/* First Row */}
      <div className="flex items-center justify-between  w-full mx-auto gap-5">
        <a href="/" className="flex items-center space-x-2 md:w-[15%] w-[30%]">
         <img alt="logo" className=" max-w-full max-h-full object-contain" src={logo}/>
        </a>
        <div className="hidden flex-1 items-center justify-center px-4 md:flex md:w-[75%] ">
          <SearchInput />
        </div>
        <div className="flex items-center space-x-4 md:w-[10%] justify-end">
          <a className="sm:block hidden" href="#">      <Button
            size="lg"
        
            >
            <User className="mr-2 h-5 w-5" />
            Login
          </Button></a>   
              <a className=" sm:hidden" href="#">      <Button
         
        
            >
            <User className="mr-2 h-5 w-5" />
            Login
          </Button></a>
     
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="mb-4 mt-6">
                <SearchInput />
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
         
        </div>
      </div>

      {/* Second Row - Desktop Only */}
      <div className="container hidden py-2 md:block">
        <div className="flex space-x-4 justify-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-base font-medium transition-colors hover:text-primary uppercase ${item?.name === 'Home' && 'text-primary' }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
</div>
    </nav>
  )
}