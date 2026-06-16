'use client'

import Image from 'next/image'
import hero from '../../../assets/Hero.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='relative w-full bg-none md:bg-black text-white lg:min-h-screen flex flex-col justify-between overflow-hidden'>
      <div className='absolute inset-0 md:hidden'>
        <Image
          src={hero}
          alt='hero background'
          fill
          className='object-cover opacity-40'
          priority
        />
        {/* dark overlay */}
        <div className='absolute inset-0 bg-black/40' />
      </div>

      <div className='hidden md:flex w-full flex-grow justify-center  items-center relative mb-16 overflow-hidden bg-black'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none' />

        <div className='absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_150px_90px_rgba(0,0,0,1)]' />

        <motion.div
          className='w-full px-4 z-10'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src={hero}
              alt='OpenCompute Wireframe Illustration'
              className='w-full h-full'
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom content (same for both) */}
      <div className='w-full max-w-7xl mx-auto mt-24 md:mt-0 lg:mt-0 md:pt-0 lg:pt-0 flex flex-col md:flex-row md:items-end md:justify-between gap-8 px-4 md:px-8 pb-10 z-30 relative'>
        <div className='lg:absolute lg:bottom-15 z-30'>
          <h1 className=' md:text-4xl lg:text-6xl font-italic tracking-tight mb-4 font-italic text-4xl '>
            Decentralized <br className='block md:hidden lg:hidden' /> Compute{' '}
            <br className='hidden md:hidden lg:block' /> Verified{' '}
            <br className='block md:hidden lg:hidden' /> at Scale
          </h1>

          <p className='text-gray-400 text-sm lg:text-base md:text-base font-normal '>
            Harness the power of scalable coprocessors across{' '}
            <br className='block md:hidden lg:hidden' /> a decentralized
            network. OpenCompute
            <br className='hidden md:hidden lg:block' /> Protocol lets you
             access, process, and
            verify data securely and efficiently.
          </p>
        </div>

        {/* Buttons */}
        <div className='flex items-center gap-4 shrink-0 z-30 md:ml-auto whitespace-nowrap pb-1'>
          {/* Learn More Button */}
          <motion.button
            whileHover={{
              scale: 1.04,
              y: -2,
              boxShadow: '0 0 30px rgba(255,255,255,0.12)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 18,
            }}
            className='relative overflow-hidden border border-white/40 bg-white/[0.03] backdrop-blur-xl hover:bg-white hover:text-black text-white px-6 py-3 rounded-sm text-sm font-medium flex items-center gap-2 group cursor-pointer'
          >
            {/* Glow Sweep */}
            <motion.div
              className='absolute inset-0 opacity-0 group-hover:opacity-100'
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
              }}
            />

            <span className='relative z-10'>Learn more</span>

            {/* Arrow animation */}
            <motion.span
              className='relative z-10'
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              →
            </motion.span>
          </motion.button>

          {/* Start Building Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: '0 0 45px rgba(168,85,247,0.45)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 18,
            }}
            className='relative overflow-hidden bg-white text-black px-6 py-3 rounded-sm text-sm font-medium flex items-center gap-2 group cursor-pointer'
          >
            {/* Shine effect */}
            <motion.div
              className='absolute inset-0 opacity-40'
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              }}
            />

            <span className='relative z-10'>Start Building</span>

            {/* Arrow animation */}
            <motion.span
              className='relative z-10'
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Hero
