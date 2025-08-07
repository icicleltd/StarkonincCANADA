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
  { id: "about", path: "/about" },
  { id: "service", path: "/service" },
  { id: "contact", path: "/contact" },
]

export default function Page() {
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {
    const container = document.getElementById("scroll-container")
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const scrollAmount = e.deltaX !== 0.0 ? e.deltaX : e.deltaY
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }

    container.addEventListener("wheel", handleWheel, { passive: false })

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const width = container.clientWidth
      const index = Math.round(scrollLeft / width)
      const section = sections[index]
      if (section && section.id !== currentSection) {
        setCurrentSection(section.id)
        window.history.replaceState(null, "", section.path)
      }
    }

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
      <div className="pl-16">
        <div id="scroll-container" className="flex h-screen overflow-x-scroll snap-x snap-mandatory scroll-smooth">
          <div className="w-screen snap-start">
            <Home />
          </div>

          <div className="w-screen snap-start">
            <Service />
          </div>
          <div className="w-screen snap-start">
            <Achievement />
          </div>

          <div className="w-screen snap-start">
            <About />
          </div>
          <div className="w-screen snap-start">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}
