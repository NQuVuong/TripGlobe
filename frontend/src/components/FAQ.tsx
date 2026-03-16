import React, { useState } from 'react'
import FaqImage from '../assets/faq-img-1.png.jpg' // Tên ảnh chuẩn của ông đây

const FAQS = [
  {
    question: "What destinations do you offer tours to?",
    answer: "Triptopia offers a range of services including curated travel packages, custom itineraries, guided tours, and hotel bookings across top global destinations."
  },
  {
    question: "What types of service do you provide?",
    answer: "We provide luxury trips, affordable budget tours, solo travel packages, and experienced guides to ensure you have a seamless journey."
  },
  {
    question: "What is included in the tour package?",
    answer: "Most of our packages include accommodation, local transportation, selected meals, and guided tours. Flight tickets can be added upon request."
  },
  {
    question: "What should I pack for my trip?",
    answer: "It depends on your destination! We will send you a detailed packing list tailored to your specific tour and weather conditions a week before departure."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="py-24 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Cột trái: Tiêu đề & Ảnh */}
          <div>
            <h4 className="text-[#ff6b35] font-extrabold text-[11px] uppercase tracking-[0.2em] mb-4">
              FAQ
            </h4>
            <h2 className="text-4xl md:text-[46px] font-black text-[#11223f] leading-tight mb-10">
              Unpacking Your Travel <br /> Questions
            </h2>
            <div className="rounded-[2rem] overflow-hidden shadow-lg h-[400px]">
              <img 
                src={FaqImage} 
                alt="FAQ Travel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Cột phải: Accordion Questions */}
          <div className="lg:pt-28">
            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                  <div 
                    key={index} 
                    className="border-b border-gray-200 pb-4"
                  >
                    <button 
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full flex justify-between items-center text-left py-4 cursor-pointer bg-transparent border-none"
                    >
                      <h3 className={`font-black text-lg transition-colors ${isOpen ? 'text-[#11223f]' : 'text-gray-600'}`}>
                        {faq.question}
                      </h3>
                      <span className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                      </span>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-gray-500 text-sm leading-relaxed pb-4 pr-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQