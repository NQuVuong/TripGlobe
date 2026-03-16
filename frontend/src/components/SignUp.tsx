import React from 'react'
// Bạn nhớ thay đúng tên 2 tấm ảnh bạn đã tải về nhé!
import SignUpBg from '../assets/signup-bg.jpg' 
import SignUpImg from '../assets/signup-img.jpg'

const SignUp = () => {
  return (
    <main className="bg-white w-full">
      
      {/* 1. Phần Header Background Tối */}
      <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center mt-20">
        {/* Ảnh nền và lớp phủ màu tối */}
        <div className="absolute inset-0 z-0">
          <img 
            src={SignUpBg} 
            alt="Sign Up Background" 
            className="w-full h-full object-cover" 
          />
          {/* Lớp phủ màu xanh đen mờ để chữ trắng nổi lên */}
          <div className="absolute inset-0 bg-[#0b1a2e]/60"></div>
        </div>

        {/* Chữ hiển thị */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">Sign Up</h1>
          <p className="text-sm font-medium">
            Home <span className="text-[#ff6b35] mx-2">•</span> Sign Up
          </p>
        </div>
      </div>

      {/* 2. Phần Nội dung Form Đăng ký */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Cột trái: Ảnh cô gái nền hồng */}
            <div className="w-full">
              <img 
                src={SignUpImg} 
                alt="Register Illustration" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Cột phải: Form nhập liệu */}
            <div className="w-full max-w-md mx-auto md:mx-0">
              <h2 className="text-3xl lg:text-[34px] font-black text-[#11223f] mb-2 leading-tight">
                Register Yourself
              </h2>
              <p className="text-gray-400 text-sm mb-8 font-medium">
                Please Sign Up here
              </p>

              <form className="space-y-4">
                {/* Input Name */}
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-[#f8f9fa] text-[#11223f] text-sm px-5 py-4 rounded outline-none border border-transparent focus:border-[#2ebfa5] transition-all" 
                  />
                </div>
                
                {/* Input Email */}
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-[#f8f9fa] text-[#11223f] text-sm px-5 py-4 rounded outline-none border border-transparent focus:border-[#2ebfa5] transition-all" 
                  />
                </div>
                
                {/* Input Password */}
                <div>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full bg-[#f8f9fa] text-[#11223f] text-sm px-5 py-4 rounded outline-none border border-transparent focus:border-[#2ebfa5] transition-all" 
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="button" 
                  className="w-full bg-[#ff6b35] hover:bg-[#e85a25] text-white font-bold py-4 rounded transition-colors mt-2 cursor-pointer border-none"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default SignUp