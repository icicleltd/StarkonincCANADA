"use client"

import { useState } from "react"
import {
  Menu,
  Phone,
  Mail,
  MessageCircle,
  Sun,
  Moon,
  CircleUser,
  CalendarCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FaWhatsapp } from "react-icons/fa"

export default function TopNavbar() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  // Tooltip styles for light/dark mode
  const tooltipStyle =
    theme === "dark"
      ? "bg-muted text-white"
      : "bg-white text-black border border-gray-300"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-border">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/Starkon-Logo.png"
            alt="Starkon Logo"
            className="w-48 h-20 rounded-lg object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Dark/Light Mode Toggle */}
          <div className="relative group">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-yellow-400 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <div
              className={`absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${tooltipStyle}`}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </div>
          </div>

          {/* Phone */}
          <div className="relative group">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-yellow-400 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </Button>
            <div
              className={`absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${tooltipStyle}`}
            >
              Call
            </div>
          </div>

          {/* Mail */}
          <div className="relative group">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-yellow-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <div
              className={`absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${tooltipStyle}`}
            >
              Email
            </div>
          </div>

          {/* WhatsApp */}
          <div className="relative group">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaWhatsapp className="h-5 w-5" />
            </Button>
            <div
              className={`absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${tooltipStyle}`}
            >
              WhatsApp
            </div>
          </div>

          {/* Log In */}
          <div className="relative group">
            <Button
              variant="ghost"
              className="justify-start flex items-center text-lg font-medium hover:text-yellow-400 transition-colors"
            >
              <CircleUser className="h-5 w-5 text-white" />
            </Button>
            <div
              className={`absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${tooltipStyle}`}
            >
              LogIn
            </div>
          </div>

          {/* Appointment */}
          <div className="relative group">
            <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-medium text-lg">
              <CalendarCheck className="h-5 w-5 text-white" />
            </Button>
            <div
              className={`absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${tooltipStyle}`}
            >
              Appointment
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent className="overflow-y-auto max-h-[90vh] p-6">
              <div className="flex flex-col space-y-4 mt-8 pb-12">
                <Button
                  variant="ghost"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="justify-start"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 mr-2" />
                  ) : (
                    <Moon className="h-5 w-5 mr-2" />
                  )}
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </Button>

                <Button variant="ghost" className="justify-start">
                  <Phone className="h-5 w-5 mr-2" />
                  Call
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

                <Button
                  variant="ghost"
                  className="justify-start flex items-center text-lg font-medium"
                >
                  <CircleUser className="h-5 w-5 mr-2 text-white" />
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
