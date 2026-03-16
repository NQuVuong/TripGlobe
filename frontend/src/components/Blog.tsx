import React from 'react'
import Blog1 from '../assets/blog-img-1.png.jpg' 
import Blog2 from '../assets/blog-img-2.png.jpg' // Giả sử tên file thứ 2
import Blog3 from '../assets/blog-img-3.png.jpg' // Giả sử tên file thứ 3
import Avatar1 from '../assets/team-1.png.jpg' 

const BLOGS = [
  {
    id: 1,
    category: "Solo Travel",
    title: "Tracing Ancient Ruins and Roman Relics",
    author: "Robert Fox",
    date: "02",
    month: "Aug",
    img: Blog1,
    avatar: Avatar1
  },
  {
    id: 2,
    category: "City Tour",
    title: "Honoring History in the Land of Heroes",
    author: "Cody Fisher",
    date: "02",
    month: "Aug",
    img: Blog2,
    avatar: Avatar1
  },
  {
    id: 3,
    category: "Group Tour",
    title: "Witnessing Sunrise Amongst the Statues",
    author: "Jerome Bell",
    date: "02",
    month: "Aug",
    img: Blog3,
    avatar: Avatar1
  }
]

const Blog = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-[#ff6b35] font-extrabold text-[11px] uppercase tracking-[0.2em] mb-4">
            Blog
          </h4>
          <h2 className="text-4xl md:text-[46px] font-black text-[#11223f] leading-tight">
            Tips and Tricks for <br /> Planning Your Dream Trip
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-lg transition-all">
              
              <div className="relative h-60 overflow-hidden">
                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#ff6b35] text-white text-center px-3 py-1.5 rounded-lg shadow-md">
                  <span className="block font-black text-lg leading-none mb-1">{blog.date}</span>
                  <span className="block text-[10px] uppercase font-bold">{blog.month}</span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-[#ff6b35] text-[10px] font-black uppercase tracking-wider mb-2 block">
                  {blog.category}
                </span>
                <h3 className="text-[#11223f] font-black text-xl mb-6 leading-snug line-clamp-2 group-hover:text-[#2ebfa5] transition-colors">
                  {blog.title}
                </h3>
                
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img src={blog.avatar} alt={blog.author} className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-[#11223f] font-bold text-sm">{blog.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Blog