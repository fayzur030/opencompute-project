'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Assets (আপনার পাথ অনুযায়ী ঠিক রাখুন)
import DV1 from '../../../assets/DV1.png'
import DV2 from '../../../assets/DV2.png'
import F from '../../../assets/F.png'
import K from '../../../assets/K.png'
import C from '../../../assets/C.png'
import M from '../../../assets/M.png'
import Sky from '../../../assets/Sky.png'

const TAB_DATA = {
  build: {
    label: 'Build',
    leftContent: {
      title1: 'Fast development cycles',
      desc1: 'Port existing Python, C++ or Go apps or use your favourite zkVM.',
      title2: 'Easy maintenance',
      desc2: 'Port existing Python, C++ or Go apps or use your favourite zkVM',
    },
    rightInfo: {
      titleText1: 'LANGUAGES:', // হেডার টেক্সটও ডাইনামিক করার জন্য
      titleText2: 'FRAMEWORKS:',
      titleText3: 'AI MODELS:',
      languages1: 'Go | Rust | Python | SPI | ZK Wasm',
      languages2: 'SPA | ZKWASM | + Others ',
      languages3: 'Mistral | Falcon | Ollama',
      langImages: [DV2, DV1],
      showSP1: true,
      frameworkImages: [K, F, C],
      aiImages: [M, Sky],
    },
    code: `response = ollama.chat(
  model='llama3',
  messages=[{
    'role': 'user',
    'content': 'Why is the sky blue?'
  }]
)
print(response['message']['content'])

nitro-cli build-enclave \\
--docker-uri enclave:latest \\
--output-file enclave.eif`,
  },
  compute: {
    label: 'Compute',
    leftContent: {
      title1: 'High-performance TEEs',
      desc1:
        'Run your workloads in secure enclaves with hardware-level isolation.',
      title2: 'Auto-scaling nodes',
      desc2: 'Automatically scale your compute resources based on demand.',
    },
    rightInfo: {
      titleText1: 'DEVELOPMENT ENVIRONMENTS:',
      titleText2: 'DATABASE CONNECTORS:',
      titleText3: 'CLOUD DEPLOYMENTS:',
      languages1: 'VS Code | Jupter | RStudio',
      languages2: 'PostrgeSQL | Redis | MongoDB ',
      languages3: 'AWS Lambda | GCP Function | Azure Function',
      langImages: [DV2, DV1],
      showSP1: false,
      frameworks: 'Docker | Kubernetes | Enclaves',
      frameworkImages: [K, C],
      aiModels: 'Llama 3 | GPT-4 | Claude',
      aiImages: [M],
    },
    code: `def compute_workload():
    # Initializing Secure Enclave
    enclave.init(mode="TEE")
    
    # Running heavy computation
    result = secure_process(data)
    
    return {
        "status": "Verified",
        "result": result
    }
    
# Scaling up node...
# Success!`,
  },
  verify: {
    label: 'Verify',
    leftContent: {
      title1: 'Zero-knowledge proofs',
      desc1: 'Generate and verify proofs without revealing sensitive data.',
      title2: 'On-chain verification',
      desc2: 'Seamlessly verify your enclave outputs on any EVM chain.',
    },
    rightInfo: {
      titleText1: 'VARIFACTION PIPELINE:',
      titleText2: 'ATTESTATION PROVIDERS:',
      titleText3: 'SIGNNING KEYS:',
      languages1: 'Source Integrity | Dependency Scan | License Audit',
      languages2: 'NIST CISA | OpenAttestation | ChainCode',
      languages3: 'RSA-4096 | Ed25519',
      langImages: [DV1],
      showSP1: true,
      frameworks: 'Halo2 | Plonky2 | SnarkJS',
      frameworkImages: [F, C],
      aiModels: 'Verifiable AI | Proof-Systems',
      aiImages: [Sky],
    },
    code: `// Verification Contract
function verifyProof(
    bytes calldata proof,
    uint256[] calldata input
) public view returns (bool) {
    bool isValid = verifier.verify(proof, input);
    require(isValid, "Invalid Proof");
    return true;
}

// Proof Verified Successfully!
// Transaction: 0x4a2b...9e`,
  },
}

// Bottom to Top Smooth Animation Variants
const slideUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export default function DevelopmentSection() {
  const tabKeys = Object.keys(TAB_DATA) as Array<keyof typeof TAB_DATA>
  const [activeTab, setActiveTab] = useState<keyof typeof TAB_DATA>('build')
  const [displayedCode, setDisplayedCode] = useState('')

  const currentContent = TAB_DATA[activeTab]

  // টাইপিং অ্যানিমেশন লজিক
  useEffect(() => {
    let timeout: NodeJS.Timeout
    let i = 0
    const codeToType = currentContent.code

    const type = () => {
      if (i <= codeToType.length) {
        setDisplayedCode(codeToType.slice(0, i))
        i++
        timeout = setTimeout(type, 15)
      } else {
        timeout = setTimeout(() => {
          i = 0
          setDisplayedCode('')
          type()
        }, 1500)
      }
    }

    setDisplayedCode('')
    type()

    return () => clearTimeout(timeout)
  }, [activeTab])

  return (
    <div className='px-4 mb-16'>
      <div className='w-full max-w-7xl mx-auto text-white rounded-xl border border-zinc-800 font-sans'>
        {/* Tabs */}
        <div className='flex w-full border border-zinc-800 rounded-lg overflow-hidden mb-8'>
          {tabKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative flex-1 py-4 text-sm font-medium transition-all duration-300 border-r border-zinc-800 last:border-r-0 ${
                activeTab === key
                  ? 'bg-[#16181D] text-white'
                  : 'bg-transparent text-zinc-500 hover:bg-zinc-900/40'
              }`}
            >
              {TAB_DATA[key].label}
              {activeTab === key && (
                <motion.div
                  layoutId='active-tab'
                  className='absolute inset-0 pointer-events-none'
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Container */}
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 lg:pl-6  pt-6 items-start overflow-hidden'>
          {/* Left - Text Content Animation */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              variants={slideUpVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className='space-y-8 py-4 pl-6 md:pl-6 lg:pl-0 '
            >
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className='text-3xl md:max-w-xs font-normal leading-[1.1] tracking-tight text-white md:text-3xl lg:text-4xl'
                >
                  {currentContent.leftContent.title1}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className='mt-2 max-w-xs text-[13px] leading-relaxed text-[#E5E5E5] md:text-sm'
                >
                  {currentContent.leftContent.desc1}
                </motion.p>
                <p className='text-zinc-100/95 text-sm leading-relaxed'></p>
              </div>

              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className='text-3xl md:max-w-xs font-normal leading-[1.1] tracking-tight text-white md:text-3xl lg:text-4xl'
                >
                  {currentContent.leftContent.title2}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className='mt-2 max-w-xs text-[13px] leading-relaxed text-[#E5E5E5] md:text-sm'
                >
                  {currentContent.leftContent.desc2}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right - Tech Info Layout and Code Window */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              variants={slideUpVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              transition={{ duration: 0.3, ease: 'easeOut', delay: 0 }}
              className='relative bg-[#A2FF59] lg:pt-8 lg:pl-6 md:pt-8 md:pl-6 rounded-lg overflow-hidden'
            >
              <div className='bg-[#0B0C10] rounded-t pt-6 min-h-[380px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:pl-6 md:pl-6 '>
                  {/* Left Info Panel (এখন সম্পূর্ণ ডাইনামিক) */}
                  <div className='space-y-5 text-[10px] lg:pl-0 md:pl-0 pl-6'>
                    {/* LANGUAGES */}
                    <div>
                      <h1 className='text-[#FFFFFF] text-lg mb-1 font-medium tracking-tight'>
                        {currentContent.rightInfo.titleText1}
                      </h1>
                      <p className='text-[#71717A] text-xs'>
                        {currentContent.rightInfo.languages1}
                      </p>
                    </div>

                    {/* Dynamic Language Images */}
                    <div className='flex items-center gap-4 mt-4'>
                      {currentContent.rightInfo.langImages.map((img, idx) => (
                        <Image
                          key={idx}
                          src={img}
                          alt='Lang Icon'
                          className='w-auto h-auto'
                        />
                      ))}
                    </div>

                    {/* FRAMEWORKS */}
                    <div className='border-t border-[#2A2A2E] pt-8'>
                      <h1 className='text-[#FFFFFF] text-lg mb-1 font-normal'>
                        {currentContent.rightInfo.titleText2}
                      </h1>
                      <p className='text-[#71717A] text-xs'>
                        {currentContent.rightInfo.languages2}
                      </p>

                      {/* Dynamic Framework Images */}
                      <div className='flex items-center gap-4 mt-4'>
                        {currentContent.rightInfo.frameworkImages.map(
                          (img, idx) => (
                            <Image key={idx} src={img} alt='Framework Icon' />
                          )
                        )}
                      </div>
                    </div>

                    {/* AI MODELS */}
                    <div className='border-t border-[#2A2A2E] pt-3'>
                      <h1 className='text-[#FFFFFF] text-lg mb-1 font-normal'>
                        {currentContent.rightInfo.titleText3}
                      </h1>
                      <p className='text-[#71717A] text-xs'>
                        {currentContent.rightInfo.languages3}
                      </p>

                      {/* Dynamic AI Images */}
                      <div className='flex items-center gap-4 mt-4'>
                        {currentContent.rightInfo.aiImages.map((img, idx) => (
                          <Image key={idx} src={img} alt='AI Icon' />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Code Window */}
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
