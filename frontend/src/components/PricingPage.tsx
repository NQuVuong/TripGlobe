import React, { useState } from 'react'

// ĐÃ SỬA LẠI DÙNG ĐÚNG 1 ẢNH SẾP GIAO: faq-img.png.jpg
import BannerBg from '../assets/faq-img.png.jpg' 
import FaqGirlImg from '../assets/faq-img.png.jpg' 

const faqList = [
  { q: "What destinations do you offer tours to", a: "Triptopia offers a range of services including web development, software development, IT consulting, digital marketing." },
  { q: "What types of service do you provide?", a: "Triptopia offers a range of services including web development, software development, IT consulting, digital marketing." },
  { q: "What is included in the tour package?", a: "Triptopia offers a range of services including web development, software development, IT consulting, digital marketing." },
  { q: "What should I pack for my trip?", a: "Triptopia offers a range of services including web development, software development, IT consulting, digital marketing." },
]

const plans = [
  { name: 'BASIC', price: '29', isDark: false },
  { name: 'STANDARD', price: '69', isDark: true },
  { name: 'PREMIUM', price: '99', isDark: false },
]

const features = [
  'Graphic Design Module',
  'Front-end Module',
  'Marketing Module',
  '30 Minutes Mentor Class'
]

const PricingPage = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <main className="w-full bg-[#f9fbfb] font-sans">
      {/* 1. BANNER */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center bg-[#0b1a2e]">
        <img src={BannerBg} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" alt="Pricing Banner" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-[40px] md:text-[50px] font-black mb-2 tracking-wide uppercase">Pricing</h1>
          <p className="text-[12px] font-bold text-white/80 uppercase tracking-widest">
            Home <span className="text-[#ff6b35] mx-2">•</span> Pricing
          </p>
        </div>
      </div>

      {/* 2. FAQ SECTION */}
      <section className="py-24 max-w-5xl mx-auto px-6 bg-white md:bg-transparent">
        <div className="mb-10">
          <span className="text-[#ff6b35] text-[12px] font-black uppercase tracking-widest mb-3 block">FAQ</span>
          <h2 className="text-[32px] md:text-[40px] font-black leading-tight text-[#11223f]">
            Unpacking Your Travel<br/>Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 items-start">
          {/* CỘT TRÁI: ẢNH NGẮM NÚI (Hình chữ nhật bo góc chuẩn) */}
          <div className="w-full h-[350px] md:h-[400px] overflow-hidden rounded-md shadow-sm">
            <img src={FaqGirlImg} alt="Traveler" className="w-full h-full object-cover" />
          </div>

          <div className="w-full flex flex-col">
            {faqList.map((item, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={i} className="border-b border-gray-200">
                  <button 
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full flex justify-between items-center py-6 text-left bg-transparent cursor-pointer border-none"
                  >
                    <span className="text-[16px] font-black text-[#11223f] pr-4">{item.q}</span>
                    <span className="text-gray-400 text-xl transition-transform duration-300">
                      {isOpen ? '⌃' : '⌄'}
                    </span>
                  </button>
                  <div className={`transition-all duration-300 ${isOpen ? 'border-b-2 border-[#2ebfa5]' : 'border-transparent'}`}>
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[150px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}`}>
                      <p className="text-gray-500 text-[14px] font-medium leading-[1.8] m-0">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. PRICING CARDS */}
      <section className="pb-24 pt-10 max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-[#ff6b35] text-[12px] font-black uppercase tracking-widest mb-3 block">Pricing</span>
          <h2 className="text-[32px] md:text-[40px] font-black text-[#11223f] leading-tight">
            Unpacking Your Travel<br/>Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-24">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-10 flex flex-col items-center text-center rounded-lg transition-all ${
                plan.isDark 
                ? 'bg-[#0b1a2e] text-white shadow-2xl scale-105 z-10 border-none' 
                : 'bg-white text-[#11223f] shadow-md border border-[#ff6b35]/40'
              }`}
            >
              <h3 className={`text-[12px] font-black uppercase tracking-[0.15em] mb-4 ${plan.isDark ? 'text-white' : 'text-[#11223f]'}`}>
                {plan.name}
              </h3>
              
              <div className="flex items-start justify-center gap-1 mb-8">
                <span className={`text-[20px] font-bold mt-2 ${plan.isDark ? 'text-white' : 'text-[#11223f]'}`}>$</span>
                <span className="text-[54px] font-black leading-none">{plan.price}</span>
              </div>

              <ul className="w-full space-y-4 mb-10 list-none p-0 flex-grow">
                {features.map((feat, idx) => (
                  <li key={idx} className={`text-[13px] font-medium ${plan.isDark ? 'text-white/80' : 'text-[#11223f]'}`}>
                    {feat}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 font-black text-[12px] border-none cursor-pointer transition-colors rounded-sm ${
                  plan.isDark 
                  ? 'bg-[#2ebfa5] text-white hover:bg-[#26a690]' 
                  : 'bg-[#f4f7f6] text-[#2ebfa5] hover:bg-[#e8f0ed]'
                }`}
              >
                Start 14 Days Free Trial
              </button>
            </div>
          ))}
        </div>

        {/* 4. GET OUR PRO OFFERS */}
        <div className="bg-[#2ebfa5] rounded-xl p-10 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          <div className="absolute -bottom-10 right-20 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
          <div className="relative z-10 text-white max-w-md">
            <h2 className="text-[32px] font-black mb-3">Get our pro offers</h2>
            <p className="text-[13px] font-medium leading-relaxed opacity-90">Create a visual identity for your company, and an overall branding that stands out.</p>
          </div>
          <div className="relative z-10 w-full md:w-[400px] flex rounded-md overflow-hidden bg-white shadow-lg">
            <input type="email" placeholder="Enter your email" className="w-full px-5 py-4 text-[13px] outline-none text-[#11223f] border-none" />
            <button className="bg-[#0b1a2e] text-white px-8 font-black text-[12px] cursor-pointer border-none uppercase tracking-wider">Subscribe</button>
          </div>
        </div>

      </section>
    </main>
  )
}

export default PricingPage