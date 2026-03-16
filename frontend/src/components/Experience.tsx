import React from 'react'
import ExperienceImg from '../assets/experience-1.jpg'

const FEATURES = ["To curate personalized itineraries", "We believe travel fosters understanding"]

const Experience = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Cột trái: Nội dung văn bản */}
        <div className="flex-1 text-left">
          <h4 className="text-[#ff6b35] font-extrabold text-[11px] uppercase tracking-[0.3em] mb-3">
            GET TO KNOW US
          </h4>
          <h2 className="text-4xl md:text-[42px] font-black text-[#11223f] mb-6 leading-[1.2]">
            Experience the World <br /> With Triptopia
          </h2>
          
          <div className="bg-[#eef7ff] p-5 rounded-xl border-l-4 border-[#2ebfa5] mb-8 shadow-sm">
            <p className="font-semibold text-[#11223f] text-sm md:text-base leading-relaxed">
              "The world is a book and those who do not travel read only one page."
            </p>
          </div>
          
          <ul className="mb-10 space-y-4">
            {FEATURES.map((item, index) => (
              <li key={index} className="flex items-center text-sm text-[#11223f] font-bold">
                <span className="w-5 h-5 rounded-full bg-[#11223f] text-white flex items-center justify-center mr-3 text-[10px] shrink-0">✓</span> 
                {item}
              </li>
            ))}
          </ul>
          
          <button className="bg-[#ff6b35] text-white px-9 py-3.5 rounded-full font-extrabold shadow-lg hover:bg-[#e85a25] transition-colors cursor-pointer border-none outline-none">
            Discover More
          </button>
        </div>

        {/* Cột phải: Căn chỉnh lại tọa độ thẻ Contact */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end">
          
          <div className="relative w-full max-w-[500px]">
            {/* Ảnh cụm gộp từ Figma */}
            <img 
              src={ExperienceImg} 
              alt="Experience" 
              className="w-full h-auto object-contain rounded-[2rem]" 
            />

            {/* THẺ CONTACT: Chỉnh top xuống 65% để dời xuống dưới */}
            <div className="absolute top-[65%] left-0 -translate-x-12 -translate-y-1/2 bg-[#ff6b35] text-white p-5 rounded-2xl text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-30 min-w-[180px] md:min-w-[200px]">
              {/* Icon Phone */}
              <div className="bg-[#11223f] w-12 h-12 rounded-full flex items-center justify-center absolute -top-6 left-1/2 -translate-x-1/2 border-4 border-white shadow-lg">
                <span className="text-xl">📞</span>
              </div>
              
              <div className="mt-4">
                <h5 className="font-bold text-[13px] leading-tight mb-1">Do You Still Have Question?</h5>
                <p className="text-[10px] opacity-90 font-medium mb-1">Call Us Anytime</p>
                <p className="font-black text-xl tracking-tight">(951) 852 456</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience