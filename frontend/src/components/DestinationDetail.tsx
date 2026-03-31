import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderBg from '../assets/signup-bg.jpg'

// IMPORT ẢNH THEO LIST CỦA SẾP
import MainImg from '../assets/blog-img-3.png.jpg'
import SubImg1 from '../assets/destination-details-img-2.png.jpg'
import SubImg2 from '../assets/destination-img-1.png.jpg'

// Ảnh cho Trending
import Trend1 from '../assets/reservation-img-1.png.jpg'
import Trend2 from '../assets/reservation-img-2.png.jpg'
import Trend3 from '../assets/reservation-img-3.png.jpg'
import Trend4 from '../assets/reservation-img-1.png.jpg'

const faqs = [
  { question: "What destinations do you offer tours to", answer: "Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue." },
  { question: "What types of service do you provide?", answer: "We provide comprehensive travel services including flight bookings." },
  { question: "What is included in the tour package?", answer: "Our standard packages include accommodation, daily breakfast." },
  { question: "What should I pack for my trip?", answer: "Pack comfortable clothing suited for the season." }
]

const DestinationDetail = () => {
  const [activeTab, setActiveTab] = useState('Description')
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  return (
    <main className="w-full bg-white">

      {/* 1. Header Banner */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={HeaderBg} alt="Destination Details" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0b1a2e]/60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-[42px] font-black mb-3 tracking-wide">Destination Details</h1>
          <p className="text-[13px] font-bold text-white/90">
            Home <span className="text-[#ff6b35] mx-1.5">•</span> Pages <span className="text-[#ff6b35] mx-1.5">•</span> <span className="text-[#ff6b35]">Destination Details</span>
          </p>
        </div>
      </div>

      {/* 2. Main Content (CHIA 2 CỘT TỪ TRÊN XUỐNG DƯỚI Y NHƯ FIGMA) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* ================= CỘT TRÁI: ẢNH TO & NỘI DUNG (Chiếm 2 phần) ================= */}
            <div className="lg:col-span-2">

              {/* Ảnh to đầu tiên */}
              <div className="w-full mb-8">
                <img src={MainImg} alt="Main" className="w-full rounded-2xl object-cover aspect-video md:aspect-[16/9] shadow-md" />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-[#e8f5f3] text-[#2ebfa5] px-3 py-1 rounded text-[11px] font-black">5.0</span>
                <span className="bg-[#fff0e6] text-[#ff6b35] px-3 py-1 rounded text-[11px] font-bold">Perfect</span>
                <span className="bg-[#f0f4f8] text-[#11223f] px-3 py-1 rounded text-[11px] font-bold">Hotels</span>
                <span className="bg-[#ffeef2] text-[#ff4b72] px-3 py-1 rounded text-[11px] font-bold">Building</span>
                <span className="bg-[#e8f5f3] text-[#2ebfa5] px-3 py-1 rounded text-[11px] font-bold">Top Value</span>
                <div className="flex text-[#ffb400] text-[12px] ml-2">★★★★★</div>
              </div>

              {/* Title */}
              <h2 className="text-[32px] md:text-[40px] font-black text-[#11223f] leading-tight mb-8">
                Honouring History and Heritage in the Land of Heroes
              </h2>

              {/* Tabs */}
              <div className="flex gap-8 border-b border-gray-200 mb-8">
                {['Description', 'Features', 'Virtual', 'Price history'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-[14px] font-bold transition-colors relative outline-none border-none bg-transparent cursor-pointer
                      ${activeTab === tab ? 'text-[#ff6b35]' : 'text-gray-400 hover:text-[#11223f]'}`}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#ff6b35]"></div>}
                  </button>
                ))}
              </div>

              {/* Description Content */}
              <div className="mb-10 text-[14.5px] text-gray-500 leading-relaxed font-medium">
                <p>Arabian Park Hotel is a great choice for travellers looking for a 3 star hotel in Dubai. It is located in Bur Dubai. This Hotel stands out as one of the highly recom. 2 kms, Al Wasl Indoor Stadium (1.2 kms), Dubai Mall (5.4 kms), Jumeirah Beach Park (9.6 kms) and Jumeirah Public Beach (15.8 kms).</p>
              </div>

              {/* Hotel Features */}
              <div className="mb-10">
                <h3 className="text-[20px] font-black text-[#11223f] mb-6">Hotel features</h3>
                <div className="flex flex-wrap gap-6 text-[13px] font-bold text-gray-500">
                  <span className="flex items-center gap-2">📶 Wifi</span>
                  <span className="flex items-center gap-2">🏊 Swimming</span>
                  <span className="flex items-center gap-2">☕ Breakfast</span>
                  <span className="flex items-center gap-2">🛏️ Kids bed</span>
                  <span className="flex items-center gap-2">📏 4m x 6m</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-10">
                <h3 className="text-[20px] font-black text-[#11223f] mb-6">Amenities</h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-10 text-[13px] font-bold text-gray-500 mb-6">
                  <span className="flex items-center gap-2">📶 Wifi</span>
                  <span className="flex items-center gap-2">📶 Wifi</span>
                  <span className="flex items-center gap-2">🏊 Swimming</span>
                  <span className="flex items-center gap-2">🏊 Swimming</span>
                  <span className="flex items-center gap-2">☕ Breakfast</span>
                  <span className="flex items-center gap-2">☕ Breakfast</span>
                  <span className="flex items-center gap-2">🛏️ Kids bed</span>
                  <span className="flex items-center gap-2">🛏️ Kids bed</span>
                  <span className="flex items-center gap-2">📏 4m x 6m</span>
                  <span className="flex items-center gap-2">📏 4m x 6m</span>
                </div>
                <button className="bg-[#2ebfa5] text-white px-6 py-2.5 rounded font-bold text-[13px] shadow-md border-none cursor-pointer hover:bg-[#26a690] transition-colors">
                  More Details
                </button>
              </div>

              {/* FAQ Accordion */}
              <div>
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 py-4">
                    <button
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className={`w-full flex justify-between items-center text-left font-bold text-[16px] outline-none border-none bg-transparent cursor-pointer transition-colors ${activeFaq === index ? 'text-[#ff6b35]' : 'text-[#11223f] hover:text-[#ff6b35]'}`}
                    >
                      {faq.question}
                      <span className="text-[12px]">{activeFaq === index ? '▲' : '▼'}</span>
                    </button>
                    {activeFaq === index && (
                      <p className="mt-4 text-[13.5px] text-gray-500 font-medium leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>

            </div>

            {/* ================= CỘT PHẢI: 2 ẢNH NHỎ & FORM STICKY (Chiếm 1 phần) ================= */}
            <div className="lg:col-span-1 space-y-6">

              {/* 2 Ảnh nhỏ xếp dọc */}
              <img src={SubImg1} alt="Sub 1" className="w-full rounded-2xl object-cover aspect-video shadow-md" />
              <img src={SubImg2} alt="Sub 2" className="w-full rounded-2xl object-cover aspect-video shadow-md" />

              {/* Form Sticky */}
              <div className="bg-white rounded-xl shadow-2xl shadow-gray-200/60 border border-gray-100 p-8 sticky top-24">

                {/* Giá */}
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <span className="text-[28px] font-black text-[#11223f]">$102</span>
                    <span className="text-[13px] text-gray-500 font-bold ml-1">/night <span className="line-through">$119</span></span>
                  </div>
                  <span className="bg-[#ff6b35] text-white text-[11px] font-bold px-3 py-1 rounded">20% Off</span>
                </div>

                {/* Date Picker */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-[12px] font-bold text-[#11223f] mb-2">Check In</label>
                    <div className="bg-[#f4f7f6] rounded px-4 py-3 flex justify-between items-center text-gray-400 text-[13px] font-medium">
                      mm/dd/yyyy <span>📅</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-[#11223f] mb-2">Check Out</label>
                    <div className="bg-[#f4f7f6] rounded px-4 py-3 flex justify-between items-center text-gray-400 text-[13px] font-medium">
                      mm/dd/yyyy <span>📅</span>
                    </div>
                  </div>
                </div>

                {/* Guest */}
                <div className="mb-6">
                  <label className="block text-[12px] font-bold text-[#11223f] mb-2">Guest</label>
                  <select className="w-full bg-[#f4f7f6] rounded px-4 py-3 text-[#11223f] text-[13px] font-bold outline-none border-none cursor-pointer appearance-none">
                    <option>2 Adult, 1 Children</option>
                    <option>1 Adult</option>
                    <option>2 Adult</option>
                  </select>
                </div>

                {/* Extra Features */}
                <div className="mb-6">
                  <label className="block text-[13px] font-black text-[#11223f] mb-4">Extra Features</label>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between text-[13px] text-gray-500 font-medium cursor-pointer">
                      <div className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 accent-[#2ebfa5]" /> Allow to bring pet</div>
                      <span>$13</span>
                    </label>
                    <label className="flex items-center justify-between text-[13px] text-gray-500 font-medium cursor-pointer">
                      <div className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 accent-[#2ebfa5]" /> Breakfast a day per person</div>
                      <span>$10</span>
                    </label>
                    <label className="flex items-center justify-between text-[13px] text-gray-500 font-medium cursor-pointer">
                      <div className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 accent-[#2ebfa5]" /> Parking a day</div>
                      <span>$6</span>
                    </label>
                    <label className="flex items-center justify-between text-[13px] text-gray-500 font-medium cursor-pointer">
                      <div className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 accent-[#2ebfa5]" /> Extra pillow</div>
                      <span>Free</span>
                    </label>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="mb-6">
                  <label className="block text-[13px] font-black text-[#11223f] mb-4">Price</label>
                  <div className="bg-[#f9fbfb] rounded-lg p-4 space-y-3 text-[13px] font-bold text-gray-500">
                    <div className="flex justify-between"><span>1 Nights</span><span>$500</span></div>
                    <div className="flex justify-between"><span>Discount 20%</span><span>$200</span></div>
                    <div className="flex justify-between"><span>Breakfast per person</span><span>$10</span></div>
                    <div className="flex justify-between"><span>Service fee</span><span>$5</span></div>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center text-[#11223f] mb-6">
                  <span className="text-[15px] font-black">Total payment</span>
                  <span className="text-[18px] font-black">$300</span>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full bg-[#2ebfa5] hover:bg-[#26a690] text-white py-4 rounded text-[14px] font-black transition-colors shadow-md border-none cursor-pointer mb-4 text-center no-underline"
                >
                  Book Now
                </Link>
                <p className="text-center text-[11px] font-bold text-gray-400">
                  You will not get charged yet
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Trending Destinations (Bottom Section) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[#ff6b35] text-[12px] font-black uppercase tracking-wider mb-2">Trending Destination</p>
            <h2 className="text-[32px] md:text-[40px] font-black text-[#11223f] max-w-lg mx-auto leading-tight">
              The most searched for cities on Tourice
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: Trend1, title: 'Hotel Sea Crown', price: '$150' },
              { img: Trend2, title: 'Long Beach Hotel', price: '$150' },
              { img: Trend3, title: 'Majestic Maldives', price: '$150' },
              { img: Trend4, title: 'Breathtaking Bali', price: '$150' }
            ].map((tour, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden group">
                <div className="h-[200px] overflow-hidden m-3 rounded-lg">
                  <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5 pt-2">
                  <h3 className="text-[16px] font-black text-[#11223f] mb-1">{tour.title}</h3>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500 mb-4">
                    <span className="text-yellow-400 text-[13px]">★</span> 4.8 <span className="opacity-70">(122 reviews)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[18px] font-black text-[#11223f]">{tour.price}</span>
                      <span className="text-[11px] font-bold text-gray-400">/Person</span>
                    </div>
                    <button className="bg-[#ff6b35] hover:bg-[#e85a25] text-white px-5 py-2 rounded text-[12px] font-bold transition-colors">
                      Book Trip
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default DestinationDetail