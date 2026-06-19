'use client'

import { motion } from 'framer-motion'
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
export default function ResourcesSection() {
  return (
    <section className='bg-black text-white py-20 px-6 md:px-10 lg:px-16'>
      {/* Header */}
      <motion.div
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
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-neutral-800 overflow-hidden'
      >
        {resourcesData.map((item) => (
          <motion.article
            key={item.id}
            variants={cardVariants}
            whileHover='hover'
            className='group relative overflow-hidden border-b lg:border-b-0 md:border-r border-neutral-800 bg-[#050505] cursor-pointer'
          >
            {/* Glow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className='absolute inset-0 bg-[radial-gradient(circle_at_top,#153a24,transparent_70%)] pointer-events-none'
            />

            {/* Image */}
            <div className='relative h-52 overflow-hidden'>
              <motion.div
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
              </motion.div>
            </div>

            {/* Content */}
            <div className='relative z-10 p-4 flex flex-col'>
              <motion.span
                whileHover={{
                  color: '#fff',
                }}
                className='text-xs text-neutral-500 mb-4'
              >
                {item.date}
              </motion.span>

              <motion.h3
                whileHover={{
                  x: 8,
                }}
                transition={{ duration: 0.3 }}
                className='text-lg font-normal leading-snug mb-1'
              >
                {item.title}
              </motion.h3>

              <motion.p
                whileHover={{
                  y: -3,
                }}
                transition={{ duration: 0.3 }}
                className='text-xs leading-5 text-neutral-500 line-clamp-4'
              >
                {item.description}
              </motion.p>
            </div>

            {/* Bottom Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
              className='origin-left absolute bottom-0 left-0 h-[2px] w-full bg-green-400'
            />

            {/* Border Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='absolute inset-0 border border-green-500/40 pointer-events-none'
            />
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
