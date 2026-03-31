import React from 'react'
import HeaderBg from '../assets/signup-bg.jpg'
import TourImg from '../assets/recent-blog-img-1.png.jpg'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <main className="w-full bg-[#f9fbfb]">

            {/* 1. Header Banner */}
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
                <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                    {/* CỘT TRÁI: Confirm and Pay (Chiếm 2/3) */}
                    <div className="lg:col-span-2 flex flex-col gap-10">
                        <h2 className="text-[32px] md:text-[36px] font-black text-[#11223f] leading-tight">
                            Confirm and Pay
                        </h2>

                        {/* Bước 1: Shipping Information */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-6 rounded-full bg-[#ff6b35] text-white flex items-center justify-center text-[12px] font-black">1</span>
                                <h3 className="text-[18px] font-black text-[#11223f]">Shipping Information</h3>
                            </div>

                            {/* Form Billing */}
                            <div className="mb-6">
                                <h4 className="text-[12px] font-bold text-gray-500 mb-3">Billing Address</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input type="text" placeholder="First Name" className="w-full bg-[#f4f7f6] px-5 py-3.5 rounded text-[13px] font-medium outline-none focus:border-[#2ebfa5] border border-transparent transition-all" />
                                    <input type="text" placeholder="Last Name" className="w-full bg-[#f4f7f6] px-5 py-3.5 rounded text-[13px] font-medium outline-none focus:border-[#2ebfa5] border border-transparent transition-all" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <input type="text" placeholder="Full Address" className="w-full bg-[#f4f7f6] px-5 py-3.5 rounded text-[13px] font-medium outline-none focus:border-[#2ebfa5] border border-transparent transition-all" />
                                    <input type="text" placeholder="Full Address 2 (optional)" className="w-full bg-[#f4f7f6] px-5 py-3.5 rounded text-[13px] font-medium outline-none focus:border-[#2ebfa5] border border-transparent transition-all" />
                                </div>
                            </div>

                            {/* Form Shipping */}
                            <div>
                                <h4 className="text-[12px] font-bold text-gray-500 mb-3">Shipping Address</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input type="text" placeholder="First Name" className="w-full bg-[#f4f7f6] px-5 py-3.5 rounded text-[13px] font-medium outline-none focus:border-[#2ebfa5] border border-transparent transition-all" />
                                    <input type="text" placeholder="Last Name" className="w-full bg-[#f4f7f6] px-5 py-3.5 rounded text-[13px] font-medium outline-none focus:border-[#2ebfa5] border border-transparent transition-all" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <input type="text" placeholder="Full Address" className="w-full bg-[#f4f7f6] px-5 py-3.5 rounded text-[13px] font-medium outline-none focus:border-[#2ebfa5] border border-transparent transition-all" />
                                    <input type="text" placeholder="Full Address 2 (optional)" className="w-full bg-[#f4f7f6] px-5 py-3.5 rounded text-[13px] font-medium outline-none focus:border-[#2ebfa5] border border-transparent transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Bước 2: Payment Methods */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-6 rounded-full bg-[#ff6b35] text-white flex items-center justify-center text-[12px] font-black">2</span>
                                <h3 className="text-[18px] font-black text-[#11223f]">Payment Methods</h3>
                            </div>

                            <div className="flex flex-col gap-4">

                                {/* Paypal Box */}
                                <label className="border border-gray-200 rounded-lg p-5 flex items-center justify-between cursor-pointer hover:border-[#ff6b35] transition-colors bg-white">
                                    <div className="flex gap-4 items-start">
                                        <input type="radio" name="payment" className="mt-1 w-4 h-4 accent-[#ff6b35]" />
                                        <div>
                                            <h4 className="text-[14px] font-black text-[#11223f] mb-1">Pay with Paypal</h4>
                                            <p className="text-[11px] font-medium text-gray-500">You will be redirected to PayPal website to complete your purchasec securely</p>
                                        </div>
                                    </div>
                                    {/* Logo Paypal ảo */}
                                    <span className="text-[#00457C] font-black italic text-xl">PayPal</span>
                                </label>

                                {/* Credit Card Box */}
                                <label className="border border-gray-200 rounded-lg p-5 flex flex-col gap-5 cursor-pointer hover:border-[#ff6b35] transition-colors bg-white">
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-4 items-start">
                                            <input type="radio" name="payment" defaultChecked className="mt-1 w-4 h-4 accent-[#ff6b35]" />
                                            <div>
                                                <h4 className="text-[14px] font-black text-[#11223f] mb-1">Credit / Debit Card</h4>
                                                <p className="text-[11px] font-medium text-gray-500">We support Mastercard, Visa, Discover and Stripe.</p>
                                            </div>
                                        </div>
                                        {/* Logo thẻ ảo */}
                                        <div className="flex gap-2">
                                            <span className="w-8 h-5 bg-[#ff5f00] rounded-sm flex items-center justify-center"><span className="w-4 h-4 bg-[#eb001b] rounded-full -ml-2 mix-blend-multiply"></span><span className="w-4 h-4 bg-[#f79e1b] rounded-full -mr-2 mix-blend-multiply"></span></span>
                                            <span className="text-[#1a1f71] font-black italic text-lg">VISA</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 pl-8 space-y-4">
                                        <div>
                                            <h4 className="text-[11px] font-bold text-gray-500 mb-2">Card Number</h4>
                                            <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-[#f4f7f6] px-5 py-3.5 rounded text-[13px] font-medium outline-none focus:border-[#2ebfa5] transition-all" />
                                        </div>
                                        <div>
                                            <h4 className="text-[11px] font-bold text-gray-500 mb-2">Card Holder</h4>
                                            <input type="text" placeholder="Peter Parker" className="w-full bg-[#f4f7f6] px-5 py-3.5 rounded text-[13px] font-medium outline-none focus:border-[#2ebfa5] transition-all" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="text-[11px] font-bold text-gray-500 mb-2">Expiration Date</h4>
                                                <input type="text" placeholder="MM/YY" className="w-full bg-[#f4f7f6] px-5 py-3.5 rounded text-[13px] font-medium outline-none focus:border-[#2ebfa5] transition-all" />
                                            </div>
                                            <div>
                                                <h4 className="text-[11px] font-bold text-gray-500 mb-2">CVC</h4>
                                                <input type="text" placeholder="****" className="w-full bg-[#f4f7f6] px-5 py-3.5 rounded text-[13px] font-medium outline-none focus:border-[#2ebfa5] transition-all" />
                                            </div>
                                        </div>
                                    </div>

                                </label>

                            </div>
                        </div>

                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100 p-6 sticky top-24">

                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-6 rounded-full bg-[#ff6b35] text-white flex items-center justify-center text-[12px] font-black">3</span>
                                <h3 className="text-[18px] font-black text-[#11223f]">Order Summary</h3>
                            </div>

                            <div className="flex gap-4 items-center mb-6">
                                <img src={TourImg} alt="Warsaw Day Tour" className="w-14 h-14 rounded-lg object-cover" />
                                <div>
                                    <h4 className="text-[14px] font-black text-[#11223f] mb-1">Warsaw Day Tour</h4>
                                    <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500">
                                        <span className="text-yellow-400 text-[13px]">★</span> 5.0 <span className="font-medium opacity-70">(234 reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 my-5"></div>

                            {/* Tiền bạc */}
                            <div className="space-y-4 mb-5">
                                <div className="flex justify-between items-center text-[13px]">
                                    <span className="text-gray-500 font-bold">Service charge</span>
                                    <span className="font-black text-[#11223f]">$ 20.00</span>
                                </div>
                                <div className="flex justify-between items-center text-[13px]">
                                    <span className="text-gray-500 font-bold">Discount</span>
                                    <span className="font-black text-[#11223f]">Free</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 my-5"></div>

                            <div className="flex justify-between items-center mb-8">
                                <span className="text-[16px] font-black text-[#11223f]">Total</span>
                                <span className="text-[18px] font-black text-[#11223f]">$ 20.00</span>
                            </div>

                            <Link
                                to="/checkout-confirm"
                                className="w-full block text-center bg-[#ff6b35] hover:bg-[#e85a25] text-white py-4 rounded text-[13px] font-black transition-colors shadow-md shadow-orange-500/20 no-underline"
                            >
                                Complete Booking
                            </Link>

                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default Checkout