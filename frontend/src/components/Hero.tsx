import React from 'react'
import BgImage from '../assets/Background.jpg' // CONCEPT: Static Asset Import - Đảm bảo bạn đã có file này

// CONCEPT: Constants (Hằng số) - Giúp code sạch và không render lại dữ liệu tĩnh
const SEARCH_FIELDS = [
    { label: "Destination", opts: ["Istanbul", "Paris", "Tokyo"] },
    { label: "Duration", opts: ["4 Days", "1 Week", "2 Weeks"] },
    { label: "Travel Type", opts: ["Adventure", "Relax"] },
    { label: "Travellers", opts: ["04", "01", "02"] }
]

const Hero = () => {
    return (
        // HERO CONTAINER: Cần background gradient và world map để tạo chiều sâu như Figma
        <section
            className="relative pt-24 pb-32 px-4 text-center overflow-hidden w-full"
            style={{
                background: 'linear-gradient(180deg, #eef7ff 0%, #ffffff 100%)',
            }}
        >
            {/* Lớp phủ bản đồ mờ - Đặc trưng của TripGlobe để đạt 100% chuẩn xác */}
            <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
                <img src="https://www.transparenttextures.com/patterns/world-map.png" alt="world map texture" className="w-full h-full object-contain" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                {/* HERO TEXT CONTENT: Tối ưu khoảng cách và font-weight */}
                <div className="max-w-5xl mx-auto mb-16 px-4">
                    <h1 className="text-6xl md:text-[68px] font-black text-[#11223f] mb-8 leading-[1.1] tracking-tight">
                        Discover the world, one adventure at a time
                    </h1>
                    <p className="text-[#6b7280] mb-12 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                        Experience bespoke itineraries and unparalleled service without breaking the bank.
                    </p>

                    {/* HỆ THỐNG NÚT BẤM (Pill shape): Điểm mấu chốt để giống 100% */}
                    <div className="flex justify-center gap-5 mt-10">
                        <button className="bg-[#11223f] hover:bg-[#0a1529] text-white px-9 py-4 rounded-full text-[15px] font-extrabold transition-all shadow-lg cursor-pointer border-none outline-none">
                            Contact Us
                        </button>
                        <button className="bg-white border-2 border-[#11223f] text-[#11223f] px-9 py-4 rounded-full text-[15px] font-extrabold hover:bg-gray-50 transition-all cursor-pointer shadow-md">
                            Get Quote
                        </button>
                    </div>
                </div>

                {/* IMAGE & SEARCH BOX CONTAINER */}
                <div className="relative max-w-6xl mx-auto px-4 group">
                    {/* Khung ảnh chính: Cần bo góc lớn (3xl) và viền trắng nổi bật */}
                    <div className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                        <img
                            src={BgImage}
                            alt="Hero Banner"
                            className="w-full h-[380px] md:h-[500px] object-cover"
                        />
                    </div>

                    {/* SEARCH BAR (Glassmorphism): Cực kỳ chính xác so với hình 2 bạn gửi */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[92%] bg-[#11223f]/60 backdrop-blur-md p-6 md:p-8 rounded-2xl flex flex-col lg:flex-row items-end gap-5 shadow-2xl border border-white/20 z-20">


                        {SEARCH_FIELDS.map((f, i) => (
                            <div key={i} className="form-control w-full flex-1">
                                <label className="label py-1">
                                    <span className="label-text text-white/80 text-[11px] font-bold uppercase tracking-widest ml-1">{f.label}</span>
                                </label>
                                <div className="relative w-full">
                                    <select className="select select-sm md:select-md w-full bg-white/90 text-[#11223f] font-extrabold focus:outline-none border-none rounded-lg appearance-none cursor-pointer pr-10">
                                        {f.opts.map((o, idx) => <option key={idx} value={o}>{o}</option>)}
                                    </select>
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#11223f] text-[10px] pointer-events-none">▼</span>
                                </div>
                            </div>
                        ))}

                        <button className="bg-[#ff6b35] hover:bg-[#e85a25] text-white w-full lg:w-auto px-10 py-2.5 rounded-xl font-bold text-[15px] transition-all cursor-pointer shadow-lg border-none outline-none">
                            Find Availability
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero