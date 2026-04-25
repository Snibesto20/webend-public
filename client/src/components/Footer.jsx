export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-dark-coffee text-dust-grey">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative h-fit mb-24 overflow-hidden md:overflow-visible">
          {/* Padidinta minimali riba iki 5.5rem mobiliems įrenginiams */}
          <h2 className="font-extra text-[clamp(5.5rem,15vw,12rem)] select-none text-dust-grey/5 leading-[0.8] uppercase tracking-tighter">
            WEBEND
          </h2>
          {/* Padidinta minimali riba iki 1.75rem mobiliems įrenginiams */}
          <p className="absolute left-0 -bottom-1 md:-bottom-2 whitespace-nowrap font-extra text-[clamp(1.75rem,4vw,3.75rem)] text-dust-grey uppercase">
            Dizainas, kuris <span className="italic text-[#A89F94]">turi svorį.</span>
          </p>
        </div>
        
        <div className="w-full pt-12 border-t border-dust-grey/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-[10px] md:text-xs tracking-[0.4em] opacity-40 font-bold uppercase">
            © {currentYear} WEBEND AGENTŪRA. VISOS TEISĖS SAUGOMOS.
          </p>
        </div>
      </div>
    </footer>
  );
}