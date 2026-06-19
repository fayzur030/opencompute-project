'use client'
import { m } from 'framer-motion'

export default function FeaturesSection() {
  return (
    <section className=' text-white lg:mt-20 mt-5 py-16 px-4 md:px-8 lg:px-16 font-sans overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start'>
          <div className='lg:col-span-7 space-y-4'>
            {/* Tag */}
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#232429] bg-[#121316] text-xs font-medium text-zinc-400'>
              <span className='h-2 w-2 rounded-full bg-[#A2FF59]'></span>
              EXPRESSIVE
            </div>
            {/* Main Heading */}
            <m.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal tracking-tight text-zinc-100 leading-[1.15] md:leading-[1.1]'
            >
              Write code using familiar <br className='hidden lg:block' />
              languages and frameworks <br className='hidden lg:block' />
              rewrite this content
            </m.h1>
          </div>

          {/* Description */}

          <div className='lg:col-span-5 pt-2 lg:pt-14'>
            <m.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='text-zinc-100/90 text-sm md:text-base leading-relaxed max-w-xl'
            >
              Deploy and execute verifiable programs on a modern serverless
              infrastructure that dynamically scales based on workload
              requirements, providing secure, efficient, and fault-tolerant
              execution environments.
            </m.p>
          </div>
        </div>
      </div>
    </section>
  )
}
