'use client'
import { m } from 'framer-motion'
import CountUp from './CountUp'
import lock from '../../../assets/lock.png'
import Image from 'next/image'
import { useMemo } from 'react'

const stats = [
  { number: 500, suffix: 'M nodes', label: 'Scale' },
  { number: 10, suffix: ' ms', label: 'Execution speed' },
  { number: 100, suffix: ' MB', label: 'Memory per instance' },
  { number: 5, suffix: ' min', label: 'Task duration' },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export default function Cards() {
  return (
    <div className='mt-10 min-h-screen text-white antialiased selection:bg-green-500/30 px-3 md:px-0 lg:px-0'>
      {/* Stats Grid */}
      <div className='border-[#2F3038] md:border-t md:border-b lg:border-t lg:border-b'>
        <m.section
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.02 }}
          className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 divide-y divide-[#2F3038] md:divide-y-0'
        >
          {stats.map((s, index) => (
            <m.div
              key={s.label}
              custom={index}
              variants={cardVariants}
              className={`p-6 md:p-10 flex flex-col justify-center mx-2 my-3 md:mx-0 md:my-0 rounded-2xl md:rounded-none border border-[#2F3038] md:border-0 py-8 hover:shadow-2xl hover:bg-white/[0.03] ${
                index !== stats.length - 1
                  ? 'md:border-r md:border-r-[#2F3038]'
                  : ''
              }`}
            >
              <m.div className='text-xl font-normal tracking-tight text-white md:text-3xl lg:text-4xl'>
                <CountUp to={s.number} suffix={s.suffix} />
              </m.div>

              <m.div className='mt-1 text-xs md:text-base lg:text-base text-white/40'>
                {s.label}
              </m.div>
            </m.div>
          ))}
        </m.section>
      </div>

      {/* Hero Section */}
      <div className='pl-0 md:pl-10 lg:pl-16'>
        <section className='px-3 py-16 md:px-12 md:py-24 max-w-7xl mx-auto w-full md:border-l lg:border-l border-[#2F3038]'>
          <m.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='text-4xl font-normal leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl'
          >
            GPU-Powered
            <br />
            On-Chain Execution
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              delay: 0.15,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='mt-6 max-w-xl text-sm leading-relaxed text-[#E5E5E5] md:text-base'
          >
            Open computer allows computations to be delegated to TEE-based off
            chain micro services with proofs and attestations verified on-chain.
          </m.p>
        </section>
      </div>

      {/* Feature Cards Grid */}
      <div className='pl-0 md:pl-10 lg:pl-16 border md:border-0 border-[#2F3038] '>
        <section className='grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto w-full md:border-t border-[#2F3038] divide-y lg:divide-y-0 lg:divide-x divide-[#2F3038]'>
          <div
            style={{
              background: `radial-gradient(circle at left center, rgba(34,197,94,0.12), transparent 25%), radial-gradient(circle at right center, rgba(34,197,94,0.12), transparent 25%), linear-gradient(180deg, #080808 0%, #030303 50%, #000000 100%)`,
            }}
          >
            <FeatureCard
              number='// 01'
              title='Accelerate execution'
              description="Verifiable off-chain execution doesn't require redundant replication of computations and can thus produce results much faster."
              visual={<GpuCpuVisual />}
            />
          </div>
          <FeatureCard
            number='// 02'
            title='Reduce cost'
            description='On-chain verification of proofs is usually orders of magnitude cheaper than carrying out the entire computation completely on-chain.'
            visual={<BarsVisual />}
          />
          <FeatureCard
            number='// 03'
            title='Earn as They Grow'
            description='Data and logic of computations carried out offchain are not visible onchain or to the host machine in the case of enclaves and cryptographic schemes.'
            visual={<LockVisual />}
          />
        </section>
      </div>
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
    <div
      className={`flex flex-col h-full p-6 md:p-10 ${className} shadow-[0_0_30px_rgba(162,255,89,0.05)] bg-[#050505]/40 border-l border-[#2F3038] `}
    >
      <div className='mb-6 text-[11px] tracking-wider text-white/30'>
        {number}
      </div>

      <m.h3
        initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className='text-xl font-normal leading-[1.2] tracking-tight text-white md:text-2xl lg:text-3xl'
      >
        {title}
      </m.h3>

      <m.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          delay: 0.15,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className='mt-4 max-w-xl text-xs leading-relaxed text-[#E5E5E5] md:text-sm flex-grow'
      >
        {description}
      </m.p>

      <div className='mt-10 flex items-end justify-center w-full min-h-[224px]'>
        {visual}
      </div>
    </div>
  )
}

