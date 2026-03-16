import React from 'react'

// Import đúng 5 ảnh bạn vừa tải về
import Img1 from '../assets/top-spot-img-1.png.jpg'
import Img2 from '../assets/top-spot-img-2.png.jpg'
import Img3 from '../assets/top-spot-img-3.png.jpg'
import Img4 from '../assets/top-spot-img-4.png.jpg'
import Img5 from '../assets/top-spot-img-5.png.jpg'

const HOTSPOTS = [
  { 
    id: 1, 
    title: "Pryde mountains", 
    subtitle: "Prydelands, 100 Trips", 
    img: Img1, 
    className: "md:col-span-2" // Thằng này chiếm 2 cột cho to ra
  },
  { 
    id: 2, 
    title: "Eiffel Tower", 
    subtitle: "France, 150 Trips", 
    img: Img2, 
    className: "md:col-span-1" 
  },
  { 
    id: 3, 
    title: "Iceland", 
    subtitle: "Reykjavik, 100 Trips", 
    img: Img3, 
    className: "md:col-span-1" 
  },
  { 
    id: 4, 
    title: "Camping Nature", 
    subtitle: "Unknown, 80 Trips", 
    img: Img4, 
    className: "md:col-span-1" 
  },
  { 
    id: 5, 
    title: "Bosphorus Trip", 
    subtitle: "Turkey, 120 Trips", 
    img: Img5, 
    className: "md:col-span-1" 
  }
]

const TravelHotspots = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        
        {/* Header Unveiling World's Top */}
        <div className="text-center mb-16">
          <h4 className="text-[#ff6b35] font-extrabold text-[11px] uppercase tracking-[0.3em] mb-4">
            Top Destination
          </h4>
          <h2 className="text-4xl md:text-[52px] font-black text-[#11223f] leading-tight">
            Unveiling World's Top <br /> Travel Hotspots
          </h2>
        </div>

        {/* Lưới Grid 5 ảnh (layout so le) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOTSPOTS.map((spot) => (
            <div 
              key={spot.id} 
              className={`relative rounded-[2rem] overflow-hidden group cursor-pointer h-[320px] md:h-[400px] shadow-sm ${spot.className}`}
            >
              {/* Ảnh nền */}
              <img 
                src={spot.img} 
                alt={spot.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              
              {/* Lớp phủ Gradient đen để nổi chữ */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11223f]/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text góc dưới trái */}
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-black text-2xl mb-1 tracking-wide">
                  {spot.title}
                </h3>
                <p className="text-gray-300 text-[13px] font-medium tracking-wider">
                  {spot.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TravelHotspots