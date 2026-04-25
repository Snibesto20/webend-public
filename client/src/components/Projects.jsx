import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projectData } from "../data/projects"

function ProjectCard({ title, category, img, isSquare, url }) {
  const handleProjectClick = () => {
    if (url && url !== "#") window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div layout initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full relative group cursor-pointer" onClick={handleProjectClick}>
      <div className={`overflow-hidden mb-3 bg-[#A89F94]/10 ${isSquare ? 'aspect-square' : 'aspect-video'}`}>
        <img src={img} alt={title} className="w-full h-full wrap-anywhere object-cover filter contrast-[1.1] brightness-[0.85] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-400" />
      </div>
      <div className="flex flex-col gap-0.5">
        <h1 className="text-xl font-medium wrap-anywhere pr-1 text-carbon-black">
          {title}
        </h1>
        <p className="italic tracking-widest text-xs uppercase text-dark-coffee">
          {category}
        </p>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const [tab, setTab] = useState("websites")

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-dust-grey min-h-[85vh]">
      <div className="max-w-[1440px] mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex justify-start gap-8 border-b border-carbon-black/10 mb-12 tracking-widest w-full">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <button onClick={() => setTab("websites")} className={`transition-colors cursor-pointer ${tab === "websites" ? "text-carbon-black" : "text-[#A89F94]"} font-medium`}>
                SVETAINĖS
              </button>
              <button onClick={() => setTab("logos")} className={`transition-colors cursor-pointer ${tab === "logos" ? "text-carbon-black" : "text-[#A89F94]"} font-medium`}>
                LOGOTIPAI
              </button>
            </div>
            <span className={`${tab === "websites" ? "translate-x-0" : "translate-x-full"} transition-all duration-400 w-1/2 h-[1px] bg-carbon-black`}>
            </span>
          </div>
        </motion.div>
        <div className="grid place-items-center">
          <div className={`grid ${tab === "websites" ? "lg:grid-cols-2 gap-x-12 gap-y-16" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8"}`}>
            <AnimatePresence mode="wait">
              {projectData[tab].map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}