"use client"

import LeftSidebar from "@/component/LeftSideebar"
import About from "@/component/sections/About"
import Achievement from "@/component/sections/Achievement"
import Contact from "@/component/sections/Contact"
import Home from "@/component/sections/Home"
import Service from "@/component/sections/Service"
import TopNavbar from "@/component/TopNavbar"
import { useEffect, useState } from "react"

const sections = [
  { id: "home", path: "/" },
  { id: "service", path: "/service" },
  { id: "achievement", path: "/achievement" },
  { id: "about", path: "/about" },
  { id: "contact", path: "/contact" },
]

export default function Page() {
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {
    const container = document.getElementById("scroll-container")
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      // Only apply horizontal scroll on medium screens and up
      if (window.innerWidth < 768) return
      e.preventDefault()
      const scrollAmount = e.deltaX !== 0.0 ? e.deltaX : e.deltaY
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }

    const handleScroll = () => {
      if (window.innerWidth < 768) return // Skip for mobile
      const scrollLeft = container.scrollLeft
      const width = container.clientWidth
      const index = Math.round(scrollLeft / width)
      const section = sections[index]
      if (section && section.id !== currentSection) {
        setCurrentSection(section.id)
        window.history.replaceState(null, "", section.path)
      }
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    container.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      container.removeEventListener("wheel", handleWheel)
      container.removeEventListener("scroll", handleScroll)
    }
  }, [currentSection])

  return (
    <div className="min-h-screen bg-background">
      <TopNavbar />
      <LeftSidebar />
      <div className="md:pl-16">
        {/* Mobile: vertical scroll | Desktop: horizontal scroll */}
        <div
          id="scroll-container"
          className="
            flex md:flex-row flex-col
            h-screen
            overflow-y-scroll md:overflow-x-scroll
            overflow-x-hidden md:overflow-y-hidden
            snap-y md:snap-x snap-mandatory scroll-smooth
          "
        >
          <div className="w-full md:w-screen snap-start">
            <Home />
          </div>
          <div className="w-full md:w-screen snap-start">
            <Service />
          </div>
          <div className="w-full md:w-screen snap-start">
            <Achievement />
          </div>
          <div className="w-full md:w-screen snap-start">
            <About />
          </div>
          <div className="w-full md:w-screen snap-start">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}
