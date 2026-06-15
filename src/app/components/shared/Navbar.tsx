'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Network', href: '#network' },
    { name: 'Developers', href: '#developers' },
    { name: 'Compute', href: '#compute' },
    { name: 'Ecosystem', href: '#ecosystem' },
  ]

  return (
    <>
      <motion.nav
        initial={isMounted ? { y: -100, opacity: 0 } : false}
        animate={isMounted ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-emerald-500/20 shadow-[0_4px_30px_rgba(16,185,129,0.05)]'
            : 'bg-zinc-950 border-b border-zinc-800'
        }`}
      >
        <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-3 group'>
            <div className='p-2 rounded-lg border border-zinc-800 bg-black text-emerald-400 group-hover:border-emerald-500/50 transition-all duration-300'>
              <Terminal
                size={20}
                className='group-hover:rotate-6 transition-transform duration-300'
              />
            </div>

            <h1 className='text-xl font-bold tracking-tight text-white'>
              Open<span className='text-emerald-400'>Compute</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='relative text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors duration-300 py-2 group'
              >
                {link.name}
                <span className='absolute left-0 bottom-0 h-[2px] w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full' />
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className='hidden md:flex items-center'>
            <Link
              href='#launch'
              className='px-5 py-2.5 rounded-lg bg-emerald-400 text-black text-sm font-semibold hover:bg-emerald-300 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]'
            >
              Launch App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-zinc-300 hover:text-white transition-colors duration-300'
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className='fixed top-20 left-0 right-0 z-[998] md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800 px-6 py-6'
          >
            <div className='flex flex-col gap-5'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-lg font-medium text-zinc-300 hover:text-emerald-400 transition-colors duration-300'
                >
                  {link.name}
                </Link>
              ))}

              <div className='border-t border-zinc-800 pt-5'>
                <Link
                  href='#launch'
                  onClick={() => setIsOpen(false)}
                  className='block w-full text-center py-3 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition-all duration-300'
                >
                  Launch App
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
