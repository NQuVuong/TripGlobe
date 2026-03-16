import React from 'react'
import Dest1 from '../assets/destination-img-1.png.jpg'
import Dest2 from '../assets/destination-img-2.png.jpg'
import Dest3 from '../assets/destination-img-3.png.jpg'
import Dest4 from '../assets/destination-img-4.png.jpg'
import Dest5 from '../assets/destination-img-5.png.jpg'
import Dest6 from '../assets/destination-img-6.png.jpg' 

const TOURS = [
  { id: 1, title: "Experience Ottoman Empire and Vibrant Culture", location: "ISTANBUL", img: Dest1, price: 150 },
  { id: 2, title: "Unforgettable Hot Air Balloon Rides", location: "CAPPADOCIA", img: Dest2, price: 150 },
  { id: 3, title: "Witnessing Sunrise Amongst the Ancient Statues", location: "BODRUM", img: Dest3, price: 150 },
  { id: 4, title: "Exploring Fairy Chimneys and Underground Cities", location: "ISTANBUL", img: Dest4, price: 150 },
  { id: 5, title: "Tracing Ancient Ruins and Roman Relics", location: "CALIFORNIA", img: Dest5, price: 150 },
  { id: 6, title: "Luxurious Beachfront Retreats and Ancient Wonders", location: "CALIFORNIA", img: Dest6, price: 150 }
]

const CATEGORIES = ["Day Long Tour", "Adventure Trip", "Group Tour", "Solo tour"]

const Destination = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10 text-center">
        {/* Subtitle */}
        <h4 className="text-[#ff6b35] font-extrabold text-[11px] uppercase tracking-[0.3em] mb-4">
          POPULAR TOUR
        </h4>
        
        {/* Main Title */}
        <h2 className="text-4xl md:text-[52px] font-black text-[#11223f] mb-12 leading-tight tracking-tight">
          See Destinations You'll <br /> Love To Visit
        </h2>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat, i) => (
            <button 
              key={i} 
              className={`px-8 py-3 rounded-full text-[13px] font-bold border transition-all cursor-pointer
                ${i === 0 
                  ? 'bg-[#11223f] text-white border-[#11223f] shadow-lg shadow-blue-900/20' 
                  : 'bg-white text-gray-400 border-gray-100 hover:border-[#11223f] hover:text-[#11223f]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOURS.map((tour) => (
            <div key={tour.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 group">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={tour.img} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={tour.title} 
                />
                
                {/* UPDATED HEART (WISHLIST) BUTTON with inline SVG Outline and hover color */}
                <button className="absolute top-5 right-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-none cursor-pointer group/heart transition-all text-gray-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-colors group-hover/heart:text-red-500">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>

              {/* Info Area */}
              <div className="p-8 text-left">
                <div className="flex items-center text-[10px] text-[#ff6b35] font-black uppercase mb-3 tracking-[0.2em]">
                   <span className="mr-2 text-sm">📍</span> {tour.location}
                </div>
                <h3 className="text-[#11223f] font-black text-[20px] leading-snug mb-6 h-14 line-clamp-2 group-hover:text-[#ff6b35] transition-colors">
                  {tour.title}
                </h3>
                
                {/* Review Stars */}
                <div className="flex items-center gap-1 text-[#ff6b35] text-[12px] font-bold mb-6">
                  {"★".repeat(5)} <span className="text-gray-400 ml-1.5 font-medium text-[11px]">5.0 (35)</span>
                </div>

                {/* Footer (Price & Button) */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <div className="text-[#11223f] font-black text-2xl tracking-tighter">
                    ${tour.price}<span className="text-gray-400 text-[11px] font-bold ml-1 uppercase tracking-wider">/Person</span>
                  </div>
                  <button className="bg-[#ff6b35] hover:bg-[#e85a25] text-white px-7 py-3.5 rounded-xl text-[13px] font-black shadow-lg shadow-orange-100 border-none cursor-pointer transition-all">
                    Book Trip
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destination