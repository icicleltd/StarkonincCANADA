"use client"

import { useState, useEffect } from "react"
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
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'

export default function TopNavbar() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false)

  // Appointment form states
  const [onlineClientName, setOnlineClientName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [date, setDate] = useState<Dayjs | null>(null)
  const [time, setTime] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  // Available dates and times
  const [availableDates, setAvailableDates] = useState<string[]>([
    "2025-08-15",
    "2025-08-16",
    "2025-08-17",
    "2025-08-20",
    "2025-08-22"
  ])
  const [availableTimes, setAvailableTimes] = useState<string[]>([])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // When date changes, fetch available times
  useEffect(() => {
    if (date) {
      // Simulate fetching available times
      setAvailableTimes(["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"])
    } else {
      setAvailableTimes([])
    }
  }, [date])

  const tooltipStyle =
    theme === "dark"
      ? "bg-muted text-white"
      : "bg-white text-black border border-gray-300"

  async function submitAppointment() {
    setLoading(true)
    setSuccessMsg("")
    setErrorMsg("")
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuccessMsg("Appointment created successfully!")
      setOnlineClientName("")
      setPhoneNumber("")
      setDate(null)
      setTime("")
      setMessage("")
      setIsAppointmentOpen(false)
    } catch (error) {
      setErrorMsg("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/Starkon-Logo.png"
            alt="Starkon Logo"
            className="w-48 h-20 rounded-lg object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark/Light Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-yellow-400 transition-colors"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Contact and Login Buttons */}
            <Button variant="ghost" size="icon" className="hover:text-yellow-400">
              <Phone className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="hover:text-yellow-400">
              <Mail className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="hover:text-yellow-400">
              <FaWhatsapp className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              onClick={() => (window.location.href = "https://mamun-law-dashboard.vercel.app")}
              className="hover:text-yellow-400"
            >
              <CircleUser className="h-5 w-5" />
            </Button>

            {/* Appointment Button */}
            <Button
              onClick={() => setIsAppointmentOpen(true)}
              className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-medium"
            >
              <CalendarCheck className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />@
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile menu items */}
                  <Button variant="ghost" className="justify-start" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "dark" ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Phone className="h-5 w-5 mr-2" /> Call
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Mail className="h-5 w-5 mr-2" /> Email
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <FaWhatsapp className="h-5 w-5 mr-2" /> WhatsApp
                  </Button>
                  <Button variant="ghost" className="justify-start" onClick={() => (window.location.href = "https://mamun-law-dashboard.vercel.app")}>
                    <CircleUser className="h-5 w-5 mr-2" /> Login
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white"
                    onClick={() => {
                      setIsAppointmentOpen(true)
                      setIsOpen(false)
                    }}
                  >
                    <CalendarCheck className="h-5 w-5 mr-2" />
                    Appointment
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>

      {/* Appointment Sheet */}
      <Sheet open={isAppointmentOpen} onOpenChange={setIsAppointmentOpen}>
        <SheetContent className="max-w-md p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>

          {successMsg && <p className="text-green-600 mb-4">{successMsg}</p>}
          {errorMsg && <p className="text-red-600 mb-4">{errorMsg}</p>}

          <form onSubmit={(e) => { e.preventDefault(); submitAppointment() }} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Name</label>
              <input
                type="text"
                value={onlineClientName}
                onChange={(e) => setOnlineClientName(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="space-y-2">
              {/* <label className="text-sm font-medium">Date</label>
              <input
                type="text"
                value={date ? date.format("dddd, MMMM D, YYYY") : ""}
                readOnly
                placeholder="Select a date below"
                className="w-full p-2 border rounded bg-gray-50"
              /> */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                  shouldDisableDate={(day) => !availableDates.includes(day.format("YYYY-MM-DD"))}
                  className="w-full p-2 border rounded"
                  slotProps={{
                    textField: {
                      size: 'small',
                      fullWidth: true,
                    },
                  }}
                />
              </LocalizationProvider>
            </div>

            {date && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Time Slot</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select a time</option>
                  {availableTimes.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border rounded min-h-[100px]"
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Booking..." : "Book Appointment"}
            </Button>
          </form>
        </SheetContent>
      </Sheet>
    </nav>
  )
}