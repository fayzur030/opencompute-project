// 'use client'

// import { useState } from 'react'
// import { ArrowRight, Menu, X } from 'lucide-react'
// import Link from 'next/link'

// const links = [
//   { label: 'Home', href: '/', active: true },
//   { label: 'Developers', href: '/developers' },
//   { label: 'Solutions', href: '/solutions' },
//   { label: 'Ecosystem', href: '/ecosystem' },
// ]

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <header className='w-full border-b border-white/10 bg-black'>
//       <nav className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8'>
//         {/* Logo */}
//         <Link
//           href='/'
//           className='text-xl font-semibold tracking-tight text-white'
//         >
//           OpenCompute
//         </Link>

//         {/* Desktop Menu */}
//         <ul className='hidden items-center gap-10 md:flex'>
//           {links.map((link) => (
//             <li key={link.label}>
//               <Link
//                 href={link.href}
//                 className={`text-sm transition-colors hover:text-white ${
//                   link.active ? 'text-white' : 'text-white/70'
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Button */}
//         <Link
//           href='#hub'
//           className='hidden items-center gap-2 border border-white/30 bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-gray-300 md:inline-flex'
//         >
//           Enter HUB
//           <ArrowRight className='h-4 w-4' />
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className='text-white md:hidden'
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className='border-t border-white/10 bg-black md:hidden'>
//           <ul className='flex flex-col gap-6 px-6 py-6'>
//             {links.map((link) => (
//               <li key={link.label}>
//                 <Link
//                   href={link.href}
//                   className={`text-sm ${
//                     link.active ? 'text-white' : 'text-white/70'
//                   }`}
//                   onClick={() => setIsOpen(!isOpen)}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}

//             <Link
//               href='#hub'
//               className='inline-flex w-fit items-center gap-2 border border-white/30 bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-gray-300'
//             >
//               Enter HUB
//               <ArrowRight className='h-4 w-4' />
//             </Link>
//           </ul>
//         </div>
//       )}
//     </header>
//   )
// }
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // স্ক্রোল করলে ব্যাকগ্রাউন্ড ব্লার এবং বর্ডার গ্লো হবে
  useEffect(() => {
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/60 backdrop-blur-md border-b border-emerald-500/20 shadow-[0_4px_30px_rgba(16,185,129,0.03)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
          {/* Logo Section */}
          <Link href='/' className='flex items-center gap-2 group'>
            <div className='p-2 rounded-lg border border-zinc-800 bg-zinc-950 text-emerald-400 group-hover:border-emerald-500/50 transition-colors duration-300'>
              <Terminal
                size={20}
                className='group-hover:rotate-6 transition-transform'
              />
            </div>
            <span className='font-bold text-xl tracking-tight text-white'>
              Open<span className='text-emerald-400'>Compute</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors duration-200 relative py-2 group'
              >
                {link.name}
                {/* হোভার করলে নিচের ছোট্ট লাইন অ্যানিমেশন */}
                <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full' />
              </Link>
            ))}
          </div>

          {/* Desktop Right Side CTA Button */}
          <div className='hidden md:flex items-center gap-4'>
            <Link
              href='#launch'
              className='relative px-5 py-2.5 rounded-lg text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors duration-200 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]'
            >
              Launch App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 text-zinc-400 hover:text-white transition-colors'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Panel (Smooth slide down) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='fixed top-20 left-0 right-0 z-40 md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800 px-6 py-6'
          >
            <div className='flex flex-col gap-5'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-lg font-medium text-zinc-300 hover:text-emerald-400 transition-colors py-1'
                >
                  {link.name}
                </Link>
              ))}
              <hr className='border-zinc-800 my-2' />
              <Link
                href='#launch'
                onClick={() => setIsOpen(false)}
                className='w-full text-center py-3 rounded-lg text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
              >
                Launch App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
