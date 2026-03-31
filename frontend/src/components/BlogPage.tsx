import React from 'react'
import { Link } from 'react-router-dom' // THÊM IMPORT NÀY

import HeaderBg from '../assets/signup-bg.jpg'

// 1. IMPORT TOÀN BỘ ẢNH XỊN CỦA ÔNG VÀO ĐÂY
import BlogImg1 from '../assets/blog-img-13.jpg.jpg'
import BlogImg2 from '../assets/blog-img-14.png.jpg'
import BlogImg3 from '../assets/blog-img-15.png.jpg'

import RecentImg1 from '../assets/recent-blog-img-1.png.jpg'
import RecentImg2 from '../assets/recent-blog-img-2.png.jpg'
import RecentImg3 from '../assets/recent-blog-img-3.png.jpg'
import AdImg from '../assets/ad-img.png.jpg'

// Dữ liệu mẫu cho bài viết chính
const blogPosts = [
  {
    image: BlogImg1,
    title: "Anatolian Adventure: Off-the-Beaten-Path Discoveries in Turkey's Heartland",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation quis nostrud exUt enim ad minim veniam, quis nostrud exercitationUt enim ad minim veniam, quis nostrud.",
    date: "12 March 2024",
    comments: "1k",
    shares: "1.5k"
  },
  {
    image: BlogImg2,
    title: "Soaking in the Natural Thermal Springs and Cotton Castle Terraces",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation quis nostrud exUt enim ad minim veniam, quis nostrud exercitationUt enim ad minim veniam, quis nostrud.",
    date: "12 March 2024",
    comments: "1k",
    shares: "1.5k"
  },
  {
    image: BlogImg3,
    title: "Turquoise Coast Treasures: Sailing Adventures Along Turkey",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation quis nostrud exUt enim ad minim veniam, quis nostrud exercitationUt enim ad minim veniam, quis nostrud.",
    date: "12 March 2024",
    comments: "1k",
    shares: "1.5k"
  }
]

// Dữ liệu mẫu cho Recent News
const recentNews = [
  { image: RecentImg1, title: "Unveiling the Best Beach Destinations for Relaxation", date: "02 Jan 2024" },
  { image: RecentImg2, title: "Indulge in Opulence at These Lavish Destinations", date: "02 Jan 2024" },
  { image: RecentImg3, title: "The Best Destinations for Vacations with Kids", date: "02 Jan 2024" }
]

const categories = ["Destination Guides", "Travel Tips & Hacks", "Cultural Immersion", "Responsible Travel", "Business", "Entertainment"]
const tags = ["Food", "Fresh", "Organic", "Plant", "Vegetable", "Healthy Food", "Crop", "Dairy Milk", "Harvest", "Crop", "Plant"]

