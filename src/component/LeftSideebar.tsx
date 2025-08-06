"use client"

import { Facebook, Twitter, Linkedin, Instagram, Youtube, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Music, href: "#", label: "TikTok" },
]

export default function LeftSidebar() {
  return (
    <div className="fixed left-0 top-20 bottom-0 w-16 bg-background/80 backdrop-blur-md  border-border z-40">
      <div className="flex flex-col items-center py-8 space-y-4">
        {/* Red to Yellow accent line */}
       <div className="w-1 h-16 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400 rounded-full"></div>


        {/* Social Icons */}
        <div className="flex flex-col space-y-3">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="w-10 h-10 hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
              asChild
            >
              <a href={social.href} aria-label={social.label}>
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
