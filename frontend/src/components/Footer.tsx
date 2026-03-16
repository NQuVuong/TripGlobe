import React from 'react'
import Gal1 from '../assets/gallery-img-1.png.jpg'
import Gal2 from '../assets/gallery-img-2.png.jpg'
import Gal3 from '../assets/gallery-img-3.png.jpg'
import Gal4 from '../assets/gallery-img-4.png.jpg'
import Gal5 from '../assets/gallery-img-5.png.jpg'
import Gal6 from '../assets/gallery-img-6.png.jpg'

const Footer = () => {
  return (
    <>
      {/* 1. KHỐI WRAPPER TRẮNG: Chứa nửa trên của Banner */}
      <div className="bg-white relative z-20">
        {/* translate-y-1/2 sẽ đẩy banner tụt xuống dưới 50% chiều cao của nó */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 translate-y-1/2">
          
          <div className="bg-[#2ebfa5] rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
            
            {/* Họa tiết vòng tròn mờ trên nền xanh ngọc */}
            <div className="absolute -left-16 -top-24 w-64 h-64 border-[30px] border-white/10 rounded-full"></div>
            <div className="absolute right-[30%] -bottom-32 w-80 h-80 border-[40px] border-white/10 rounded-full"></div>

            {/* Chữ bên trái */}
            <div className="relative z-10">
              <h2 className="text-white text-3xl md:text-4xl font-black mb-3 tracking-tight">
                Get our pro offers
              </h2>
              <p className="text-white/90 text-[13px] max-w-sm leading-relaxed">
                Create a visual identity for your company, and an overall branding that stands out.
              </p>
            </div>

            {/* Ô Input bên phải */}
            <div className="w-full md:w-auto relative z-10 flex-1 max-w-md">
              <div className="bg-white rounded-md p-1.5 flex shadow-lg">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 text-[13px] font-medium outline-none border-none bg-transparent text-[#11223f] placeholder-gray-400"
                />
                <button className="bg-[#11223f] text-white text-[11px] font-bold px-8 py-3.5 rounded border-none cursor-pointer hover:bg-black transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. KHỐI FOOTER CHÍNH: Nền xám xanh nhạt, pt-40 để chừa khoảng trống cho nửa dưới banner */}
      <footer className="bg-[#f4f9f8] pt-40 pb-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Cột 1: Logo & Giới thiệu */}
            <div>
              <h2 className="text-2xl font-black text-[#11223f] mb-4 flex items-center gap-1.5">
                <span className="text-[#ff6b35]">✈</span> Triptopia
              </h2>
              <p className="text-gray-500 text-[11px] leading-relaxed mb-6 font-medium pr-4">
                Hello, we are Lifi Media. Our goal is to translate the positive effects from revolutionizing.
              </p>
              <div className="flex gap-3">
                <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#11223f] cursor-pointer hover:bg-[#ff6b35] hover:text-white transition-all shadow-sm">f</span>
                <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#11223f] cursor-pointer hover:bg-[#ff6b35] hover:text-white transition-all shadow-sm">in</span>
                <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#11223f] cursor-pointer hover:bg-[#ff6b35] hover:text-white transition-all shadow-sm">ig</span>
                <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#11223f] cursor-pointer hover:bg-[#ff6b35] hover:text-white transition-all shadow-sm">tw</span>
              </div>
            </div>

            {/* Cột 2: About */}
            <div className="lg:pl-8">
              <h3 className="text-[#11223f] font-black text-[15px] mb-6">About</h3>
              <ul className="space-y-3.5">
                <li><a href="#" className="text-gray-500 text-[11px] font-bold hover:text-[#ff6b35] transition-colors no-underline">About Us</a></li>
                <li><a href="#" className="text-gray-500 text-[11px] font-bold hover:text-[#ff6b35] transition-colors no-underline">Our Services</a></li>
                <li><a href="#" className="text-gray-500 text-[11px] font-bold hover:text-[#ff6b35] transition-colors no-underline">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 text-[11px] font-bold hover:text-[#ff6b35] transition-colors no-underline">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Cột 3: Contact */}
            <div>
              <h3 className="text-[#11223f] font-black text-[15px] mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-500 text-[11px] font-bold">
                  <span className="text-sm">📞</span> +012 345 67890
                </li>
                <li className="flex items-center gap-3 text-gray-500 text-[11px] font-bold">
                  <span className="text-sm">✉</span> cxqya@example.com
                </li>
                <li className="flex items-center gap-3 text-gray-500 text-[11px] font-bold">
                  <span className="text-sm">📍</span> 123 Street, New York, USA
                </li>
              </ul>
            </div>

            {/* Cột 4: Gallery */}
            <div>
              <h3 className="text-[#11223f] font-black text-[15px] mb-6">Gallery</h3>
              <div className="grid grid-cols-3 gap-2.5">
                <img src={Gal1} className="w-full h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" alt="Gallery 1" />
                <img src={Gal2} className="w-full h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" alt="Gallery 2" />
                <img src={Gal3} className="w-full h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" alt="Gallery 3" />
                <img src={Gal4} className="w-full h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" alt="Gallery 4" />
                <img src={Gal5} className="w-full h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" alt="Gallery 5" />
                <img src={Gal6} className="w-full h-16 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" alt="Gallery 6" />
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-400 text-[10px] font-bold">
              © 2024 Triptopia. All rights reserved
            </p>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer