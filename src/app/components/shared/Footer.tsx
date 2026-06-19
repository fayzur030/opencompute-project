import Link from 'next/link'

const Footer = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://x.com/',
      icon: (
        <svg className='w-3.5 h-3.5 fill-current' viewBox='0 0 24 24'>
          <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: (
        <svg className='w-3.5 h-3.5 fill-current' viewBox='0 0 24 24'>
          <path d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: (
        <svg
          className='w-3.5 h-3.5 stroke-current fill-none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
          <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
          <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
        </svg>
      ),
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/',
      icon: (
        <svg className='w-3.5 h-3.5 fill-current' viewBox='0 0 24 24'>
          <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
        </svg>
      ),
    },
  ]

  const footerSections = [
    {
      title: 'Home',
      links: [
        { label: 'Staking', href: '/staking' },
        { label: 'Oyster', href: '/oyster' },
        { label: 'Kalypso', href: '/kalypso' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Blog', href: '/blog' },
        { label: 'Research', href: '/research' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Discord', href: 'https://discord.gg/opencompute' },
        { label: 'Telegram', href: 'https://t.me/opencompute' },
        { label: 'Media Kit', href: '/media-kit' },
        { label: 'Contribute', href: '/contribute' },
      ],
    },
  ]

  return (
    <footer className='w-full bg-[#030305] text-white pt-20 pb-8 border-t border-white/5 font-sans'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Top Section: Brand & Links */}
        <div className='grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16'>
          {/* Brand Info (Left Side) */}
          <div className='md:col-span-5 flex flex-col gap-6'>
            <Link
              href='/'
              className='text-3xl font-medium tracking-tight hover:opacity-90 transition-opacity'
            >
              OpenCompute
            </Link>
            <p className='text-[#8A8A93] text-sm md:text-base leading-relaxed max-w-sm'>
              OpenCompute is a decentralized computing protocol built to deliver
              secure, scalable, and verifiable execution across a distributed
              global network.
            </p>

            {/* Social Icons mapped from array */}
            <div className='flex items-center gap-3 mt-2'>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.name}
                  className='w-8 h-8 flex items-center justify-center border border-white/10 rounded-sm text-gray-400 hover:text-white hover:border-white/30 transition-colors duration-200 bg-white/[0.02]'
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns mapped from array (Right Side) */}
          <div className='md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:justify-items-end'>
            {footerSections.map((section, idx) => (
              <div
                key={idx}
                className='flex flex-col gap-4 min-w-[120px] last:col-span-2 last:sm:col-span-1'
              >
                <h4 className='text-sm font-medium text-white tracking-wider'>
                  {section.title}
                </h4>
                <ul className='flex flex-col gap-3 text-sm text-[#8A8A93]'>
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        {...(link.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className='hover:text-white transition-colors duration-200'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className='w-full h-[1px] bg-white/10' />

        {/* Bottom Section: Copyright & Legal */}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs md:text-sm text-[#8A8A93]'>
          <div>© 2026 OpenCompute. All Rights Reserved.</div>
          <div className='flex items-center gap-6'>
            <Link
              href='/privacy-policy'
              className='hover:text-white transition-colors duration-200'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms-conditions'
              className='hover:text-white transition-colors duration-200'
            >
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
