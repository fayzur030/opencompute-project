import React from 'react'

export default function ComputeSpecs() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#060606] text-white p-6 font-sans'>
      {/* কার্ড কন্টেইনার */}
      <div className='relative w-full max-w-md p-8 rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900 to-black overflow-hidden shadow-2xl'>
        {/* ব্যাকগ্রাউন্ড সবুজ গ্লো (Glow Effect) */}
        <div className='absolute -bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none' />

        {/* টপ হেডার */}
        <span className='text-xs font-mono text-zinc-500'>// 01</span>
        <h2 className='text-2xl font-semibold tracking-tight mt-2 mb-3'>
          Accelerate execution
        </h2>
        <p className='text-sm text-zinc-400 leading-relaxed mb-12'>
          Verifiable offchain execution doesn't require redundant replication of
          computations and can thus produce results much faster.
        </p>

        {/* ভিজ্যুয়াল গ্রাফিক্স সেকশন */}
        <div className='flex items-end justify-between gap-4 h-48 px-2 relative z-10'>
          {/* 1. GPU Grid Box */}
          <div className='flex flex-col items-center gap-3 flex-1'>
            <span className='text-sm font-medium tracking-wide text-zinc-300'>
              GPU
            </span>
            <div className='grid grid-cols-12 gap-[1px] p-1.5 bg-zinc-950 border border-zinc-800 rounded-sm w-full aspect-square'>
              {Array.from({ length: 144 }).map((_, i) => (
                <div
                  key={i}
                  className='bg-emerald-500/80 rounded-[0.5px] aspect-square shadow-[0_0_4px_rgba(16,185,129,0.3)]'
                />
              ))}
            </div>
          </div>

          {/* 2. Middle Equalizer/Center Box */}
          <div className='flex flex-col items-center flex-1 h-full'>
            <div className='w-full h-full bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-2 flex flex-col justify-center gap-1 relative overflow-hidden group'>
              {/* গ্লোয়িং ইফেক্ট বক্সের ভেতরে */}
              <div className='absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-50' />

              {/* ইকুয়ালাইজার বার */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className='h-1.5 w-full bg-emerald-400/90 rounded-sm shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse'
                  style={{ animationDelay: `${i * 150}ms` }}
                />
              ))}
            </div>
          </div>

          {/* 3. CPU Core Box */}
          <div className='flex flex-col items-center gap-3 flex-1'>
            <span className='text-sm font-medium tracking-wide text-zinc-300'>
              CPU
            </span>
            <div className='grid grid-cols-4 gap-1 p-2 bg-zinc-950 border border-zinc-800 rounded-sm w-full aspect-square content-start'>
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className='bg-emerald-400 rounded-sm aspect-square shadow-[0_0_6px_rgba(52,211,153,0.4)]'
                />
              ))}
              {/* খালি কোর বা স্লট (ডিজাইনের সামঞ্জস্যের জন্য) */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className='border border-zinc-900 rounded-sm aspect-square'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
