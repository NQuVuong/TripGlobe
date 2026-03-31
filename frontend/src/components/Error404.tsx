import React from 'react'
import { Link } from 'react-router-dom'
import HeaderBg from '../assets/signup-bg.jpg'
import ErrorImg from '../assets/404.png.jpg'   

const Error404 = () => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      
      {/* 1. Header Background Tối */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={HeaderBg} 
            alt="Error Background" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#0b1a2e]/60"></div>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-[50px] font-black mb-3 tracking-wide">Error</h1>
          <p className="text-[13px] font-bold text-white/90">
            Home <span className="text-[#ff6b35] mx-1.5">•</span> Error
          </p>
        </div>
      </div>

      {/* 2. Nội dung chính 404 */}
      <section className="py-24 bg-white w-full">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Ảnh minh họa */}
          <img 
            src={ErrorImg} 
            alt="404 Not Found" 
            className="w-full max-w-[500px] h-auto mb-10 object-contain" 
          />
          
          {/* Tiêu đề & Mô tả */}
          <h2 className="text-3xl md:text-[40px] font-black text-[#11223f] mb-4 leading-tight">
            Sorry, we can't find that page
          </h2>
          <p className="text-gray-500 text-[13px] font-bold mb-10">
            You may have mistyped the address or the page may have moved.
          </p>
          
          {/* Nút quay về trang chủ */}
          <Link 
            to="/" 
            className="bg-[#11223f] hover:bg-black text-white px-8 py-3.5 rounded-md text-[13px] font-bold transition-all shadow-md"
          >
            Back to Home
          </Link>
          
        </div>
      </section>
      
    </main>
  )
}

export default Error404