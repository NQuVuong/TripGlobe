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

const FAQPage = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <main className="w-full bg-white font-sans text-[#11223f]">
      {/* 1. BANNER */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center bg-[#0b1a2e]">
        <img src={BannerBg} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" alt="FAQ Banner" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-[40px] md:text-[50px] font-black mb-2 tracking-wide uppercase">FAQ</h1>
          <p className="text-[12px] font-bold text-white/80 uppercase tracking-widest">
            Home <span className="text-[#ff6b35] mx-2">•</span> FAQ
          </p>
        </div>
      </div>

      {/* 2. FAQ SECTION */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <span className="text-[#ff6b35] text-[12px] font-black uppercase tracking-widest mb-3 block">FAQ</span>
          <h2 className="text-[32px] md:text-[40px] font-black leading-tight text-[#11223f]">
            Unpacking Your Travel<br/>Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 items-start mb-16">
          {/* CỘT TRÁI: ẢNH NGẮM NÚI (Đã đổi sang faq-img, hiển thị hình chữ nhật bo góc chuẩn) */}
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

        {/* 3. HISTORY & CULTURE TEXT */}
        <div className="w-full mt-10">
          <h3 className="text-[22px] font-black mb-4 text-[#11223f]">A Journey Through History and Culture</h3>
          <p className="text-[13px] text-gray-500 leading-[1.8] mb-4">
            This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
          </p>
          <p className="text-[13px] text-gray-500 leading-[1.8] mb-4">
            If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>
          <p className="text-[13px] text-gray-500 leading-[1.8] mb-6">
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at IRestora Waiter App unless otherwise defined in this Privacy Policy.
          </p>

          <ul className="space-y-3 mb-8 list-none p-0">
            {[
              'Pamukkale Paradise: Soaking in the Natural Thermal Springs and Cotton Castle Terraces',
              'We believe travel fosters understanding',
              'Ephesus Expedition: Tracing Ancient Ruins and Roman Relics',
              'Ephesus Expedition: Tracing Ancient Ruins and Roman Relics'
            ].map((li, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[13px] font-black text-[#11223f]">
                <span className="text-[#11223f] text-[16px] rotate-45">✈</span> {li}
              </li>
            ))}
          </ul>

          <h3 className="text-[22px] font-black mb-4 text-[#11223f]">Tracing Ancient Ruins and Roman Relics</h3>
          <p className="text-[13px] text-gray-500 leading-[1.8] mb-4">
            If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>
          <p className="text-[13px] text-gray-500 leading-[1.8] mb-8">
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at IRestora Waiter App unless otherwise defined in this Privacy Policy.
          </p>

          <h3 className="text-[22px] font-black mb-4 text-[#11223f]">Destination Guides</h3>
          <p className="text-[13px] text-gray-500 leading-[1.8] mb-4">
            If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>
          <p className="text-[13px] text-gray-500 leading-[1.8] mb-8">
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at IRestora Waiter App unless otherwise defined in this Privacy Policy.
          </p>
        </div>
      </section>

      {/* 4. GET OUR PRO OFFERS */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#2ebfa5] rounded-xl p-10 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
            <div className="absolute -bottom-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 text-white max-w-md">
              <h2 className="text-[32px] font-black mb-3">Get our pro offers</h2>
              <p className="text-[13px] font-medium leading-relaxed opacity-90">Create a visual identity for your company, and an overall branding that stands out.</p>
            </div>
            <div className="relative z-10 w-full md:w-[400px] flex rounded-md overflow-hidden bg-white shadow-lg">
              <input type="email" placeholder="Enter your email" className="w-full px-5 py-4 text-[13px] outline-none text-[#11223f] border-none" />
              <button className="bg-[#0b1a2e] text-white px-8 font-black text-[12px] cursor-pointer border-none uppercase tracking-wider">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FAQPage