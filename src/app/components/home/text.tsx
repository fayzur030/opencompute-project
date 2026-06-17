;<div className='w-full px-4 md:px-0 lg:border-t md:border-b border-[#2F3038] border-0'>
  <section className='max-w-7xl mx-auto grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-4 divide-x divide-y divide-[#2F3038] md:divide-y-0  border-[#2F3038]'>
    {stats.map((s) => (
      <div
        key={s.label}
        className='p-6 md:p-10 flex flex-col justify-center cursor-pointer relative overflow-hidden group border  border-[#2F3038]/80 rounded-xl transition-all duration-500 ease-out hover:border-green-500/30 hover:shadow-[0_0_25px_rgba(34,197,94,0.06),inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-0.5 md:bg-transparent md:border-0 md:rounded-none md:translate-y-0 md:shadow-none md:hover:bg-zinc-900/20 md:hover:border-0 md:hover:translate-y-0'
      >
        {/* Value */}
        <div className='text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-white transition-colors duration-300 group-hover:text-green-400'>
          {s.value}
        </div>

        {/* Label */}
        <div className='mt-2 text-xs lg:text-sm text-white/40 tracking-wider font-light uppercase'>
          {s.label}
        </div>
      </div>
    ))}
  </section>
</div>
