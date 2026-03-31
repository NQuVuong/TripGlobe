import React from 'react'
import { Link } from 'react-router-dom'

import MainImg from '../assets/signup-bg.jpg' 
import Blog1Img from '../assets/blog-img-14.png.jpg'
import Blog2Img from '../assets/blog-img-16.png.jpg'
import Blog3Img from '../assets/blog-img-17.png.jpg'
import Blog4Img from '../assets/blog-img-18.png.jpg'
import RecentBlog1 from '../assets/recent-blog-img-1.png.jpg'
import RecentBlog2 from '../assets/recent-blog-img-2.png.jpg'
import RecentBlog3 from '../assets/recent-blog-img-3.png.jpg'   
import AdImg from '../assets/ad-img.png.jpg'
import CmtImg1 from '../assets/cmnt-img-1.png.jpg'
import CmtImg2 from '../assets/cmnt-img-2.png.jpg'
import CmtImg3 from '../assets/cmnt-img-3.png.jpg'

const BlogDetail = () => {
  return (
    <main className="w-full bg-[#f9fbfb]">
      
      {/* 1. Header Banner */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={MainImg} alt="Blog Detail Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0b1a2e]/70"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-[50px] font-black mb-3 tracking-wide">Blog Details</h1>
          <p className="text-[13px] font-bold text-white/90">
            Home <span className="text-[#ff6b35] mx-1.5">•</span> Blog Details
          </p>
        </div>
      </div>

      {/* 2. MAIN CONTENT (CHIA 2 CỘT: TRÁI TO - PHẢI NHỎ) */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* ================= CỘT TRÁI: BÀI VIẾT & BÌNH LUẬN ================= */}
        <div className="lg:col-span-2">
          
          {/* --- KHỐI NỘI DUNG BÀI VIẾT --- */}
          <div className="mb-16">
            {/* Ảnh to của bài viết */}
            <img src={Blog1Img} className="w-full rounded-xl mb-8 aspect-[16/9] object-cover shadow-sm" alt="Post Main" />
            
            <h2 className="text-[32px] md:text-[38px] font-black text-[#11223f] mb-6 leading-tight">
              Soaking in the Natural Thermal Springs and Cotton Castle Terraces
            </h2>

            {/* Nội dung chữ */}
            <div className="text-gray-500 text-[15px] leading-relaxed space-y-6">
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation quis nostrud exUt enim ad minim veniam, quis nostrud exercitationUt enim ad minim veniam, quis nostrud.</p>
              
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation quis nostrud exUt enim ad minim veniam, quis nostrud exercitationUt enim ad minim veniam, quis nostrud.</p>

              <h3 className="text-2xl font-black text-[#11223f] mt-10">Pamukkale Paradise: Soaking in the Natural Thermal Springs and Cotton Castle Terraces</h3>
              
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation quis nostrud exUt enim ad minim veniam, quis nostrud exercitationUt enim ad minim veniam, quis nostrud con quis nostrud e.</p>

              {/* Quote Block y hệt Figma */}
              <div className="border-l-2 border-[#ff6b35] pl-6 py-2 my-8">
                <p className="text-gray-500 text-[16px] italic leading-relaxed">
                  "Yes, we provide ongoing support, monitoring, and optimization to ensure that your digital solution continues to evolve with your business needs."
                </p>
                <span className="block mt-3 text-gray-400 text-[13px]">— Someone famous in Peter Parker</span>
              </div>

              <h3 className="text-2xl font-black text-[#11223f] mt-10">Pamukkale Paradise: Soaking in the Natural Thermal Springs and Cotton Castle Terraces</h3>
              
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation quis nostrud exUt enim ad minim veniam, quis nostrud exercitationUt enim ad minim veniam, quis nostrud con quis nostrud e.</p>

              {/* 3 Ảnh nhỏ xen kẽ */}
              <div className="grid grid-cols-3 gap-4 my-8">
                <img src={Blog2Img} className="w-full rounded aspect-[4/3] object-cover shadow-sm" alt="Sub 1" />
                <img src={Blog3Img} className="w-full rounded aspect-[4/3] object-cover shadow-sm" alt="Sub 2" />
                <img src={Blog4Img} className="w-full rounded aspect-[4/3] object-cover shadow-sm" alt="Sub 3" />
              </div>

              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation quis nostrud exUt enim ad minim veniam, quis nostrud exercitationUt enim ad minim veniam, quis nostrud con quis nostrud e.</p>
            </div>

            {/* Tags dưới cùng bài viết */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-[13px] font-black text-[#11223f] uppercase">TAGS:</span>
              <div className="flex gap-2">
                {['Agriculture', 'Digital Nomad', 'Business', 'Design'].map(tag => (
                  <span key={tag} className="border border-gray-300 text-gray-500 text-[11px] px-4 py-1.5 rounded hover:border-[#ff6b35] hover:text-[#ff6b35] cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* --- KHỐI COMMENTS --- */}
          <div className="mb-16">
            <h3 className="text-3xl font-black text-[#11223f] mb-10">2 Comments</h3>
            <div className="space-y-8">
              {[
                { name: 'Ronald Richards', avatar: CmtImg1, date: '13 June, 2018, 7:30pm' },
                { name: 'Leslie Alexander', avatar: CmtImg2, date: '13 June, 2018, 7:30pm' },
                { name: 'Annette Black', avatar: CmtImg3, date: '13 June, 2018, 7:30pm' }
              ].map((commenter, i) => (
                <div key={i} className="flex gap-5 border-b border-gray-100 pb-8 last:border-0">
                  <img src={commenter.avatar} className="w-14 h-14 rounded-full object-cover flex-shrink-0" alt="Avatar" />
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                        <h4 className="font-black text-[#11223f] text-[15px]">{commenter.name}</h4>
                        <span className="text-[11px] text-gray-400">{commenter.date}</span>
                      </div>
                      <button className="bg-[#0b1a2e] text-white text-[11px] px-4 py-1.5 rounded font-bold cursor-pointer border-none hover:bg-[#ff6b35] transition-colors">
                        Reply
                      </button>
                    </div>
                    <p className="text-gray-500 text-[13px] font-medium leading-relaxed mt-2">
                      In this challenge, we invite you to unleash your imagination and create and imagination incredible webpages, website sections, with the Scroll Speed Effect
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- KHỐI LEAVE A COMMENT --- */}
          <div>
            <h3 className="text-3xl font-black text-[#11223f] mb-3">Leave A Comment</h3>
            <p className="text-gray-400 text-[13px] font-bold mb-8">Sign in to post your comment or signup if you dont have any account.</p>
            
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full bg-[#f9fbfb] border border-gray-100 p-4 rounded text-[13px] font-medium outline-none focus:border-[#ff6b35] transition-colors" />
              <input type="email" placeholder="example@gmail.com" className="w-full bg-[#f9fbfb] border border-gray-100 p-4 rounded text-[13px] font-medium outline-none focus:border-[#ff6b35] transition-colors" />
              <textarea placeholder="Message..." rows={6} className="w-full bg-[#f9fbfb] border border-gray-100 p-4 rounded text-[13px] font-medium outline-none focus:border-[#ff6b35] transition-colors resize-none"></textarea>
              
              <label className="flex items-center gap-3 cursor-pointer mt-4">
                <input type="checkbox" className="w-4 h-4 accent-[#0b1a2e]" />
                <span className="text-gray-500 text-[12px] font-bold">Save my name, email, and website in this browser for the next time.</span>
              </label>

              <button type="button" className="bg-[#0b1a2e] hover:bg-[#ff6b35] transition-colors text-white px-8 py-3.5 rounded font-black text-[13px] mt-6 border-none cursor-pointer">
                Post Comment
              </button>
            </form>
          </div>

        </div>

        {/* ================= CỘT PHẢI: SIDEBAR ================= */}
        <aside className="lg:col-span-1 flex flex-col gap-10">
          
          {/* Search */}
          <div className="flex shadow-sm rounded overflow-hidden border border-gray-100">
            <input type="text" placeholder="Search" className="w-full bg-white px-5 py-3 text-[13px] font-medium outline-none border-none" />
            <button className="bg-[#ff6b35] text-white px-5 hover:bg-[#e85a25] transition-colors border-none outline-none cursor-pointer">🔍</button>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-[18px] font-black text-[#11223f] mb-5">Category</h3>
            <ul className="space-y-3.5">
              {['Destination Guides', 'Travel Tips & Hacks', 'Cultural Immersion', 'Responsible Travel', 'Business', 'Entertainment'].map((cat, i) => (
                <li key={i} className="text-[13px] font-bold text-[#11223f] hover:text-[#ff6b35] cursor-pointer transition-colors">
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent News */}
          <div>
            <h3 className="text-[18px] font-black text-[#11223f] mb-5">Recent News</h3>
            <div className="space-y-5">
              {[
                { title: "Unveiling the Best Beach Destinations for Relaxation", img: RecentBlog1 },
                { title: "Indulge in Opulence at These Lavish Destinations", img: RecentBlog2 },
                { title: "The Best Destinations for Vacations with Kids", img: RecentBlog3 }
              ].map((news, i) => (
                <Link to="/blog-detail" key={i} className="flex gap-4 items-center cursor-pointer group no-underline">
                  <img src={news.img} alt="Thumbnail" className="w-16 h-14 rounded object-cover flex-shrink-0" />
                  <div>
                    <h4 className="text-[12px] font-black text-[#11223f] leading-tight group-hover:text-[#ff6b35] transition-colors mb-1 line-clamp-2">
                      {news.title}
                    </h4>
                    <p className="text-[10px] text-[#ff6b35] font-bold">02 Jan 2024</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-[18px] font-black text-[#11223f] mb-5">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['Food', 'Fresh', 'Organic', 'Plant', 'Vegetable', 'Healthy Food', 'Crop', 'Dairy Milk', 'Harvest', 'Crop', 'Plant'].map((tag, i) => (
                <span key={i} className="px-3 py-1.5 bg-white border border-gray-100 shadow-sm rounded text-[10px] font-bold text-gray-500 hover:border-[#ff6b35] hover:text-[#ff6b35] cursor-pointer transition-all">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Advertisement */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-lg">
            <img src={AdImg} alt="Advertisement" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/50"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
              <h3 className="text-[#2ebfa5] text-[20px] font-black mb-2">Advertisement</h3>
              <p className="text-white/80 text-[11px] leading-relaxed mb-4">Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
              <button className="bg-[#ff6b35] text-white px-6 py-2 rounded font-black text-[12px] hover:bg-[#e85a25] transition-colors border-none cursor-pointer">Go Now</button>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[18px] font-black text-[#11223f] mb-5">NewsLetter</h3>
            <input type="email" placeholder="Enter your email here" className="w-full bg-white border border-gray-100 px-4 py-3 rounded shadow-sm text-[12px] font-medium outline-none mb-3 focus:border-[#ff6b35] transition-colors" />
            <button className="w-full bg-[#0b1a2e] text-white py-3 rounded font-black text-[12px] hover:bg-[#ff6b35] transition-colors cursor-pointer border-none shadow-md">Subscribe</button>
          </div>

        </aside>

      </section>
    </main>
  )
}

export default BlogDetail