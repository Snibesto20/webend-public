import { motion } from "framer-motion"
import { featureData } from "../data/features"

export default function Features() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-dust-grey overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
          <h2 className="font-serif text-5xl md:text-7xl text-dark-coffee leading-tight">
            Vertė jūsų <br />
            <span className="italic font-light opacity-80">verslui.</span>
          </h2>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-16 md:gap-8">
          {featureData.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className={`relative flex flex-col ${i === 1 ? 'lg:mt-24' : i === 2 ? 'lg:mt-48' : ''}`}>
              <span className="font-serif text-8xl text-dark-coffee/5 absolute -top-12 -left-4 pointer-events-none select-none">
                0{i + 1}
              </span>
              <div className="border-t border-dark-coffee/10 pt-8">
                <h3 className="font-extra font-medium text-2xl text-dark-coffee mb-6 uppercase">
                  {item.title}
                </h3>
                <p className="text-dark-coffee/70 text-sm md:text-base max-w-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}