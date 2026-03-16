import React from 'react'

// Ông thay đúng tên ảnh ông tải về vào đây nhé. 
// Nếu chưa tải đủ 9 ảnh thì cứ copy dùng tạm ảnh 1, 2, 3 cho đủ mảng.
import Img1 from '../assets/trending-img-1.png.jpg'
import Img2 from '../assets/trending-img-2.png.jpg'
import Img3 from '../assets/trending-img-3.png.jpg'
import Img4 from '../assets/trending-img-4.png.jpg'
import Img5 from '../assets/trending-img-5.png.jpg'
import Img6 from '../assets/trending-img-6.png.jpg'
import Img7 from '../assets/trending-img-7.png.jpg'
import Img8 from '../assets/trending-img-8.png.jpg'
import Img9 from '../assets/trending-img-9.png.jpg'

const TRENDING_CITIES = [
  { id: 1, name: "Manila", img: Img1, rating: "5.0(35)", price: 150 },
  { id: 2, name: "Dubai", img: Img2, rating: "5.0(35)", price: 150 },
  { id: 3, name: "Franch", img: Img3, rating: "5.0(35)", price: 150 },
  { id: 4, name: "Himalaya", img: Img4, rating: "5.0(35)", price: 150 },
  { id: 5, name: "Kashmir", img: Img5, rating: "5.0(35)", price: 150 },
  { id: 6, name: "Bihu", img: Img6, rating: "5.0(35)", price: 150 },
  { id: 7, name: "Jordan", img: Img7, rating: "5.0(35)", price: 150 },
  { id: 8, name: "Waterfall", img: Img8, rating: "5.0(35)", price: 150 },
  { id: 9, name: "Forestgump", img: Img9, rating: "5.0(35)", price: 150 },
]

const Trending = () => {
  return (
    <section className="py-24 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Tiêu đề */}
        <div className="text-center mb-16">
          <h4 className="text-[#ff6b35] font-extrabold text-[10px] uppercase tracking-[0.2em] mb-3">
            Trending Destination
          </h4>
          <h2 className="text-3xl md:text-[42px] font-black text-[#11223f] leading-tight">
            The most searched for <br /> cities on Triptopia
          </h2>
        </div>

        {/* Lưới 3x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRENDING_CITIES.map((city) => (
            <div 
              key={city.id} 
              className="bg-white p-4 rounded-3xl flex items-center gap-5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-transparent hover:border-gray-100 hover:shadow-lg transition-all"
            >
              {/* Ảnh vuông bên trái */}
              <img 
                src={city.img} 
                alt={city.name} 
                className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover shrink-0"
              />
              
              {/* Nội dung bên phải */}
              <div className="flex flex-col items-start text-left">
                {/* Tên thành phố */}
                <h3 className="text-[#11223f] font-bold text-lg leading-tight mb-1.5">
                  {city.name}
                </h3>
                
                {/* Đánh giá */}
                <div className="flex items-center text-[11px] text-gray-500 font-medium mb-1.5">
                  <span className="text-[#ffb800] text-xs mr-1">★</span> {city.rating}
                </div>
                
                {/* Giá tiền */}
                <div className="text-[#11223f] font-black text-[15px] mb-3">
                  ${city.price}<span className="text-gray-400 text-[10px] font-normal">/night</span>
                </div>
                
                {/* Nút Book Now màu xanh ngọc */}
                <button className="bg-[#2ebfa5] hover:bg-[#259c87] text-white text-[10px] font-bold px-5 py-2 rounded-lg transition-colors border-none cursor-pointer">
                  Book Now
                </button>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Trending