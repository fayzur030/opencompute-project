'use client'

import { Lock } from 'lucide-react'

const stats = [
  { value: '500M nodes', label: 'Scale' },
  { value: '10 ms startup', label: 'Execution speed' },
  { value: '100 MB', label: 'Memory per instance' },
  { value: '5 min per server', label: 'Task duration' },
]

export default function Cards() {
  return (
    <div className='mt-10 min-h-screen bg-black text-white antialiased selection:bg-green-500/30 '>
      {/* Stats Grid - Fixed Borders to match exactly like Figma */}
      <div className='border-[#2F3038] border-t border-b'>
        <section className='max-w-7xl mx-auto border-t grid grid-cols-2 border-b border-white/10 md:grid-cols-4'>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 md:p-10 flex flex-col justify-center
              ${i % 2 !== 0 ? 'border-l border-[#2F3038]' : ''} 
              ${i >= 2 ? 'border-t border-[#2F3038] md:border-t-0' : ''}
              ${i > 0 ? 'md:border-l md:border-t-0 border-[#2F3038]' : ''}
            `}
            >
              <div className='text-xl font-normal tracking-tight text-white lg:text-4xl md:text-3xl '>
                {s.value}
              </div>
              <div className='mt-1 text-xs lg:text-base md:text-base text-white/40 '>
                {s.label}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Hero Section - Clean padding and responsive text matching the design */}
      <section className='px-6 py-16 md:px-12 md:py-24 max-w-7xl mx-auto w-full border-l-2 border-[#2F3038]'>
        <h1 className='text-4xl font-normal leading-[1.1] tracking-tight text-white  md:text-4xl lg:text-5xl'>
          GPU-Powered
          <br />
          On-Chain Execution
        </h1>

        <p className='mt-6 max-w-xl text-sm leading-relaxed text-white/50 md:text-base'>
          Open computer allows computations to be delegated to TEE-based
          off-chain micro services with proofs and attestations verified
          on-chain.
        </p>
      </section>

      {/* Feature Cards Grid - Divider approach for perfect borders */}
      <section className='grid grid-cols-1 border-t   md:grid-cols-3 max-w-7xl mx-auto w-full border-l-2 border-[#2F3038]'>
        <FeatureCard
          number='// 01'
          title='Accelerate execution'
          description="Verifiable off-chain execution doesn't require redundant replication of computations and can thus produce results much faster."
          visual={<GpuCpuVisual />}
          className=''
        />

        <FeatureCard
          number='// 02'
          title='Reduce cost'
          description='On-chain verification of proofs is usually orders of magnitude cheaper than carrying out the entire computation completely on-chain.'
          visual={<BarsVisual />}
          className='border-t border-[#2F3038] md:border-t-0 md:border-l'
        />

        <FeatureCard
          number='// 03'
          title='Earn as They Grow'
          description='Data and logic of computations carried out off-chain are not visible on-chain or to the host machine in the case of enclaves and cryptographic schemes.'
          visual={<LockVisual />}
          className='border-t border-[#2F3038] border-r md:border-t-0 md:border-l'
        />
      </section>
    </div>
  )
}

function FeatureCard({
  number,
  title,
  description,
  visual,
  className = '',
}: {
  number: string
  title: string
  description: string
  visual: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex flex-col p-6 md:p-10 ${className}`}>
      <div className='mb-6 font-mono text-[11px] tracking-wider text-white/30'>
        {number}
      </div>

      <h3 className='text-lg font-semibold tracking-tight text-white md:text-xl'>
        {title}
      </h3>

      <p className='mt-3 text-xs md:text-sm leading-relaxed text-white/40'>
        {description}
      </p>

      <div className='mt-12 flex flex-1 items-end justify-center w-full'>
        {visual}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------------
// Visual Components (Figma UI Illustrations updated for seamless match)
// ---------------------------------------------------------------------------------

function GpuCpuVisual() {
  return (
    <div
      className='relative h-48 w-full overflow-hidden rounded-md border border-white/5'
      style={{
        background:
          'radial-gradient(ellipse at center bottom, rgba(34,197,94,0.15), transparent 80%), #050505',
      }}
    >
      <div
        className='absolute inset-0 opacity-20'
        style={{
          backgroundImage:
            'radial-gradient(rgba(34,197,94,0.3) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      />

      <div className='relative flex h-full items-end justify-center gap-12 pb-6'>
        {/* GPU */}
        <div className='flex flex-col items-center gap-2'>
          <div className='relative flex flex-col items-center'>
            {/* Glowing bar behind */}
            <div
              className='h-24 w-12 rounded-sm bg-gradient-to-t from-green-600 to-green-400 opacity-80'
              style={{ boxShadow: '0 0 40px rgba(34,197,94,0.6)' }}
            />
            {/* Inner line detail */}
            <div className='absolute top-4 h-[2px] w-8 bg-white/80 rounded-full' />
          </div>

          <div className='grid h-8 w-12 grid-cols-4 gap-[2px] bg-green-950/50 p-[2px] rounded-sm border border-green-500/20'>
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className='bg-green-500/70 rounded-[1px]' />
            ))}
          </div>
          <span className='font-mono text-[10px] tracking-widest text-white/40 uppercase mt-1'>
            GPU
          </span>
        </div>

        {/* CPU */}
        <div className='flex flex-col items-center gap-2 pb-[2px]'>
          <div className='grid h-10 w-10 grid-cols-3 gap-[3px] bg-green-950/30 p-[3px] rounded-sm border border-green-800/30'>
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className='bg-green-800/60 rounded-[1px]' />
            ))}
          </div>
          <span className='font-mono text-[10px] tracking-widest text-white/40 uppercase mt-1'>
            CPU
          </span>
        </div>
      </div>
    </div>
  )
}

