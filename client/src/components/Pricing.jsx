import { motion } from "framer-motion"
import { pricingData } from "../data/pricing"
import { FaCheck } from "react-icons/fa"

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-dark-coffee text-dust-grey">
      <div className="max-w-[1440px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="font-serif text-5xl md:text-7xl text-dust-grey leading-tight mb-12">
            Kainoraštis turintis <br />
            <span className="italic font-light opacity-80">vertę.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingData.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-10 border border-dust-grey/10 rounded-xs flex flex-col items-start transition-colors group bg-carbon-black/10">
              <span className="tracking-widest text-[#A89F94] uppercase mb-8">
                {plan.name}
              </span>

              <div className="text-5xl md:text-6xl font-bold font-display mb-8">
                €{plan.price}
              </div>

              <ul className="grid grid-cols-1 gap-x-12 gap-y-4 mb-12 w-full flex-grow">
                {plan.features.map((feat, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-medium opacity-60 border-b border-dust-grey/5 pb-2 uppercase tracking-tight">
                    <FaCheck className="text-[#6F4E37] text-xs" />
                    {feat}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="flex items-center gap-4 px-8 py-5 tracking-widest text-sm w-full text-center transition-all duration-300 hover:bg-[#6F4E37] border border-dust-grey text-dust-grey font-bold shadow-lg shadow-carbon-black/10 rounded-xs">
                TEIRAUTIS
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}