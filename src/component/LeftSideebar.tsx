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
    <div className="fixed left-0 top-20 bottom-0 w-16 bg-background/80 backdrop-blur-md border-border z-40">
      <div className="flex flex-col items-center py-8 space-y-4">
        {/* Accent Line */}
        <div className="w-1 h-16 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400 rounded-full"></div>

        {/* Social Icons with Right Tooltips */}
        <div className="flex flex-col space-y-3">
          {socialLinks.map((social, index) => (
            <div key={index} className="relative group flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 hover:bg-purple-500/20 hover:text-yellow-400 transition-colors"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>

              {/* Tooltip on Right */}
            <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-muted text-muted-foreground text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
  {social.label}
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
