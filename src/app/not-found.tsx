'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white'>
      {/* Background Glow */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl' />
        <div className='absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl' />
        <div className='absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl' />
      </div>

      <div className='mx-auto max-w-3xl text-center'>
        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-8xl font-black text-transparent md:text-[12rem]'
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='mt-4 text-3xl font-bold tracking-tight md:text-5xl'
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className='mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400'
        >
          The page you’re looking for doesn’t exist or may have been moved. Try
          going back or return to the homepage.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'
        >
          <Link
            href='/'
            className='group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200'
          >
            <Home className='h-5 w-5' />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className='group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10'
          >
            <ArrowLeft className='h-5 w-5' />
            Go Back
          </button>
        </motion.div>

        {/* Floating Icon */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='mt-16 flex justify-center'
        >
          <div className='rounded-full border border-white/10 bg-white/5 p-6 backdrop-blur-xl'>
            <Search className='h-10 w-10 text-cyan-400' />
          </div>
        </motion.div>
      </div>
    </main>
  )
}
