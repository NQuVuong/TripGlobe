import React from 'react'

// =========================================================================
// 1. IMPORT TEAM COMPONENT 
// =========================================================================
import Team from './Team'

// =========================================================================
// 2. IMPORT ASSETS (Sếp check lại tên file đúng đuôi .png.jpg nha)
// =========================================================================
import HeaderBg from '../assets/signup-bg.jpg' 
// SẾP ĐỔI CÁI ẢNH NÀY THÀNH ẢNH LANDSCAPE ĐẸP Y HỆT ẢNH 3 NHA!
import AboutBg from '../assets/Aboutbackground.jpg' 

// KHÚC NÀY CHỈ CẦN 1 ẢNH DUY NHẤT VÌ SẾP ĐÃ GHÉP SẴN TRONG FIGMA RỒI!
import Img1 from '../assets/about-img-7.png.jpg'

// Ảnh phần Testimonial (3 card)
import User1 from '../assets/user-img-1.png.jpg'
import User2 from '../assets/user-img-2.png.jpg'
import User3 from '../assets/user-img-3.png.jpg'

// Ảnh phần Blog & News
import BlogMain from '../assets/blog-img-14.png.jpg'
import BlogSmall1 from '../assets/blog-img-4.png.jpg'
import BlogSmall2 from '../assets/blog-img-5.png.jpg'
import BlogSmall3 from '../assets/blog-img-6.png.jpg'
import BlogSmall4 from '../assets/blog-img-8.png.jpg'

// Ảnh phần Popular Destination
import Dest1 from '../assets/td-img-1.png.jpg'
import Dest2 from '../assets/td-img-2.png.jpg'
import Dest3 from '../assets/td-img-3.png.jpg'
import Dest4 from '../assets/td-img-4.png.jpg'
import Dest5 from '../assets/td-img-5.png.jpg'
import Dest6 from '../assets/td-img-6.png.jpg'

