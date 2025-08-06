"use client"

import { useState } from "react"
import { Menu, Phone, Mail, MessageCircle, Sun, Moon, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function TopNavbar() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md  border-border">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/Starkon-Logo.png"
            alt="Starkon Logo"
            className="w-48 h-20  rounded-lg object-contain"
          />
          
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button variant="ghost" size="icon">
            <Phone className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <Mail className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <MessageCircle className="h-5 w-5" />
          </Button>

          <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-medium text-lg">
            Appointment
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
  <div className="flex flex-col space-y-4 mt-8">
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="justify-start"
    >
      {theme === "dark" ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
      Toggle Theme
    </Button>

    <Button variant="ghost" className="justify-start">
      <Phone className="h-5 w-5 mr-2" />
      Contact
    </Button>

    <Button variant="ghost" className="justify-start">
      <Mail className="h-5 w-5 mr-2" />
      Email
    </Button>

    <Button variant="ghost" className="justify-start">
      <MessageCircle className="h-5 w-5 mr-2" />
      WhatsApp
    </Button>

    <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-medium text-lg">
      Appointment
    </Button>

    {/* Updated Log In Button */}
    <Button
      variant="ghost"
      className="justify-start flex items-center text-lg font-medium"
    >
      <LogIn className="h-5 w-5 mr-2" />
      Log In
    </Button>
  </div>
</SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
