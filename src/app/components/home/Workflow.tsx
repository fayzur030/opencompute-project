'use client'
import { m } from 'framer-motion'
import image from '../../../assets/workflow.png'
import Image from 'next/image'

const Workflow = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className='relative w-full min-h-[550px] sm:min-h-[600px] xl:h-[80vh] flex items-center bg-black overflow-hidden select-none'>
      <div className='absolute inset-0 w-full h-full flex justify-center xl:justify-end items-center z-0'>
        <Image
          src={image}
          alt='Workflow Automation'
          className='w-full h-full xl:w-auto xl:h-[90%] object-cover xl:object-contain object-center xl:object-right opacity-70 xl:opacity-100'
        />
      </div>
      <div className='absolute inset-0 bg-black/70 md:bg-gradient-to-r xl:from-black xl:via-black/40 xl:to-transparent z-10 pointer-events-none' />

      <div className='absolute inset-0 z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-center xl:justify-start'>
        <div className='w-full grid grid-cols-1 xl:grid-cols-12 items-center'>
          <m.div
            className='col-span-1 xl:col-span-7 flex flex-col items-center xl:items-start text-center xl:text-left space-y-6 xl:space-y-8 max-w-2xl mx-auto xl:mx-0'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
          >
            <m.h1
              className='text-white text-3xl sm:text-3xl md:text-4xl lg:text-4xl leading-[1.3] font-normal tracking-normal max-w-3xl'
              variants={itemVariants}
            >
              Unify your API stack into one seamless workflow. Start free,
              integrate in minutes, and scale effortlessly as you grow.
            </m.h1>

            <m.div variants={itemVariants} className='pt-4 xl:pt-2'>
              <m.button
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
                className='relative overflow-hidden bg-white text-black px-6 py-3.5 rounded-sm text-sm font-medium flex items-center gap-2 group cursor-pointer'
              >
                {/* Shine effect */}
                <m.div
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

                <span className='relative z-10'>Start for freeBuilding</span>

                {/* Arrow animation */}
                <m.span
                  className='relative z-10'
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  →
                </m.span>
              </m.button>
            </m.div>
          </m.div>

          <div className='hidden xl:block xl:col-span-6' />
        </div>
      </div>
    </section>
  )
}

export default Workflow
