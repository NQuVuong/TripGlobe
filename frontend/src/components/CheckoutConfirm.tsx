import React from 'react'
import { Link } from 'react-router-dom'

// Import ảnh (Sếp nhớ thay bằng ảnh thật của sếp nếu có nhé)
import HeaderBg from '../assets/signup-bg.jpg' 
import BigDestImg from '../assets/experience-1.jpg' // Lấy tạm ảnh dọc nào đó cho cột trái
import TourImg from '../assets/recent-blog-img-1.png.jpg' // Ảnh thumbnail nhỏ

const CheckoutConfirm = () => {
  return (
    <main className="w-full bg-[#f9fbfb]">
      
      {/* 1. Header Banner (Theo thiết kế vẫn để chữ CHECKOUT) */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={HeaderBg} alt="Checkout Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0b1a2e]/60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-[50px] font-black mb-3 tracking-wide uppercase">CHECKOUT</h1>
          <p className="text-[13px] font-bold text-white/90">
            Home <span className="text-[#ff6b35] mx-1.5">•</span> CHECKOUT
          </p>
        </div>
      </div>

      {/* 2. Nội dung chính: Chia 2 cột */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* CỘT TRÁI: Ảnh dọc to */}
          <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50">
            <img 
              src={BigDestImg} 
              alt="Destination" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>

          {/* CỘT PHẢI: Thông tin hoàn tất */}
          <div className="flex flex-col gap-6">
            
            <h2 className="text-[36px] md:text-[42px] font-black text-[#11223f] flex items-center gap-3">
              Completed 🎉
            </h2>

            {/* Thông tin Tour nhỏ */}
            <div className="flex gap-4 items-center mb-2">
              <img src={TourImg} alt="Warsaw Day Tour" className="w-12 h-12 rounded-lg object-cover" />
              <div>
                <h4 className="text-[15px] font-black text-[#11223f] mb-0.5">Warsaw Day Tour</h4>
                <div className="flex items-center gap-1 text-[12px] font-bold text-gray-500">
                  <span className="text-yellow-400 text-[14px]">★</span> 5.0 <span className="font-medium opacity-70">(234 reviews)</span>
                </div>
              </div>
            </div>

            {/* Khối Booking Details */}
            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm space-y-5">
              <h3 className="text-[16px] font-black text-[#11223f] mb-4">Booking Details</h3>
              
              <div className="space-y-4 text-[13px]">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 w-5">📅</span>
                  <span className="text-gray-500 font-medium">Departure day:</span>
                  <span className="font-black text-[#11223f]">June 21, 2021</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 w-5">👥</span>
                  <span className="text-gray-500 font-medium">Guests:</span>
                  <span className="font-black text-[#11223f]">2 guest</span>
                </div>
              </div>

              <div className="border-t border-gray-100 my-5"></div>

              <div className="space-y-4 text-[13px]">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 w-5">🎫</span>
                  <span className="text-gray-500 font-medium">Booking code:</span>
                  <span className="font-black text-[#11223f]">KU_H80SM</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 w-5">📆</span>
                  <span className="text-gray-500 font-medium">Booking day:</span>
                  <span className="font-black text-[#11223f]">23 Dec 2019</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 w-5">🧾</span>
                  <span className="text-gray-500 font-medium">Total:</span>
                  <span className="font-black text-[#11223f]">$357</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 w-5">💳</span>
                  <span className="text-gray-500 font-medium">Payment method:</span>
                  <span className="font-black text-[#11223f]">Paypal</span>
                </div>
              </div>
            </div>

            {/* Nút bấm */}
            <div className="flex gap-4 mt-4">
              <Link to="/" className="px-8 py-3.5 rounded text-[13px] font-black text-[#11223f] bg-[#f4f7f6] hover:bg-gray-200 transition-colors cursor-pointer no-underline text-center">
                Back Home
              </Link>
              <button className="px-8 py-3.5 rounded text-[13px] font-black text-white bg-[#ff6b35] hover:bg-[#e85a25] transition-colors shadow-md shadow-orange-500/20 border-none cursor-pointer">
                Download Invoice
              </button>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

export default CheckoutConfirm