function BarsVisual() {
  const heights = [90, 75, 60, 48, 36, 26, 18]

  return (
    <div
      className='relative h-48 w-full overflow-hidden rounded-md border border-white/5'
      style={{
        background:
          'radial-gradient(circle at bottom, rgba(34,197,94,0.1), transparent 75%), #050505',
      }}
    >
      <div className='absolute inset-0 flex items-end justify-center gap-2 px-6 pb-6'>
        {heights.map((h, i) => (
          <div
            key={i}
            className='w-6 rounded-t-[2px]'
            style={{
              height: `${h}%`,
              background:
                i < 3
                  ? 'repeating-linear-gradient(180deg,#22c55e 0 3px,transparent 3px 5px)'
                  : 'repeating-linear-gradient(180deg,rgba(34,197,94,0.2) 0 3px,transparent 3px 5px)',
              boxShadow: i < 3 ? '0 0 20px rgba(34,197,94,0.4)' : 'none',
              opacity: i >= 3 ? 0.4 : 1,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function LockVisual() {
  return (
    <div
      className='relative h-48 w-full overflow-hidden rounded-md border border-white/5'
      style={{
        background:
          'radial-gradient(circle at center, rgba(34,197,94,0.2), transparent 70%), #050505',
      }}
    >
      {/* Figma style subtle corners */}
      {[
        'top-4 left-4 border-t border-l',
        'top-4 right-4 border-t border-r',
        'bottom-4 left-4 border-b border-l',
        'bottom-4 right-4 border-b border-r',
      ].map((c) => (
        <div key={c} className={`absolute h-3 w-3 border-white/30 ${c}`} />
      ))}

      <div className='absolute inset-0 flex items-center justify-center'>
        <div
          className='relative flex h-24 w-24 items-center justify-center rounded-full'
          style={{
            background:
              'radial-gradient(circle, rgba(34,197,94,0.4), transparent 75%)',
            boxShadow: '0 0 40px rgba(34,197,94,0.3)',
          }}
        >
          <div
            className='absolute inset-1 rounded-full border border-green-500/30'
            style={{ borderStyle: 'dashed' }}
          />

          <Lock
            className='relative z-10 h-7 w-7 text-white opacity-90'
            strokeWidth={2}
          />
        </div>
      </div>
    </div>
  )
}