const BlogPage = () => {
  return (
    <main className="w-full bg-[#f9fbfb]">
      
      {/* 1. Header Banner */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={HeaderBg} alt="Blog Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0b1a2e]/60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-[50px] font-black mb-3 tracking-wide">Blog</h1>
          <p className="text-[13px] font-bold text-white/90">
            Home <span className="text-[#ff6b35] mx-1.5">•</span> Blog
          </p>
        </div>
      </div>

      {/* 2. Nội dung chính: Chia 2 cột */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* CỘT TRÁI (Main Posts) */}
          <div className="lg:col-span-2 flex flex-col gap-16">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                
                {/* ẢNH BÀI VIẾT (GẮN LINK) */}
                <Link to="/blog-detail" className="w-full aspect-[16/9] md:aspect-[2/1] rounded-lg overflow-hidden mb-6 flex-shrink-0 block">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </Link>
                
                {/* Tiêu đề (GẮN LINK) */}
                <Link to="/blog-detail" className="no-underline">
                  <h2 className="text-[26px] md:text-[32px] font-black text-[#11223f] mb-4 leading-tight hover:text-[#ff6b35] transition-colors">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow">
                  {post.description}
                </p>
                
                {/* Footer bài viết & Nút Read More */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center border-t border-gray-100 pt-6 mt-auto">
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[12px] font-bold text-gray-400">
                    <span className="flex items-center gap-2 text-gray-500">
                      <span className="text-[14px]">📅</span> {post.date}
                    </span>
                    <span className="flex items-center gap-2 text-gray-500">
                      <span className="text-[14px]">💬</span> {post.comments} Comment
                    </span>
                    <span className="flex items-center gap-2 text-gray-500">
                      <span className="text-[14px]">🔗</span> {post.shares} Share
                    </span>
                  </div>
                  {/* NÚT READ MORE (GẮN LINK) */}
                  <Link to="/blog-detail" className="bg-[#ff6b35] hover:bg-[#e85a25] transition-colors text-white px-8 py-2.5 rounded text-[13px] font-bold shadow-md shadow-orange-500/20 whitespace-nowrap no-underline text-center">
                    Read More
                  </Link>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-4 text-[13px] font-bold text-gray-400">
              <button className="px-3 hover:text-[#ff6b35] transition-colors">{"<"}</button>
              <button className="px-3 hover:text-[#ff6b35] transition-colors">1</button>
              <span className="px-1">...</span>
              <button className="px-3 hover:text-[#ff6b35] transition-colors">4</button>
              <button className="px-3 py-1 bg-[#ff6b35] text-white rounded shadow-sm">5</button>
              <button className="px-3 hover:text-[#ff6b35] transition-colors">6</button>
              <span className="px-1">...</span>
              <button className="px-3 hover:text-[#ff6b35] transition-colors">10</button>
              <button className="px-3 hover:text-[#ff6b35] transition-colors">{">"}</button>
            </div>
          </div>

          {/* CỘT PHẢI (Sidebar) */}
          <div className="lg:col-span-1 flex flex-col gap-10">
            {/* Search Bar */}
            <div className="flex shadow-sm rounded overflow-hidden">
              <input type="text" placeholder="Search" className="w-full bg-[#f4f7f6] px-5 py-4 text-[13px] font-medium outline-none border-none" />
              <button className="bg-[#ff6b35] text-white px-6 py-4 hover:bg-[#e85a25] transition-colors border-none outline-none cursor-pointer">🔍</button>
            </div>
            {/* Category */}
            <div>
              <h3 className="text-xl font-black text-[#11223f] mb-6">Category</h3>
              <ul className="space-y-4">
                {categories.map((cat, i) => (
                  <li key={i} className="text-[13px] font-bold text-[#11223f] hover:text-[#ff6b35] cursor-pointer transition-colors flex items-center gap-2">
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
            {/* Recent News */}
            <div>
              <h3 className="text-xl font-black text-[#11223f] mb-6">Recent News</h3>
              <div className="space-y-5">
                {recentNews.map((news, i) => (
                  <Link to="/blog-detail" key={i} className="flex gap-4 items-center cursor-pointer group no-underline">
                    <img src={news.image} alt={news.title} className="w-16 h-16 rounded object-cover flex-shrink-0" />
                    <div>
                      <h4 className="text-[13px] font-black text-[#11223f] leading-snug group-hover:text-[#ff6b35] transition-colors mb-1">
                        {news.title}
                      </h4>
                      <p className="text-[11px] text-[#ff6b35] font-bold opacity-80">{news.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Tags */}
            <div>
              <h3 className="text-xl font-black text-[#11223f] mb-6">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-gray-100 shadow-sm rounded text-[11px] font-bold text-gray-500 hover:border-[#ff6b35] hover:text-[#ff6b35] cursor-pointer transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Advertisement */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-lg mt-2">
              <img src={AdImg} alt="Advertisement" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
                <h3 className="text-[#2ebfa5] text-[22px] tracking-wide font-black mb-2">Advertisement</h3>
                <p className="text-white/90 text-[12px] font-medium leading-relaxed mb-6">Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
                <button className="bg-[#ff6b35] text-white px-8 py-3 rounded font-black text-[13px] hover:bg-[#e85a25] transition-colors border-none cursor-pointer">Go Now</button>
              </div>
            </div>
            {/* Newsletter */}
            <div className="mt-2">
              <h3 className="text-xl font-black text-[#11223f] mb-6">NewsLetter</h3>
              <input type="email" placeholder="Enter your email here" className="w-full bg-white border border-gray-100 px-5 py-4 rounded shadow-sm text-[13px] font-medium outline-none mb-3 focus:border-[#ff6b35] transition-colors" />
              <button className="w-full bg-[#11223f] text-white py-4 rounded font-black text-[13px] hover:bg-black transition-colors cursor-pointer border-none shadow-md">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogPage