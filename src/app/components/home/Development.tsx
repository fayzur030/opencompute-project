'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import DV1 from '../../../assets/DV1.png'
import DV2 from '../../../assets/DV2.png'
import F from '../../../assets/F.png'
import K from '../../../assets/K.png'
import C from '../../../assets/C.png'
import M from '../../../assets/M.png'
import Sky from '../../../assets/Sky.png'
import Image from 'next/image'
const tabs = [
  { id: 'build', label: 'Build' },
  { id: 'compute', label: 'Compute' },
  { id: 'verify', label: 'Verify' },
]

const codeSnippet = `response = ollama.chat(
  model='llama3',
  messages=[{
    'role': 'user',
    'content': 'Why is the sky blue?'
  }]
)
print(response['message']['content'])

nitro-cli build-enclave \\
--docker-uri enclave:latest \\
--output-file enclave.eif

Building eif.... (In 5 secs)
Enclave.eif built!`

export default function DevelopmentSection() {
  const [activeTab, setActiveTab] = useState('build')
  const [displayedCode, setDisplayedCode] = useState('')

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let i = 0

    const type = () => {
      if (i <= codeSnippet.length) {
        setDisplayedCode(codeSnippet.slice(0, i))
        i++

        timeout = setTimeout(type, 15)
      } else {
        timeout = setTimeout(() => {
          i = 0
          setDisplayedCode('')
          type()
        }, 1000)
      }
    }

    setDisplayedCode('')
    type()

    return () => clearTimeout(timeout)
  }, [activeTab])

  return (
    <div className='px-4 mb-16'>
      <div className='w-full max-w-7xl mx-auto text-white  rounded-xl border border-zinc-800 font-sans'>
        {/* Tabs */}
        <div className='flex w-full border border-zinc-800 rounded-lg overflow-hidden mb-8'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 py-4 text-sm font-medium transition-all duration-300 border-r border-zinc-800 last:border-r-0 ${
                activeTab === tab.id
                  ? 'bg-[#16181D] text-white'
                  : 'bg-transparent text-zinc-500 hover:bg-zinc-900/40'
              }`}
            >
              {tab.label}

              {activeTab === tab.id && (
                <motion.div
                  layoutId='active-tab'
                  className='absolute inset-0 pointer-events-none'
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-6 md:pl-6 pt-6  items-start'>
          {/* Left */}
          <div className='space-y-8 py-4 pl-6 lg:pl-0 md:pl-0'>
            <div>
              <h3 className='text-2xl md:text-3xl lg:text-4xl font-normal mb-2'>
                Fast development <br className='hidden md:block' />
                cycles
              </h3>

              <p className='text-zinc-100/95 text-sm leading-relaxed'>
                Port existing Python, C++ or Go apps or use your
                <br className='hidden md:block' />
                favourite zkVM.
              </p>
            </div>

            <div>
              <h3 className='text-2xl md:text-3xl lg:text-4xl font-normal mb-2'>
                Easy maintenance
              </h3>

              <p className='text-zinc-100/95 text-sm leading-relaxed'>
                Port existing Python, C++ or Go apps or use your
                <br className='hidden md:block' />
                favourite zkVM.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className='relative bg-[#A2FF59] lg:pt-8 lg:pl-6 md:pt-8 md:pl-6 rounded-lg overflow-hidden'>
            <div className='bg-[#0B0C10] rounded-t pt-6  min-h-[380px]'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:pl-6 md:pl-6 '>
                {/* Left Info */}
                <div className='space-y-5 text-[10px] lg:pl-0 md:pl-0 pl-6'>
                  <div>
                    <h1 className='text-[#FFFFFF] text-lg mb-1 font-medium'>
                      LANGUAGES:
                    </h1>
                    <p className='text-[#71717A] text-xs'>
                      Go | Rust | Python | SPI | ZK Wasm
                    </p>
                  </div>

                  <div className='flex items-center gap-4 mt-4'>
                    <div>
                      <Image
                        src={DV2}
                        alt='DV2'
                        className='w-[36px] h-[18px]'
                      />
                    </div>

                    <Image src={DV1} alt='DV1' className='w-[36px] h-[28px]' />
                  </div>
                  <div className='flex items-center gap-7'>
                    <h1 className='text-gray-400 font-bold text-lg'>SP1</h1>
                    <h1 className='text-[#71717A] font-medium text-xs'>
                      ZKWASM
                    </h1>
                    <h1 className='text-[#71717A] font-medium text-xs'>
                      + Others
                    </h1>
                  </div>

                  <div className='border-t border-[#2A2A2E]'>
                    <h1 className='text-[#FFFFFF] text-lg mb-1 font-normal mt-8'>
                      FRAMEWORKS:
                    </h1>
                    <p className='text-[#71717A] text-xs'>
                      Nitro | TensorFlow | PyTorch
                    </p>
                    <div className='flex items-center gap-4 mt-4'>
                      <Image src={K} alt='DV1' />
                      <Image src={F} alt='DV2' />
                      <Image src={C} alt='DV1' />
                    </div>
                  </div>

                  <div className='border-t border-[#2A2A2E]'>
                    <h1 className='text-[#FFFFFF] text-lg mb-1 font-normal mt-3'>
                      AI MODELS:
                    </h1>
                    <p className='text-[#71717A] text-xs'>
                      Mistral | Falcon | Ollama
                    </p>

                    <div className='flex items-center gap-4 mt-4'>
                      <div>
                        <Image
                          src={M}
                          alt='DV2'
                          //   className='w-[36px] h-[18px]'
                        />
                      </div>

                      <Image
                        src={Sky}
                        alt='DV1'
                        // className='w-[36px] h-[28px]'
                      />
                    </div>
                  </div>
                </div>

                {/* Code Window */}
                <div className='bg-[#121318] rounded border border-zinc-800 flex flex-col min-h-[435px]'>
                  <div className='flex items-center justify-between border-b border-zinc-800 px-4 py-2 text-[10px] text-zinc-500'>
                    <div className='flex gap-1'>
                      <span className='w-2 h-2 rounded-full bg-red-500'></span>
                      <span className='w-2 h-2 rounded-full bg-yellow-500'></span>
                      <span className='w-2 h-2 rounded-full bg-green-500'></span>
                    </div>

                    <span>index.html</span>
                  </div>

                  <pre className='flex-1 p-4 whitespace-pre-wrap break-all text-zinc-300 text-xs leading-relaxed font-mono'>
                    {displayedCode}
                    <span className='inline-block w-[2px] h-4 bg-white ml-1 animate-pulse align-middle' />
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