function GpuCpuVisual() {
  return (
    <div className='relative h-52 w-full overflow-hidden rounded-md'>
      <div className='inset-0 flex items-end justify-between gap-3 px-4 z-10 w-full h-full'>
        <div className='flex flex-col items-center gap-1.5 flex-1 mb-1'>
          <span className='font-mono text-[10px] tracking-widest text-white/40 uppercase'>
            GPU
          </span>
          <div className='grid grid-cols-12 gap-[1px] bg-zinc-950/80 border border-white/50 rounded-sm w-full aspect-square max-w-[90px]'>
            {Array.from({ length: 144 }).map((_, i) => (
              <m.div
                key={i}
                className='bg-[#A2FF59] rounded-[0.5px] aspect-square shadow-[0_0_4px_rgba(16,185,129,0.3)]'
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.9, 0.2] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (i % 12) * 0.08 + Math.floor(i / 12) * 0.04,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col items-center flex-1 h-full justify-end pb-1 '>
          <div className='w-full md:w-[120px] h-full bg-[#354E23] border-2 border-emerald-500/30 rounded-xl p-2 flex flex-col justify-center gap-1 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-50' />
            <m.div
              className='flex flex-col gap-1 w-full'
              animate={{ y: [0, -49, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className='h-1.5 w-full bg-[#A2FF59] rounded-sm shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse'
                  style={{ animationDelay: `${i * 150}ms` }}
                />
              ))}
            </m.div>
          </div>
        </div>

        <div className='flex flex-col items-center gap-1.5 flex-1 mb-1'>
          <span className='font-mono text-[10px] tracking-widest text-white/40 uppercase'>
            CPU
          </span>
          <div className='grid grid-cols-4 gap-[2px] p-1.5 bg-zinc-950/80 border border-white/50 rounded-sm w-full aspect-square max-w-[90px] content-start'>
            {Array.from({ length: 8 }).map((_, i) => (
              <m.div
                key={i}
                className='bg-[#A2FF59] rounded-sm aspect-square shadow-[0_0_6px_rgba(52,211,153,0.5)]'
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.6, 1, 0.3] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: 'linear',
                }}
              />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className='border border-zinc-900/40 rounded-sm aspect-square'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function BarsVisual() {
  const barSegments = [5, 4, 3, 2, 1]

  return (
    <div className='relative w-full h-52 bg-[#050505] rounded-md flex items-end justify-center gap-3 px-6 pb-2'>
      {barSegments.map((totalBlocks, barIdx) => {
        return (
          <div
            key={barIdx}
            className='w-14 p-1.5 flex flex-col gap-1 justify-end bg-[#354E23]'
          >
            {Array.from({ length: totalBlocks }).map((_, blockIdx) => (
              <m.div
                key={blockIdx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: barIdx * 0.1 + (totalBlocks - blockIdx) * 0.05,
                  duration: 0.3,
                }}
                style={{
                  backgroundImage:
                    barIdx === 0
                      ? 'repeating-linear-gradient(135deg, #00FF66, #A2FF59 2px, transparent 2px, transparent 6px)'
                      : 'repeating-linear-gradient(135deg, #BFB7B7, #BFB7B7 2px, transparent 2px, transparent 6px)',
                  opacity: barIdx === 0 ? 1 : 0.25,
                }}
                className='h-9 w-full'
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}

function CornerFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='relative h-56 w-full overflow-hidden rounded-md border border-white/5 bg-[#050505]'
      style={{
        background: `radial-gradient(circle at center, rgba(16, 185, 129, 0.10) 0%, rgba(0, 100, 0, 0.15) 40%, transparent 70%), #050505`,
      }}
    >
      <div className='absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] opacity-40 pointer-events-none' />

      {[
        'top-0 left-0 border-t-2 border-l-2',
        'top-0 right-0 border-t-2 border-r-2',
        'bottom-0 left-0 border-b-2 border-l-2',
        'bottom-0 right-0 border-b-2 border-r-2',
      ].map((c) => (
        <div key={c} className={`absolute h-4 w-4 border-white ${c}`} />
      ))}
      {children}
    </div>
  )
}
function LockVisual() {
  const lines = useMemo(() => {
    const round = (n: number) => Number(n.toFixed(4))

    return Array.from({ length: 72 }, (_, i) => {
      const angle = (i / 72) * Math.PI * 2

      const r1 = 60
      const r2 = 78

      return {
        x1: round(Math.cos(angle) * r1),
        y1: round(Math.sin(angle) * r1),
        x2: round(Math.cos(angle) * r2),
        y2: round(Math.sin(angle) * r2),
      }
    })
  }, [])

  return (
    <CornerFrame>
      <div className='absolute inset-0 flex items-center justify-center '>
        <div className='relative flex h-[180px] w-[180px] items-center justify-center '>
          {/* Outer Ring */}
          <m.svg
            width='180'
            height='180'
            viewBox='-100 -100 200 200'
            className='absolute'
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {lines.map((line, i) => (
              <line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke='#354E23'
                strokeWidth='1.5'
              />
            ))}
          </m.svg>

          {/* Inner Circle */}
          <m.svg
            width='180'
            height='180'
            viewBox='-100 -100 200 200'
            className='absolute'
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* <defs>
              <radialGradient id='circleGradient' cx='50%' cy='50%' r='50%'>
                <stop offset='0%' stopColor='#354E23' stopOpacity='0.35' />
                <stop offset='70%' stopColor='#354E23' stopOpacity='0.12' />
                <stop offset='100%' stopColor='#354E23' stopOpacity='0' />
              </radialGradient>
            </defs> */}

            <circle
              r='45'
              fill='url(#circleGradient)'
              stroke='#A2FF59'
              strokeWidth='1.8'
              strokeDasharray='4 4'
            />
          </m.svg>

          {/* Lock */}
          <m.div
            className='absolute z-10 flex h-14 w-14 items-center justify-center text-white '
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image src={lock} alt='Lock' className='h-[40px] w-[26px]' />
          </m.div>
        </div>
      </div>
    </CornerFrame>
  )
}
