'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Cpu, Zap, TrendingUp } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const stats = [
  { value: '500M', unit: 'nodes', label: 'Scale' },
  { value: '10', unit: 'ms startup', label: 'Execution speed' },
  { value: '100', unit: 'MB', label: 'Memory per instance' },
  { value: '5', unit: 'min per server', label: 'Task duration' },
]

const features = [
  {
    n: '// 01',
    title: 'Accelerate execution',
    body: "Verifiable offchain execution doesn't require redundant replication of computations and can thus produce results much faster.",
    Icon: Zap,
  },
  {
    n: '// 02',
    title: 'Reduce cost',
    body: 'Onchain verification of proofs is usually orders of magnitude cheaper than carrying out the entire computation completely onchain.',
    Icon: Cpu,
  },
  {
    n: '// 03',
    title: 'Earn as They Grow',
    body: 'Data and logic of computations carried out offchain are not visible onchain or to the host machine in the case of enclaves and cryptographic schemes.',
    Icon: TrendingUp,
  },
]

function GpuVisual() {
  return (
    <div className='relative h-48 w-full overflow-hidden rounded-md border border-emerald-500/20 bg-black/60'>
      <div
        className='absolute inset-0 opacity-40'
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,185,129,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.18) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />

      <div className='absolute inset-x-6 bottom-6 flex items-end gap-2'>
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 4 }}
            whileInView={{ height: `${20 + ((i * 37) % 70)}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: i * 0.05,
              ease: 'easeOut',
            }}
            className='flex-1 rounded-sm bg-gradient-to-t from-emerald-500/80 to-emerald-300/30'
          />
        ))}
      </div>

      <div className='absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-emerald-300/70'>
        GPU · CPU
      </div>
    </div>
  )
}

function LockVisual() {
  return (
    <div className='relative h-48 w-full overflow-hidden rounded-md border border-emerald-500/20 bg-black/60'>
      <div className='absolute inset-0 flex items-center justify-center'>
        {[0, 1, 2].map((r) => (
          <motion.span
            key={r}
            className='absolute rounded-full border border-emerald-400/40'
            style={{
              width: 60 + r * 40,
              height: 60 + r * 40,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 0.2, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: r * 0.4,
            }}
          />
        ))}

        <div className='relative z-10 flex h-14 w-14 items-center justify-center rounded-md bg-emerald-400/10 text-emerald-300'>
          <svg
            width='22'
            height='22'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <rect x='4' y='11' width='16' height='10' rx='2' />
            <path d='M8 11V7a4 4 0 018 0v4' />
          </svg>
        </div>
      </div>

      <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent' />
    </div>
  )
}

function CostVisual() {
  return (
    <div className='relative h-48 w-full overflow-hidden rounded-md border border-emerald-500/20 bg-black/60'>
      <div
        className='absolute inset-0 opacity-30'
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(16,185,129,0.25) 0 2px, transparent 2px 8px)',
        }}
      />

      <svg
        className='absolute inset-0 h-full w-full'
        viewBox='0 0 200 100'
        preserveAspectRatio='none'
      >
        <motion.path
          d='M0,80 C40,70 60,40 100,45 C140,50 160,20 200,10'
          stroke='rgb(110,231,183)'
          strokeWidth='1.5'
          fill='none'
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.6,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  )
}

const visuals = [GpuVisual, CostVisual, LockVisual]

function Index() {
  const heroRef = useRef(null)
  const inView = useInView(heroRef, { once: true })

  return (
    <div className='min-h-screen bg-black text-neutral-100 antialiased'>
      <section ref={heroRef} className='w-full pb-20'>
        <div className='mt-20 w-full bg-black lg:border-t md:border-t md:border-b border-neutral-800 md:border-0'>
          <div className='mx-auto grid max-w-7xl grid-cols-1 px-6 sm:grid-cols-2 md:grid-cols-4 md:border-neutral-800 md:divide-x md:divide-neutral-800'>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className='group relative py-3 md:py-14 md:pr-6 md:pl-8 first:md:pl-0'
              >
                {/* Glow Effect */}
                <div className='absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent blur-2xl md:hidden' />
                </div>

                {/* Card */}
                <div className='relative overflow-hidden rounded-xl border border-neutral-800/80 bg-[#0b0d0c] p-6 text-left transition-all duration-500 group-hover:border-neutral-600 group-hover:bg-[#111312] md:rounded-none md:border-0 md:bg-transparent md:p-0 md:hover:bg-transparent'>
                  {/* Animated top line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                    }}
                    className='absolute left-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent md:hidden'
                  />

                  {/* Number */}
                  <motion.div
                    initial={{ opacity: 0, letterSpacing: '10px' }}
                    whileInView={{ opacity: 1, letterSpacing: '0px' }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + i * 0.1,
                    }}
                    className='text-3xl font-normal leading-none tracking-tight text-white sm:text-4xl md:text-[40px]'
                  >
                    {s.value}

                    {s.unit && (
                      <span className='ml-1.5 text-xl font-normal text-white sm:text-2xl md:text-3xl'>
                        {s.unit}
                      </span>
                    )}
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.1,
                    }}
                    className='mt-3 text-sm font-normal text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200 sm:text-base'
                  >
                    {s.label}
                  </motion.div>

                  {/* Floating Blur */}
                  <div className='absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/5 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-white/10' />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GPU Section */}
      <section className='mx-auto max-w-7xl px-6 pb-24'>
        <div className='rounded-md border border-neutral-800 p-8 md:p-12'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='text-4xl font-light leading-tight tracking-tight md:text-5xl'
          >
            GPU-Powered
            <br />
            On-Chain Execution
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className='mt-6 max-w-xl text-sm leading-relaxed text-neutral-400'
          >
            Open compute allows computations to be delegated to TEE-based
            off-chain microservices with proofs and attestations verified
            onchain.
          </motion.p>

          <div className='mt-12 grid gap-6 border-t border-neutral-800 pt-10 md:grid-cols-3'>
            {features.map((f, i) => {
              const Visual = visuals[i]

              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                  }}
                  className='flex flex-col gap-5'
                >
                  <div className='font-mono text-xs text-emerald-400/80'>
                    {f.n}
                  </div>

                  <h3 className='text-xl font-medium'>{f.title}</h3>

                  <p className='text-sm leading-relaxed text-neutral-400'>
                    {f.body}
                  </p>

                  <Visual />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <footer className='mx-auto max-w-7xl px-6 py-10 text-xs text-neutral-600'>
        © {new Date().getFullYear()} OpenCompute Protocol
      </footer>
    </div>
  )
}

export default function Card() {
  return <Index />
}
