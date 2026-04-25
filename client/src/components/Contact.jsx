import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronRight, FaEnvelope, FaPhoneAlt, FaCheck, FaArrowLeft } from "react-icons/fa"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  async function handleSubmit(ev) {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    const email = formData.get("emailInput")
    const message = formData.get("messageInput")
    const newErrors = {}

    if (!email) newErrors.email = "Laukas privalomas"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Neteisingas formatas"

    const wordCount = message.trim().split(/\s+/).filter(w => w.length > 0).length
    if (!message) newErrors.message = "Laukas privalomas"
    else if (wordCount < 5) newErrors.message = "Minimaliai 5 žodžiai"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    formData.append("access_key", "aea64e05-9dd2-4fce-8e0c-1633440b068b")

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData })
      const data = await res.json()
      if (data.success) { setSubmitted(true); ev.target.reset(); }
    } catch (e) { alert("Serverio klaida") }
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-dust-grey">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-serif text-5xl md:text-7xl text-dark-coffee leading-tight mb-12">
            Pradėkime <br />
            <span className="italic font-light opacity-80">pokalbį.</span>
          </h2>
          <p className="text-dark-coffee max-w-sm leading-relaxed mb-16 font-medium">
            Turite viziją ar konkretų projektą? Mūsų komanda pasiruošusi ją įgyvendinti.
          </p>
          <div className="flex flex-col gap-6 font-bold text-carbon-black tracking-widest text-[10px] md:text-xs">
            <a href="mailto:webend.lietuva@gmail.com" className="group flex items-center gap-4 hover:text-[#6F4E37] transition-all duration-300 w-fit">
              <FaEnvelope className="text-[#6F4E37] text-base group-hover:scale-110 transition-transform" />
              <span className="border-b border-carbon-black/20 pb-1 group-hover:border-[#6F4E37]">WEBEND.LIETUVA@GMAIL.COM</span>
            </a>
            <a href="tel:+37062483741" className="group flex items-center gap-4 hover:text-[#6F4E37] transition-all duration-300 w-fit">
              <FaPhoneAlt className="text-[#6F4E37] text-base group-hover:scale-110 transition-transform" />
              <span className="border-b border-carbon-black/20 pb-1 group-hover:border-[#6F4E37]">+370 624 83741</span>
            </a>
            <a href="tel:+37062358738" className="group flex items-center gap-4 hover:text-[#6F4E37] transition-all duration-300 w-fit">
              <FaPhoneAlt className="text-[#6F4E37] text-base group-hover:scale-110 transition-transform" />
              <span className="border-b border-carbon-black/20 pb-1 group-hover:border-[#6F4E37]">+370 623 58738</span>
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative min-h-[450px] flex items-stretch">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="space-y-12 w-full" noValidate>
                <div className="relative">
                  <input name="emailInput" type="email" placeholder="EL. PAŠTAS" onFocus={() => setErrors(prev => ({ ...prev, email: null }))} className={`w-full bg-transparent outline-none py-4 border-b font-bold tracking-[0.2em] text-[10px] transition-colors placeholder:transition-colors ${errors.email ? "border-[#6F4E37] text-[#6F4E37] placeholder:text-[#6F4E37]/60" : "border-carbon-black/20 focus:border-carbon-black text-carbon-black"}`}  />
                  {errors.email && (
                    <span className="absolute left-0 -bottom-6 text-[10px] uppercase tracking-widest text-[#6F4E37] font-bold italic">{errors.email}</span>
                  )}
                </div>
                <div className="relative">
                  <textarea name="messageInput" rows="5" placeholder="JŪSŲ ŽINUTĖ (MIN. 5 ŽODŽIAI)" onFocus={() => setErrors(prev => ({ ...prev, message: null }))} className={`w-full bg-transparent outline-none py-4 border-b font-bold tracking-[0.2em] text-[10px] resize-none transition-colors placeholder:transition-colors ${errors.message ? "border-[#6F4E37] text-[#6F4E37] placeholder:text-[#6F4E37]/60" : "border-carbon-black/20 focus:border-carbon-black text-carbon-black"}`}   />
                  {errors.message && (
                    <span className="absolute left-0 -bottom-6 text-[10px] uppercase tracking-widest text-[#6F4E37] font-bold italic">{errors.message}</span>
                  )}
                </div>
                <button type="submit" className="flex items-center gap-4 px-12 py-5 tracking-[0.3em] transition-all duration-200 hover:bg-[#6F4E37] bg-carbon-black text-dust-grey font-bold text-[11px] uppercase shadow-xl shadow-carbon-black/10 rounded-xs">
                  SIŲSTI ŽINUTĘ <FaChevronRight className="text-[10px]" />
                </button>
              </motion.form>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="w-full bg-carbon-black p-12 md:p-16 flex flex-col justify-between items-start text-dust-grey shadow-2xl relative overflow-hidden rounded-sm">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <FaCheck className="text-9xl" />
                </div>
                
                <div className="relative z-10 w-full">
                  <h3 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                    Jūsų žinutė <br /> 
                    <span className="italic opacity-60 font-light">gauta.</span>
                  </h3>
                  <div className="h-px w-24 bg-[#6F4E37] mb-8"></div>
                  <p className="text-xs md:text-sm tracking-widest text-dust-grey/60 font-medium max-w-xs leading-relaxed uppercase">
                    Mūsų komanda susisieks su jumis per artimiausias <span className="text-dust-grey">24 valandas</span>.
                  </p>
                </div>

                <button onClick={() => setSubmitted(false)} className="group flex items-center gap-4 px-8 py-5 tracking-widest text-sm w-full text-center transition-all duration-300 hover:bg-dust-grey hover:text-carbon-black border border-dust-grey text-dust-grey font-bold shadow-lg shadow-carbon-black/10 rounded-xs mt-12"
                >
                  <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" /> GRĮŽTI ATGAL
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}