const About = () => {
  return (
    <main className="w-full bg-white font-sans">
      
  
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={HeaderBg} alt="About Us Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0b1a2e]/80"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-[50px] font-black mb-3 tracking-wide Uppercase">About Us</h1>
          <p className="text-[13px] font-bold text-white/80 uppercase tracking-widest">
            Home <span className="text-[#ff6b35] mx-2">•</span> Pages <span className="text-[#ff6b35] mx-2">•</span> About Us
          </p>
        </div>
      </div>


      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* CỘT TRÁI: DÙNG ĐÚNG 1 ẢNH SẾP CẮT, XÓA VIỀN */}
          <div className="w-full flex justify-center lg:justify-start">
            {/* Đã xóa Drop-shadow, viền khung... để ảnh tự nhiên */}
            <img src={Img1} alt="About Us Collage" className="w-full max-w-lg object-contain rounded-xl" />
          </div>

          {/* CỘT PHẢI: NỘI DUNG */}
          <div className="lg:pl-4">
            <p className="text-[#ff6b35] text-[12px] font-black uppercase tracking-wider mb-3">About Us</p>
            <h2 className="text-[32px] md:text-[42px] font-black text-[#11223f] leading-tight mb-6">
              See Destinations You'll Love To Visit
            </h2>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-10 font-medium">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some There are many variations of passages of Lorem Ipsum available.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-5 items-start">
                <div className="bg-[#e8f5f3] text-[#2ebfa5] w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">🌍</div>
                <div>
                  <h4 className="text-[16px] font-black text-[#11223f] mb-1.5">Book With Confident</h4>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed">Each trip is carefully crafted to leave you free to leave you free to live in the moment and enjoy your vacation.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="bg-[#e8f5f3] text-[#2ebfa5] w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">🛍️</div>
                <div>
                  <h4 className="text-[16px] font-black text-[#11223f] mb-1.5">Freedom to discover</h4>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed">Each trip is carefully crafted to leave you free to leave you free to live in the moment and enjoy your vacation.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="bg-[#e8f5f3] text-[#2ebfa5] w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">🌤️</div>
                <div>
                  <h4 className="text-[16px] font-black text-[#11223f] mb-1.5">Weather Vultures</h4>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed">Each trip is carefully crafted to leave you free to leave you free to live in the moment and enjoy your vacation.</p>
                </div>
              </div>
            </div>

            <button className="bg-[#2ebfa5] hover:bg-[#26a690] transition-colors text-white px-8 py-3.5 rounded font-black text-[13px] shadow-md border-none cursor-pointer Uppercase tracking-wider">
              Book Now
            </button>
          </div>
        </div>
      </section>

      <section className="relative h-[350px] lg:h-[480px] w-full flex items-center my-10">
        
        {/* Khối Background */}
        <div className="absolute inset-0 z-0">
          {/* Dùng đúng biến AboutBg (Aboutbackground.jpg) */}
          <img src={AboutBg} className="w-full h-full object-cover object-center" alt="Saving Background" />
          {/* Giảm độ mờ xuống 30% để giữ nguyên màu trời và lều cực đẹp của ảnh gốc */}
          <div className="absolute inset-0 bg-[#0b1a2e]/30"></div>
        </div>

        {/* Khối Nội Dung */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center gap-8">
          
          {/* Tiêu đề bên trái */}
          <h2 className="text-3xl md:text-[46px] font-black text-white max-w-[500px] leading-[1.15]">
            Start Saving on Your Travel Budget
          </h2>
          
          {/* Nút tròn bên phải (Code sát nhất với Figma) */}
          <div className="w-28 h-28 md:w-[130px] md:h-[130px] rounded-full border border-white/40 flex flex-col items-center justify-center text-white cursor-pointer hover:bg-white hover:text-[#11223f] transition-all flex-shrink-0 group">
             <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Contact</span>
             <span className="text-2xl font-light leading-none my-1 group-hover:translate-x-1 transition-transform">→</span>
             <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Us Now</span>
          </div>

        </div>
      </section>


      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <p className="text-[#ff6b35] text-[12px] font-black uppercase tracking-wider mb-2">Testimonial</p>
            <h2 className="text-[32px] md:text-[42px] font-black text-[#11223f] leading-tight">
              What Our Client Said ABout Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Vallentina Putri', avatar: User2 },
              { name: 'Yildiz Selin', avatar: User3 },
              { name: 'Peter Parker', avatar: User1 }
            ].map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col">
                
                {/* 1. Avatar & Info trên cùng */}
                <div className="flex items-center gap-4 mb-4">
                  <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                  <div>
                    <h4 className="text-[14px] font-black text-[#11223f]">{test.name}</h4>
                    <p className="text-gray-400 text-[11px] font-bold mt-0.5">Customer</p>
                  </div>
                </div>

                {/* 2. Stars */}
                <div className="flex text-[#ffb400] text-[13px] tracking-widest mb-4">
                  ★★★★★
                </div>

                {/* 3. Quote */}
                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
                  As a seasoned traveler, I can confidently say that Tourice is one of the best travel agencies I've had the pleasure of working.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    
      <section className="py-24 bg-[#f9fbfb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[#ff6b35] text-[12px] font-black uppercase tracking-wider mb-2">Blog & News</p>
            <h2 className="text-[32px] md:text-[42px] font-black text-[#11223f] leading-tight">
              Tips and Tricks for Planning<br/>Your Dream Trip
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="w-full h-[300px] md:h-[450px] overflow-hidden rounded-2xl mb-6 shadow-sm">
                <img src={BlogMain} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Main Blog" />
              </div>
              <p className="text-[#ff6b35] text-[11px] font-black uppercase tracking-wider mb-3">Solo Travel</p>
              <h3 className="text-[22px] md:text-[26px] font-black text-[#11223f] mb-3 leading-tight group-hover:text-[#ff6b35] transition-colors">
                Top 10 Hidden Gems: Uncover Top Secret Destinations Off the Beaten Path"
              </h3>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed">
                Browse through our handpicked selection of destinations and tour packages, each designed to inspire and delight.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
              {[
                { img: BlogSmall1, title: 'Unveiling the Best Beach Destinations' },
                { img: BlogSmall2, title: 'Unveiling the Best Beach Destinations' },
                { img: BlogSmall3, title: 'Unveiling the Best Beach Destinations' },
                { img: BlogSmall4, title: 'Unveiling the Best Beach Destinations' }
              ].map((blog, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="w-full h-[180px] overflow-hidden rounded-2xl mb-5 shadow-sm">
                    <img src={blog.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Small Blog" />
                  </div>
                  <p className="text-[#ff6b35] text-[10px] font-black uppercase tracking-wider mb-2">Solo Travel</p>
                  <h4 className="text-[16px] font-black text-[#11223f] mb-2 leading-tight group-hover:text-[#ff6b35] transition-colors">
                    {blog.title}
                  </h4>
                  <p className="text-gray-500 text-[12px] font-medium leading-relaxed">
                    Browse through our handpicked selection of destinations
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Team />

      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-12">
            <p className="text-[#ff6b35] text-[12px] font-black uppercase tracking-wider mb-2">Popular Destination</p>
            <h2 className="text-[32px] md:text-[42px] font-black text-[#11223f] leading-tight mb-8">
              Vacations To Make Your<br/>Experience Enjoyable
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-[13px] font-bold text-gray-500">
              <span className="border border-gray-300 rounded-full px-6 py-2 text-[#11223f] cursor-pointer">Day Long Tour</span>
              <span className="px-4 py-2 cursor-pointer hover:text-[#11223f]">Adventure Trip</span>
              <span className="px-4 py-2 cursor-pointer hover:text-[#11223f]">Group Tour</span>
              <span className="px-4 py-2 cursor-pointer hover:text-[#11223f]">Solo tour</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Finland */}
            <div className="relative rounded-2xl overflow-hidden md:col-span-1 md:row-span-1 h-[250px] md:h-auto group cursor-pointer shadow-sm">
              <img src={Dest1} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Finland" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white"><h3 className="text-[20px] font-black">Finland</h3><p className="text-[11px] text-gray-300">Worefall</p></div>
              <span className="absolute top-5 left-5 bg-[#11223f] text-white text-[10px] font-bold px-3 py-1 rounded-full">5.0</span>
            </div>
            {/* Prag */}
            <div className="relative rounded-2xl overflow-hidden md:col-span-1 md:row-span-1 h-[250px] md:h-auto group cursor-pointer shadow-sm">
              <img src={Dest2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Prag" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white"><h3 className="text-[20px] font-black">Prag</h3><p className="text-[11px] text-gray-300">Worefall</p></div>
              <span className="absolute top-5 left-5 bg-[#11223f] text-white text-[10px] font-bold px-3 py-1 rounded-full">5.0</span>
            </div>
            {/* Ankara (span 2 hàng) */}
            <div className="relative rounded-2xl overflow-hidden md:col-span-1 md:row-span-2 h-[400px] md:h-auto group cursor-pointer shadow-sm md:col-start-2 md:row-start-1">
              <img src={Dest3} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Ankara" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white"><h3 className="text-[24px] font-black">Ankara</h3><p className="text-[12px] text-gray-300">Worefall</p></div>
              <span className="absolute top-5 left-5 bg-[#11223f] text-white text-[10px] font-bold px-3 py-1 rounded-full">5.0</span>
            </div>
            {/* Istanbul (span 2 cột) */}
            <div className="relative rounded-2xl overflow-hidden md:col-span-2 md:row-span-1 h-[250px] md:h-auto group cursor-pointer shadow-sm md:col-start-3 md:row-start-1">
              <img src={Dest4} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Istanbul" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white"><h3 className="text-[24px] font-black">Istanbul</h3><p className="text-[12px] text-gray-300">Worefall</p></div>
              <span className="absolute top-5 left-5 bg-[#11223f] text-white text-[10px] font-bold px-3 py-1 rounded-full">5.0</span>
            </div>
            {/* Ethence */}
            <div className="relative rounded-2xl overflow-hidden md:col-span-1 md:row-span-1 h-[250px] md:h-auto group cursor-pointer shadow-sm md:col-start-3 md:row-start-2">
              <img src={Dest5} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Ethence" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white"><h3 className="text-[20px] font-black">Ethence</h3><p className="text-[11px] text-gray-300">Worefall</p></div>
              <span className="absolute top-5 left-5 bg-[#11223f] text-white text-[10px] font-bold px-3 py-1 rounded-full">5.0</span>
            </div>
            {/* London */}
            <div className="relative rounded-2xl overflow-hidden md:col-span-1 md:row-span-1 h-[250px] md:h-auto group cursor-pointer shadow-sm md:col-start-4 md:row-start-2">
              <img src={Dest6} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="London" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white"><h3 className="text-[20px] font-black">London</h3><p className="text-[11px] text-gray-300">Worefall</p></div>
              <span className="absolute top-5 left-5 bg-[#11223f] text-white text-[10px] font-bold px-3 py-1 rounded-full">5.0</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default About