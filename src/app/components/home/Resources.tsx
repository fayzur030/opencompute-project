'use client'

import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

import Resources1 from '../../../assets/Resources1.png'
import Resources2 from '../../../assets/Resources2.png'
import Resources3 from '../../../assets/Resources3.png'
import Resources4 from '../../../assets/network.png'

const resourcesData = [
  {
    id: 1,
    date: 'March 27, 2026',
    title: 'Oyster vs. zkML: TEE-Based AI Benchmark',
    description:
      'In the previous part of this article series, we explored the pitfalls of centralized AI and how web3 could alleviate them. However, running models on-chain is impossible without paying extremely high gas fees.',
    image: Resources1,
  },
  {
    id: 2,
    date: 'April 12, 2026',
    title: 'Private ZK Proofs with Kalypso TEEs',
    description:
      'In our previous article, Securing decentralized ZK prover networks through restaking, we explored the case for prover marketplaces, briefly touched upon the architecture of Kalypso and explained its merits.',
    image: Resources2,
  },
  {
    id: 3,
    date: 'May 20, 2026',
    title: 'Networking in AWS Nitro Enclaves with Dual Proxies',
    description:
      'AWS Nitro Enclaves is a Trusted Execution Environment (TEE) implementation based on the AWS Nitro TPM security chip.',
    image: Resources3,
  },
  {
    id: 4,
    date: 'June 27, 2026',
    title: 'Securing decentralized ZK prover networks through restaking',
    description:
      'We are pleased to share that Kalypso, the ZK proof marketplace, will be collaborating with Symbiotic in a first of its kind partnership to secure decentralized prover networks with restaked ETH.',
    image: Resources4,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const floatingAnimation = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  }),
}

export default function ResourcesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    let nextIndex = currentIndex + newDirection
    if (nextIndex < 0) nextIndex = resourcesData.length - 1
    if (nextIndex >= resourcesData.length) nextIndex = 0

    setCurrentIndex(nextIndex)
    setPage([page + newDirection, newDirection])
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 4000)
    return () => clearInterval(timer)
  }, [currentIndex, page])

  const ResourceCard = ({ item }: { item: (typeof resourcesData)[0] }) => (
    <m.article
      key={item.id}
      variants={cardVariants}
      whileHover='hover'
      className='group relative overflow-hidden border-b lg:border-b-0 md:border-r border-neutral-800 bg-[#050505] cursor-pointer h-full flex flex-col justify-between'
    >
      {/* Glow */}
      <m.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className='absolute inset-0 bg-[radial-gradient(circle_at_top,#153a24,transparent_70%)] pointer-events-none'
      />

      {/* Image */}
      <div className='relative h-52 overflow-hidden'>
        <m.div
          variants={floatingAnimation}
          animate='animate'
          whileHover={{
            scale: 1.08,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className='w-full h-full'
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className='object-contain'
          />
        </m.div>
      </div>

      {/* Content */}
      <div className='relative z-10 p-4 flex flex-col flex-grow'>
        <m.span
          whileHover={{ color: '#fff' }}
          className='text-xs text-neutral-500 mb-2 inline-block'
        >
          {item.date}
        </m.span>

        <m.h3
          whileHover={{ x: 8 }}
          transition={{ duration: 0.3 }}
          className='text-xl font-normal leading-snug lg:mb-2'
        >
          {item.title}
        </m.h3>

        <m.p
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
          className='text-xs leading-5 text-neutral-500 line-clamp-4 mt-5'
        >
          {item.description}
        </m.p>
      </div>

      {/* Bottom Line */}
      <m.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        className='origin-left absolute bottom-0 left-0 h-[2px] w-full bg-green-400'
      />

      {/* Border Animation */}
      <m.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className='absolute inset-0 border border-green-500/40 pointer-events-none'
      />
    </m.article>
  )

  return (
    <section className='bg-black text-white py-20 px-6 md:px-10 lg:px-16 overflow-hidden'>
      {/* Header */}
      <m.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className='text-center mb-16'
      >
        <span className='inline-flex items-center gap-2 px-4 py-1 rounded-full border border-neutral-800 bg-neutral-950 text-xs uppercase tracking-[0.2em] text-neutral-400'>
          <span className='h-2 w-2 rounded-full bg-green-500 animate-pulse' />
          Resources
        </span>

        <h2 className='mt-5 text-4xl md:text-5xl font-medium'>Resources</h2>

        <p className='mt-4 text-neutral-500 max-w-md mx-auto'>
          We have countless blog posts to get you started.
        </p>
      </m.div>

      {/* Desktop View */}
      <m.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='hidden md:grid max-w-7xl mx-auto grid-cols-2 lg:grid-cols-4 border border-neutral-800 overflow-hidden'
      >
        {resourcesData.map((item) => (
          <ResourceCard key={item.id} item={item} />
        ))}
      </m.div>

      {/* Mobile View with Centered Buttons */}
      <div className='block md:hidden max-w-sm mx-auto relative '>
        {/* Card Wrapper */}
        <div className='border border-neutral-800 overflow-hidden relative h-[450px] bg-[#050505]'>
          <AnimatePresence initial={false} custom={direction} mode='wait'>
            <m.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial='enter'
              animate='center'
              exit='exit'
              className='absolute inset-0 w-full h-full'
            >
              <ResourceCard item={resourcesData[currentIndex]} />
            </m.div>
          </AnimatePresence>
        </div>

        {/* Left Arrow Button (Centered Vertically) */}
        <button
          onClick={() => paginate(-1)}
          className='absolute -left-5 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center text-neutral-400 hover:text-white transition-colors active:scale-95 shadow-lg shadow-black/50'
          aria-label='Previous slide'
        >
          ←
        </button>

        {/* Right Arrow Button (Centered Vertically) */}
        <button
          onClick={() => paginate(1)}
          className='absolute -right-4 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center text-neutral-400 hover:text-white transition-colors active:scale-95 shadow-lg shadow-black/50'
          aria-label='Next slide'
        >
          →
        </button>

        {/* Indicators (Dots) underneath the card */}
        <div className='flex justify-center gap-2 mt-6'>
          {resourcesData.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-6 bg-green-500'
                  : 'w-1.5 bg-neutral-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
