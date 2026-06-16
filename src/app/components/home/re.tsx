          <div className='mx-auto grid max-w-7xl grid-cols-1 divide-y divide-neutral-800 px-6 sm:grid-cols-2 sm:divide-y-0 sm:divide-x md:grid-cols-4'>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                // মোবাইলে চারপাশেই সুন্দর প্যাডিং (py-8 px-4) পাবে, আর sm (ট্যাবলেট/ডেক্সটপ) স্ক্রিন থেকে Figma-র গ্রিড বর্ডার অ্যালাইনমেন্ট কাজ করবে
                className='py-8 px-4 sm:py-10 sm:pr-6 sm:pl-8 first:sm:pl-0'
              >
                <div className='text-left '>
                  {/* Stat Value */}
                  <div className='text-3xl font-normal tracking-tight text-white leading-none sm:text-4xl md:text-[40px]'>
                    {s.value}
                    {s.unit && (
                      <span className='ml-1.5 text-xl font-normal text-white sm:text-2xl md:text-3xl'>
                        {s.unit}
                      </span>
                    )}
                  </div>

                  {/* Stat Label */}
                  <div className='mt-3 text-sm font-normal text-neutral-400 sm:text-base'>
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div> mobile ey potita card ey border hobey destop ey same takbey


          className='rounded-md border lg:border-t md:bor border-neutral-800 bg-[#0b0d0c] py-8 px-4 sm:rounded-none sm:border-0 sm:bg-transparent sm:py-10 sm:pr-6 sm:pl-8 first:sm:pl-0'