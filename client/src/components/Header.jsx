import { useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { FaBars } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import { navLinks } from "../data/header"

import lightLogo from "../images/misc/light_logo.png"
import darkLogo from "../images/misc/dark_logo.png"

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isDarkSection, setIsDarkSection] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      const rect = pricingSection.getBoundingClientRect()
      setIsDarkSection(rect.top <= 80 && rect.bottom >= 80)
    }
  })

  const themeClasses = isDarkSection
    ? "bg-dark-coffee text-dust-grey border-dust-grey/10"
    : "bg-dust-grey text-carbon-black border-carbon-black/10"

  const hoverColor = isDarkSection ? "hover:text-[#A89F94]" : "hover:text-[#6F4E37]"

  const mobileLinkTheme = isDarkSection
    ? "border-dust-grey/10 hover:text-[#A89F94]"
    : "border-carbon-black/10 hover:text-[#6F4E37]"

  return (
    <>
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-[90] bg-carbon-black/40 lg:hidden" onClick={() => setIsMobileNavOpen(false)} />
      )}

      <header className={`fixed top-0 left-0 w-full py-4 md:py-6 px-6 md:px-16 lg:px-24 flex justify-between items-center z-[100] border-b transition-colors duration-500 ${themeClasses}`}>
        <img
          src={isDarkSection ? lightLogo : darkLogo}
          alt="Webend logo"
          className="w-10 cursor-pointer"
        />

        <nav className="hidden lg:flex gap-10 tracking-[0.2em] text-[10px] md:text-xs font-bold">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className={`transition-colors uppercase ${hoverColor}`}>
              {link.name}
            </a>
          ))}
        </nav>

        <button onClick={() => setIsMobileNavOpen(true)} className={`lg:hidden p-2 text-current outline-none transition-colors ${hoverColor}`}>
          <FaBars size={22} />
        </button>

        <nav className={`${isMobileNavOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 w-full md:w-[380px] h-screen z-[110] transition-transform duration-500 ease-in-out p-10 md:p-16 flex flex-col justify-between lg:hidden border-l ${themeClasses}`}>
          <div>
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMobileNavOpen(false)} className={`p-2 outline-none transition-colors ${hoverColor}`}>
                <FaX size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-6 md:gap-8 tracking-[0.2em] text-xl md:text-2xl font-bold italic uppercase">
              {navLinks.map((link) => (
                <a key={link.name} onClick={() => setIsMobileNavOpen(false)} href={link.href} className={`border-b pb-4 transition-colors ${mobileLinkTheme}`}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}