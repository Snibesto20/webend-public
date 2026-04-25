import { motion } from "framer-motion"
import { FaChevronRight } from "react-icons/fa"

import flower from "../images/misc/hero_flower.png"

export default function Hero() {
  return (
    <section id="start" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 xl:pt-64 bg-dust-grey min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full h-full relative">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="grid content-center max-w-4xl z-10 h-full">
          <h1 className="text-[clamp(3.5rem,8vw,8rem)] mb-8 leading-none font-extra text-carbon-black">
            Dizainas, kuris <br />
            <span className="italic text-[#6F4E37]">Turi svorį.</span>
          </h1>
          <p className="text-xl text-dark-coffee max-w-lg mb-10 leading-relaxed">
            Webend kuria aukščiausios kokybės svetaines ir prekės ženklų identitetus. Mes fokusuojamės į detales, kurios suformuoja solidų ir išbaigtą jūsų verslo įvaizdį.
          </p>
          <a href="#contact" className="flex items-center gap-4 px-8 py-5 tracking-widest text-sm rounded-full transition-all duration-200 hover:bg-[#6F4E37] bg-carbon-black text-dust-grey font-bold shadow-lg shadow-carbon-black/10 w-fit rounded-xs">
            PRADĖKIME PROJEKTĄ <FaChevronRight />
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="hidden xl:block absolute -right-24 2xl:right-0 top-1/2 -translate-y-1/2 h-[80vh] aspect-[1024/1536] flex-shrink-0">
          <img src={flower} alt="Aesthetic flower" className="select-none h-full w-full object-contain pointer-events-none opacity-90" />
        </motion.div>
      </div>
    </section>
  )
}