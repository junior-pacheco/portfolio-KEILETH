"use client"
import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Skills = () => {
  const [openSection, setOpenSection] = useState<number | null>(0)

  const skillSections = [
    {
      title: "Design & Development",
      content:
        "Creating seamless digital experiences through intuitive UI/UX design and modern web development technologies.",
    },
    {
      title: "Brand Strategy",
      content:
        "Developing comprehensive brand identities that resonate with target audiences and create lasting impressions.",
    },
    {
      title: "Digital Marketing",
      content:
        "Implementing effective digital marketing strategies to increase visibility and drive engagement across platforms.",
    },
    {
      title: "Content Creation",
      content:
        "Producing high-quality, engaging content that tells your brand's story and connects with your audience.",
    },
  ]

  return (
    <div className="bg-[#1C1C1C] min-h-[60vh] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-x-12 gap-y-4">
          <div className="mb-12 md:mb-0">
            <h3 className="text-[#A3A3A3] text-4xl font-light">Services and skills</h3>
          </div>

          <div className="space-y-2">
            {skillSections.map((section, index) => (
              <div key={index} className="border-b border-[#333333]">
                <button
                  onClick={() => setOpenSection(openSection === index ? null : index)}
                  className="w-full py-6 flex justify-between items-center text-left"
                >
                  <span className="text-[#A3A3A3] text-xl font-light hover:text-white transition-colors">
                    {section.title}
                  </span>
                  <span className="text-[#A3A3A3] text-xl z-0 transform transition-transform duration-300">
                    {openSection === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {openSection === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#727272] pb-6 font-light text-lg">{section.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills