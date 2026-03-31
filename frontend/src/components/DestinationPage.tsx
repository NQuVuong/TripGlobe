import React from 'react'
import Experience from './Experience'
import HeaderBg from '../assets/signup-bg.jpg'
import { Link } from 'react-router-dom'
import Dest7 from '../assets/destination-img-7.png.jpg'
import Dest8 from '../assets/destination-img-8.png.jpg'
import Dest9 from '../assets/destination-img-9.png.jpg'
import Dest10 from '../assets/destination-img-10.png.jpg'
import Dest11 from '../assets/destination-img-11.png.jpg'
import Dest12 from '../assets/destination-img-12.png.jpg'
import Dest13 from '../assets/destination-img-13.png.jpg'
import Dest14 from '../assets/destination-img-14.png.jpg'
import Dest15 from '../assets/destination-img-15.png.jpg'
import Dest16 from '../assets/destination-img-16.png.jpg'

const DestCard = ({ img, title, loc, className = "" }: { img: string, title: string, loc: string, className?: string }) => (
    <Link
        to="/destination-detail"
        className={`block relative rounded-xl overflow-hidden group shadow-md cursor-pointer border-none outline-none ${className}`}
    >
        <img
            src={img}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e]/90 via-[#0b1a2e]/20 to-transparent"></div>
        <div className="absolute top-5 left-5 bg-[#0b1a2e]/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full">
            5.0
        </div>
        <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-[18px] font-bold mb-1 group-hover:text-[#ff6b35] transition-colors">{title}</h3>
            <p className="text-[12px] font-medium text-gray-300">{loc}</p>
        </div>
    </Link>
)

const DestinationPage = () => {
    return (
        <main className="w-full bg-[#f9fbfb]">

            {/* 1. Header Banner */}
            <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img src={HeaderBg} alt="Destination Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0b1a2e]/60"></div>
                </div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-[50px] font-black mb-3 tracking-wide uppercase">Destination</h1>
                    <p className="text-[13px] font-bold text-white/90 uppercase">
                        Home <span className="text-[#ff6b35] mx-1.5">•</span> Pages <span className="text-[#ff6b35] mx-1.5">•</span> Destination
                    </p>
                </div>
            </div>

            {/* 2. Lưới Hình Ảnh (Đủ 16 item) */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6 lg:px-10">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">

                        {/* Hàng 1: 3 ô vuông */}
                        <DestCard img={Dest7} title="Lao landing Iceland" loc="Krabal, 100 Trips" />
                        <DestCard img={Dest8} title="Ladakh India" loc="India, 100 Trips" />
                        <DestCard img={Dest9} title="Bosphorus Trip" loc="Istanbul, 150 Trips" />

                        {/* Hàng 2: 1 ô ngang (chiếm 2 cột) + 1 ô text có ảnh nền */}
                        <DestCard img={Dest10} title="Pryde mountains" loc="Prydelands, 100 Trips" className="md:col-span-2" />

                        {/* Ô SỐ 5: Khối Text dùng ảnh nền Dest11 + Lớp phủ tối */}
                        <div className="relative rounded-xl overflow-hidden shadow-md flex flex-col justify-center items-start p-8 group">
                            <img src={Dest11} alt="Discount Background" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            {/* Lớp phủ màu xanh đậm (opacity 85%) để làm nổi chữ */}
                            <div className="absolute inset-0 bg-[#0b1a2e]/85 transition-colors group-hover:bg-[#0b1a2e]/75"></div>

                            <div className="relative z-10">
                                <p className="text-[#ff6b35] text-[12px] font-bold mb-4">20% Off on First Travel</p>
                                <h2 className="text-white text-[22px] font-black leading-snug mb-8">
                                    It will be the best experience of your life
                                </h2>
                                <Link
                                    to="/destination-detail"
                                    className="inline-block bg-[#ff6b35] text-white px-6 py-2.5 rounded font-bold text-[13px] hover:bg-[#e85a25] transition-colors shadow-md shadow-orange-500/20 cursor-pointer border-none outline-none no-underline"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>

                        {/* Hàng 3 & 4: 1 dọc cao + 1 ngang + 2 vuông */}
                        <DestCard img={Dest12} title="Eiffel Tower" loc="France, 150 Trips" className="md:row-span-2" />
                        <DestCard img={Dest13} title="Pryde mountains" loc="Prydelands, 100 Trips" className="md:col-span-2" />
                        <DestCard img={Dest14} title="Lao landing Iceland" loc="Krabal, 100 Trips" />
                        <DestCard img={Dest15} title="Jammu Kashmir" loc="India, 100 Trips" />

                        {/* Hàng 5: 1 vuông + 1 ngang */}
                        <DestCard img={Dest16} title="Bosphorus Trip" loc="Istanbul, 150 Trips" />
                        {/* Nếu có thêm ảnh, sếp cứ copy thẻ <DestCard /> ném vào đây nhé */}

                    </div>

                </div>
            </section>

            {/* 3. Re-use Khối Experience (Get to know us) */}
            <section className="pb-20">
                <Experience />
            </section>

        </main>
    )
}

export default DestinationPage