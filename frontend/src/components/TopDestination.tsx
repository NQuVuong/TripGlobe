import React from 'react'
import DestImg1 from '../assets/top-destination-img-1.png.jpg'
import DestImg2 from '../assets/top-destination-img-2.png.jpg'
import DestImg3 from '../assets/top-destination-img-3.png.jpg'
import DestImg4 from '../assets/top-destination-img-4.png.jpg'
import DestImg5 from '../assets/top-destination-img-5.png.jpg'

const LOCATIONS = [
  { name: "Batu, East Java", count: "86 Destinations", img: DestImg1 },
  { name: "Kuta", count: "86 Destinations", img: DestImg2 },
  { name: "Surabaya, East Java", count: "86 Destinations", img: DestImg3 },
  { name: "Malang, East Java", count: "86 Destinations", img: DestImg4 },
  { name: "Doemg, Central Java", count: "86 Destinations", img: DestImg5 },
  { name: "Nusa Dua, Lombok", count: "86 Destinations", img: DestImg1 },
  { name: "Bandung, West Java", count: "86 Destinations", img: DestImg2 },
  { name: "Wakatobi, Sumatera", count: "86 Destinations", img: DestImg3 }
]

const TopDestination = () => {
  return (
    <section className="py-24 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-10 text-center">
        <h4 className="text-[#ff6b35] font-extrabold text-[11px] uppercase tracking-[0.3em] mb-4">
          TOP DESTINATION
        </h4>
        <h2 className="text-4xl md:text-[48px] font-black text-[#11223f] mb-6 leading-tight">
          Search a best place in the world
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-16 leading-relaxed">
          Our dating website offers a range of features and benefits that make finding love online simple and enjoyable. With our advanced matching algorithm
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATIONS.map((loc, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl flex flex-col items-start text-left shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all group cursor-pointer border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 rounded-xl overflow-hidden mb-4">
                <img src={loc.img} alt={loc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-[#11223f] font-extrabold text-base mb-1 tracking-tight">{loc.name}</h3>
              <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider">{loc.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopDestination