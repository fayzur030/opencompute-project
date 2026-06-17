'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function OpenComputeFeatures() {
  // Animation variants for the container cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 } 
    }
  };

  // Bar chart data for section 02
  const barHeights = [5, 4, 3, 2, 1]; // Number of segments per bar

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex items-center justify-center p-8 overflow-hidden select-none">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-l border-zinc-900 pl-4 md:pl-8">
        
        {/* --- SECTION 02: REDUCE COST --- */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between p-6 rounded-2xl min-h-[450px]"
        >
          <div>
            <span className="text-[#39FF14] font-mono text-sm tracking-wider block mb-4 opacity-80"> 02</span>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Reduce cost</h2>
            <p className="text-zinc-400 font-normal leading-relaxed text-[15px] max-w-md">
              Onchain verification of proofs is usually orders of magnitude cheaper than carrying out the entire computation completely onchain.
            </p>
          </div>

          {/* Animated Bar Chart Graphic */}
          <div className="h-44 flex items-end gap-3 mt-8 relative">
            {/* Soft Green Glow Behind Chart */}
            <div className="absolute inset-0 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
            
            {barHeights.map((segments, barIdx) => (
              <div key={barIdx} className="flex flex-col gap-[3px] w-10">
                {Array.from({ length: segments }).map((_, segIdx) => (
                  <motion.div
                    key={segIdx}
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    transition={{ 
                      delay: barIdx * 0.15 + (segments - segIdx) * 0.05, 
                      duration: 0.4, 
                      ease: "easeOut" 
                    }}
                    style={{
                      // Custom striped pattern mimicking the screenshot
                      backgroundImage: `radial-gradient(circle, transparent 20%, transparent 20%), linear-gradient(135deg, currentColor 25%, transparent 25%, transparent 50%, currentColor 50%, currentColor 75%, transparent 75%, transparent)`,
                      backgroundSize: '8px 8px'
                    }}
                    className={`h-7 w-full border border-dashed rounded-[2px] origin-bottom ${
                      barIdx === 0 
                        ? 'text-[#00FF66] border-[#00FF66]/30 bg-[#00FF66]/10' 
                        : 'text-zinc-800 border-zinc-800/50 bg-zinc-900/20'
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- SECTION 03: EARN AS THEY GROW --- */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between p-6 rounded-2xl min-h-[450px] border-l border-zinc-900 md:pl-8"
        >
          <div>
            <span className="text-[#39FF14] font-mono text-sm tracking-wider block mb-4 opacity-80">// 03</span>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Earn as They Grow</h2>
            <p className="text-zinc-400 font-normal leading-relaxed text-[15px] max-w-md">
              Data and logic of computations carried out offchain are not visible onchain or to the host machine in the case of enclaves and cryptographic schemes.
            </p>
          </div>

          {/* Secure Enclave Grid Graphic */}
          <div className="relative mt-8 h-48 border border-zinc-800/40 bg-zinc-950/40 rounded-sm flex items-center justify-center overflow-hidden">
            {/* Scanlines Background Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%),_linear-gradient(90deg,_rgba(255,0,0,0.06),_rgba(0,255,0,0.02),_rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none opacity-40" />

            {/* Corner Brackets */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-zinc-600" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-zinc-600" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-zinc-600" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-zinc-600" />

            {/* Glowing Lock Interface */}
            <div className="relative flex items-center justify-center w-32 h-32">
              {/* Outer Pulsing Glow */}
              <div className="absolute inset-0 bg-[#00FF66]/5 blur-xl rounded-full" />
              
              {/* Rotating Dotted Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-[#00FF66]/40 rounded-full p-1"
              />
              
              {/* Inner Solid Tech Ring */}
              <motion.div 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute w-24 h-24 border border-[#00FF66]/20 rounded-full flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm shadow-[inset_0_0_15px_rgba(0,255,102,0.1)]"
              >
                {/* SVG Padlock Icon */}
                <svg 
                  className="w-8 h-8 text-[#00FF66] filter drop-shadow-[0_0_8px_rgba(0,255,102,0.6)]" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.2}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                  />
                </svg>
              </motion.div>
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  );
}