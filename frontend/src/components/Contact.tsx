import React from 'react'
import Experience from './Experience' // Tái sử dụng nguyên cục Experience

// Ảnh sóng biển nền tối (Dùng chung với Sign Up)
import HeaderBg from '../assets/signup-bg.jpg' 
// Bản đồ
import MapImg from '../assets/map-img.png.jpg' 
// Ảnh cô gái áo đỏ
import ContactImg from '../assets/contact-img.png.jpg' 

const Contact = () => {
  return (
    <main className="w-full bg-white">
      
      {/* 1. Header Background Tối (Sóng biển) */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={HeaderBg} 
            alt="Contact Us Background" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#0b1a2e]/60"></div>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-[50px] font-black mb-3 tracking-wide">Contact</h1>
          <p className="text-[13px] font-bold text-white/90">
            Home <span className="text-[#ff6b35] mx-1.5">•</span> Contact
          </p>
        </div>
      </div>

      {/* 2. Phần Experience (Tái sử dụng) */}
      <div className="pt-10">
        <Experience />
      </div>

      {/* 3. Phần Bản đồ (Dấu chấm) */}
      <section className="py-20 bg-[#fafcfc]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col items-center">
          {/* Ảnh bản đồ căn giữa */}
          <div className="w-full max-w-4xl opacity-80 mix-blend-multiply">
            <img 
              src={MapImg} 
              alt="World Map" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 4. Phần Get in Touch (Form trái, Ảnh phải) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          
          {/* Card bọc ngoài */}
          <div className="bg-white rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row gap-10 lg:gap-16 items-stretch">
            
            {/* Cột trái: Form nhập liệu */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[32px] font-black text-[#11223f] mb-8 leading-tight">
                Get In Touch
              </h2>

              <form className="space-y-4">
                {/* Name */}
                <div>
                  <input 
                    type="text" 
                    placeholder="Enter name" 
                    className="w-full bg-[#f4f7f6] text-[#11223f] text-[13px] font-medium px-5 py-4 rounded outline-none border border-transparent focus:border-[#2ebfa5] transition-all placeholder:text-gray-400" 
                  />
                </div>
                
                {/* Email */}
                <div>
                  <input 
                    type="email" 
                    placeholder="Enter Your email" 
                    className="w-full bg-[#f4f7f6] text-[#11223f] text-[13px] font-medium px-5 py-4 rounded outline-none border border-transparent focus:border-[#2ebfa5] transition-all placeholder:text-gray-400" 
                  />
                </div>
                
                {/* Company Name */}
                <div>
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="w-full bg-[#f4f7f6] text-[#11223f] text-[13px] font-medium px-5 py-4 rounded outline-none border border-transparent focus:border-[#2ebfa5] transition-all placeholder:text-gray-400" 
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea 
                    placeholder="" 
                    rows={5}
                    className="w-full bg-[#f4f7f6] text-[#11223f] text-[13px] font-medium px-5 py-4 rounded outline-none border border-transparent focus:border-[#2ebfa5] transition-all" 
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="button" 
                  className="w-full bg-[#ff6b35] hover:bg-[#e85a25] text-white text-[13px] font-black py-4 rounded transition-colors mt-2 cursor-pointer border-none"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Cột phải: Ảnh cô gái áo đỏ */}
            <div className="w-full md:w-1/2">
              <img 
                src={ContactImg} 
                alt="Get In Touch" 
                className="w-full h-full object-cover rounded-xl min-h-[400px]"
              />
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Contact