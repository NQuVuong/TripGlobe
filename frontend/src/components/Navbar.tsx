import React from 'react'
import LogoImg from '../assets/logo-dark.png.jpg'
// 1. Import useNavigate từ react-router-dom
import { useNavigate } from 'react-router-dom'

const NAVS = ["Home", "Blog", "Destination", "Pages", "Contact"]

const Navbar = () => {
  // 2. Khởi tạo hàm chuyển trang
  const navigate = useNavigate()

  // 3. Tạo hàm xử lý khi click vào nút
  const handleBookTripClick = () => {
    navigate('/signup') // Lệnh này sẽ đẩy người dùng sang trang /signup
  }

  return (
    <header className="w-full bg-white sticky top-0 z-[999] border-b border-gray-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-10">
        
        {/* LOGO */}
        <div className="flex-none">
          {/* Sửa href="/" thành onlick navigate để load mượt không bị chớp trang */}
          <div onClick={() => navigate('/')} className="cursor-pointer block">
            <img 
              src={LogoImg} 
              alt="Triptopia Logo" 
              className="h-9 w-auto object-contain"
            />
          </div>
        </div>

        {/* MENU ITEMS */}
        <nav className="flex-none hidden md:block">
          <ul className="flex space-x-12 items-center">
            {NAVS.map((n, i) => (
              <li key={i}>
                <a 
                  href="#" 
                  className={`text-[15px] font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer
                    ${i === 0 ? 'text-[#ff6b35]' : 'text-[#11223f] hover:text-[#ff6b35]'}`}
                >
                  {n} 
                  {i < 4 && <span className="text-[10px] opacity-40 -mb-0.5">▼</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* BOOK TRIP BUTTON */}
        <div className="flex-none">
          {/* 4. Gắn sự kiện onClick vào thẻ button giữ nguyên giao diện cũ */}
          <button 
            onClick={handleBookTripClick}
            className="bg-[#2ebfa5] hover:bg-[#26a690] text-white px-7 py-3 rounded-full text-sm font-extrabold shadow-md transition-all cursor-pointer border-none outline-none"
          >
            Book Trip
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar