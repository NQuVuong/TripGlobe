import React from 'react'
import { Link } from 'react-router-dom' // Dùng để làm link qua lại trang Đăng ký

// Dùng tạm ảnh của trang Sign Up luôn cho nhanh, nếu bạn có ảnh login-img riêng thì đổi tên ở đây nhé
import LoginBg from '../assets/signup-bg.jpg'
import LoginImg from '../assets/signup-img.jpg'

const Login = () => {
    return (
        <main className="w-full bg-white">

            {/* 1. Phần Header Background Tối */}
            <div className="relative h-[280px] md:h-[320px] w-full flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src={LoginBg}
                        alt="Login Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0b1a2e]/70"></div>
                </div>

                <div className="relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-[42px] font-black mb-3 tracking-wide">Login</h1>
                    <p className="text-[13px] font-bold text-white/90">
                        Home <span className="text-[#ff6b35] mx-1.5">•</span> Login
                    </p>
                </div>
            </div>

            {/* 2. Phần Nội dung Form Đăng nhập */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Cột trái: Ảnh minh họa */}
                        <div className="w-full flex justify-end">
                            <img
                                src={LoginImg}
                                alt="Login Illustration"
                                className="w-full max-w-[500px] h-auto object-cover"
                            />
                        </div>

                        {/* Cột phải: Form nhập liệu */}
                        <div className="w-full max-w-md mx-auto md:mx-0">
                            <h2 className="text-[32px] font-black text-[#11223f] mb-2 leading-tight">
                                Welcome Back!
                            </h2>
                            <p className="text-gray-400 text-[11px] mb-8 font-bold">
                                Please Login to your account
                            </p>

                            <form className="space-y-4">
                                {/* Đã BỎ Input Name, chỉ giữ lại Email và Password */}

                                {/* Input Email */}
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-[#f4f7f6] text-[#11223f] text-[13px] font-bold px-5 py-4 rounded-md outline-none border border-transparent focus:border-[#2ebfa5] transition-all placeholder:text-gray-400 placeholder:font-normal"
                                    />
                                </div>

                                {/* Input Password */}
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full bg-[#f4f7f6] text-[#11223f] text-[13px] font-bold px-5 py-4 rounded-md outline-none border border-transparent focus:border-[#2ebfa5] transition-all placeholder:text-gray-400 placeholder:font-normal"
                                    />
                                </div>

                                {/* Quên mật khẩu */}
                                <div className="flex justify-end">
                                    <Link to="/forgot-password" className="text-[#ff6b35] text-[11px] font-bold hover:underline transition-all">
                                        Forgot Password?
                                    </Link>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="button"
                                    className="w-full bg-[#ff6b35] hover:bg-[#e85a25] text-white text-[13px] font-black py-4 rounded-md transition-colors mt-2 cursor-pointer border-none shadow-md shadow-orange-500/20"
                                >
                                    Login
                                </button>

                                {/* Chuyển hướng sang trang Đăng Ký */}
                                <p className="text-center text-[11px] font-bold text-gray-400 mt-6">
                                    Don't have an account?{' '}
                                    <Link to="/signup" className="text-[#2ebfa5] hover:text-[#1e9983] transition-colors hover:underline">
                                        Sign Up
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

export default Login