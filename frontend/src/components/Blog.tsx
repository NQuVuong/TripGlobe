import React from 'react'
import { Link } from 'react-router-dom'
import HeaderBg from '../assets/signup-bg.jpg'
import BlogImg1 from '../assets/blog-img-13.jpg.jpg'
import BlogImg2 from '../assets/blog-img-14.png.jpg'
import RecentImg1 from '../assets/recent-blog-img-1.png.jpg'
import RecentImg2 from '../assets/recent-blog-img-2.png.jpg'
import AdImg from '../assets/ad-img.png.jpg'

const BlogPage = () => {
  return (
    <main className="w-full bg-[#f9fbfb]">
      {/* Banner */}
      <div className="relative h-[300px] w-full flex items-center justify-center">
        <img src={HeaderBg} className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-[#0b1a2e]/60 z-10"></div>
        <h1 className="relative z-20 text-white text-5xl font-black">Blog</h1>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cột trái: Danh sách bài viết */}
        <div className="lg:col-span-2 space-y-12">
          {[BlogImg1, BlogImg2].map((img, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <img src={img} className="w-full rounded-xl mb-6 aspect-video object-cover" alt="" />
              <h2 className="text-3xl font-black text-[#11223f] mb-4">Anatolian Adventure: Off-the-Beaten-Path...</h2>
              <p className="text-gray-500 mb-8">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con...</p>
              <div className="flex justify-between items-center border-t pt-6">
                <span className="text-gray-400 font-bold text-xs">📅 12 March 2024</span>
                <Link to="/blog-detail" className="bg-[#ff6b35] text-white px-8 py-2.5 rounded font-black text-sm no-underline shadow-md">Read More</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Cột phải: Sidebar (GIỮ LẠI TRONG CẢ 2 TRANG) */}
        <aside className="space-y-10">
          <div className="flex shadow-sm"><input type="text" placeholder="Search" className="w-full bg-[#f4f7f6] p-4 rounded-l outline-none" /><button className="bg-[#ff6b35] text-white px-5 rounded-r">🔍</button></div>
          <div><h3 className="text-xl font-black mb-6">Category</h3><ul className="space-y-4 font-bold text-sm text-[#11223f]">{['Destination Guides', 'Travel Tips', 'Cultural'].map(c => <li key={c} className="hover:text-[#ff6b35] cursor-pointer">{c}</li>)}</ul></div>
          <div><h3 className="text-xl font-black mb-6">Recent News</h3><div className="space-y-4">{[RecentImg1, RecentImg2].map((img, i) => <div key={i} className="flex gap-4"><img src={img} className="w-16 h-16 rounded object-cover" alt="" /><div><h4 className="text-xs font-black">Unveiling the Best...</h4><p className="text-[10px] text-[#ff6b35] font-bold">02 Jan 2024</p></div></div>)}</div></div>
          <div className="relative rounded-xl overflow-hidden aspect-square"><img src={AdImg} className="absolute inset-0 w-full h-full object-cover" alt="" /><div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center"><h3 className="text-[#2ebfa5] font-black text-xl mb-2">Advertisement</h3><button className="bg-[#ff6b35] text-white px-6 py-2 rounded font-black text-xs">Go Now</button></div></div>
        </aside>
      </section>
    </main>
  )
}

export default BlogPage