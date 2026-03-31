import React from 'react'
import { Link } from 'react-router-dom'

// Dùng chung ảnh nền Header tối màu
import CommonBg from '../assets/signup-bg.jpg' 
// Ảnh nền vàng cô gái cầm bản đồ ông vừa đọc tên
import ForgetPassImg from '../assets/forget-pass-img.png.jpg' 

const ForgotPassword = () => {
  return (
    <main className="w-full bg-white">
      
      {/* 1. Phần Header Background Tối */}
      <div className="relative h-[280px] md:h-[320px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={CommonBg} 
            alt="Forget Password Background" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#0b1a2e]/70"></div>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-[42px] font-black mb-3 tracking-wide">Forget Password</h1>
          <p className="text-[13px] font-bold text-white/90">
            Home <span className="text-[#ff6b35] mx-1.5">•</span> Forget Password
          </p>
        </div>
      </div>

      {/* 2. Phần Nội dung Form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Cột trái: Ảnh minh họa nền vàng */}
            <div className="w-full flex justify-end">
              <img 
                src={ForgetPassImg} 
                alt="Forget Password Illustration" 
                className="w-full max-w-[500px] h-auto object-cover"
              />
            </div>

            {/* Cột phải: Form nhập Email */}
            <div className="w-full max-w-md mx-auto md:mx-0">
              <h2 className="text-[32px] font-black text-[#11223f] mb-2 leading-tight">
                Forget Password
              </h2>
              <p className="text-gray-400 text-[11px] mb-8 font-bold pr-10 leading-relaxed">
                Please Enter your Email Address to receive a Verification Code.
              </p>

              <form className="space-y-4">
                
                {/* Chỉ có 1 Input Email duy nhất */}
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-[#f4f7f6] text-[#11223f] text-[13px] font-bold px-5 py-4 rounded-md outline-none border border-transparent focus:border-[#2ebfa5] transition-all placeholder:text-gray-400 placeholder:font-normal" 
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="button" 
                  className="w-full bg-[#ff6b35] hover:bg-[#e85a25] text-white text-[13px] font-black py-4 rounded-md transition-colors mt-2 cursor-pointer border-none shadow-md shadow-orange-500/20"
                >
                  Send Code
                </button>

                {/* UX xịn: Nút quay lại trang Đăng Nhập */}
                <p className="text-center text-[11px] font-bold text-gray-400 mt-6 pt-4 border-t border-gray-100">
                  Remember your password?{' '}
                  <Link to="/login" className="text-[#2ebfa5] hover:text-[#1e9983] transition-colors hover:underline">
                    Back to Login
                  </Link>
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default ForgotPassword