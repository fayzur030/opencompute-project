'use client'
import React from 'react'
import { motion } from 'framer-motion'
// ডামি ডাটা (আপনার ফিগমা ফাইলের উপর ভিত্তি করে)
const resourcesData = [
  {
    id: 1,
    date: 'March 27, 2026',
    title: 'Oyster vs. zkML: TEE-Based AI Benchmark',
    description:
      'In the previous part of this article series, we explored the pitfalls of centralized AI and how web3 could alleviate them. However, running models on-chain is impossible without paying extremely high gas fees.',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&q=80', // আপনার ফিগমার গ্রাফিক্স বা ইমেজ এখানে বসাবেন
  },
  {
    id: 2,
    date: 'April 12, 2026',
    title: 'Private ZK Proofs with Kalypso TEEs',
    description:
      'In our previous article, Securing decentralized ZK prover networks through restaking, we explored the case for prover marketplaces, briefly touched upon the architecture of Kalypso and explained its merits.',
    image:
      'https://images.unsplash.com/photo-1644024314755-57f89db3132e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    date: 'May 20, 2026',
    title: 'Networking in AWS Nitro Enclaves with Dual Proxies ...',
    description:
      'AWS Nitro Enclaves is a Trusted Execution Environment (TEE) implementation based on the AWS Nitro TPM security chip.',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    date: 'June 27, 2026',
    title: 'Securing decentralized ZK prover networks through restaking',
    description:
      'We are pleased to share that Kalypso, the ZK proof marketplace, will be collaborating with Symbiotic in a first of its kind partnership to secure decentralized prover networks with restaked ETH.',
    image:
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&q=80',
  },
]

// অ্যানিমেশন ভ্যারিয়েন্টস (Framer Motion)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // একটির পর আরেকটি কার্ড অ্যানিমেট হবে
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function ResourcesSection() {
  return (
    <section className='bg-black text-white py-20 px-6 sm:px-12 md:px-20 font-sans min-h-screen'>
      {/* Header Section */}
      <div className='text-center mb-16'>
        <span className='inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#999999] uppercase mb-3 border border-neutral-800 rounded-full px-3 py-1 bg-neutral-950'>
          <span className='w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse'></span>
          Resources
        </span>
        <h2 className='text-4xl md:text-5xl font-medium tracking-tight mb-4'>
          Resources
        </h2>
        <p className='text-[#999999] text-sm md:text-base max-w-md mx-auto'>
          We have countless blog posts to get you started
        </p>
      </div>

      {/* Grid Cards Section */}
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }} // স্ক্রোলে একবারই অ্যানিমেশন হবে
      >
        {resourcesData.map((item) => (
          <motion.article
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }} // হোভার করলে সামান্য উপরে উঠবে
            className='flex flex-col bg-neutral-950/40 border border-neutral-900 rounded-lg p-5 hover:border-neutral-800 transition-colors duration-300 group cursor-pointer'
          >
            {/* Image Placeholder / Visual Container */}
            <div className='w-full aspect-[4/3] bg-neutral-900 border border-neutral-800 rounded-md mb-6 overflow-hidden flex items-center justify-center relative'>
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0'
              />
            </div>

            {/* Date */}
            <span className='text-xs text-[#999999] font-medium mb-3 block'>
              {item.date}
            </span>

            {/* Title */}
            <h3 className='text-lg font-normal tracking-tight text-white mb-3 leading-snug group-hover:text-neutral-200 transition-colors'>
              {item.title}
            </h3>

            {/* Description */}
            <p className='text-sm text-[#999999] leading-relaxed font-light line-clamp-4 mt-auto'>
              {item.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
