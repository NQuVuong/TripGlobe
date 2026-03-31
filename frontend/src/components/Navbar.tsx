import React from 'react'
import LogoImg from '../assets/logo-dark.png.jpg'
import { useNavigate, Link, useLocation } from 'react-router-dom'

// Cấu trúc lại NAVS
const NAVS = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Destination", path: "/destination" },
  { 
    name: "Pages", 
    path: "#",
    dropdown: [
      { name: "Sign Up", path: "/signup" },
      { name: "Login", path: "/login" },
      { name: "Forgot Password", path: "/forgot-password" },
      { name: "Checkout", path: "/checkout" },
      { name: "About", path: "/about" },
      { name: "Pricing", path: "/pricing"},
      { name: "Terms & Condition", path: "/terms" },
      { name: "Pricing", path: "/pricing"},
      { name: "Faq", path: "/faq" },
      { name: "404 Error", path: "/error" }
    ]
  },
  { name: "Contact", path: "/contact" }
]

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation() // Lấy URL hiện tại để bôi màu menu

  const handleBookTripClick = () => {
    navigate('/signup') 
  }

  return (
    <header className="w-full bg-white sticky top-0 z-[999] border-b border-gray-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-10">
        
        {/* LOGO */}
        <div className="flex-none">
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
            {NAVS.map((n, i) => {
              // Kiểm tra xem menu này có đang là trang hiện tại không
              // Nếu là thẻ Pages thì nó sáng lên khi đang ở 1 trong các trang dropdown
              const isActive = 
                location.pathname === n.path || 
                (n.dropdown && n.dropdown.some(sub => sub.path === location.pathname))

              return (
                <li key={i} className="relative group py-4">
                  
                  <Link 
                    to={n.path} 
                    className={`text-[15px] font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer no-underline
                      ${isActive ? 'text-[#ff6b35]' : 'text-[#11223f] group-hover:text-[#ff6b35]'}`}
                  >
                    {n.name} 
                    {n.dropdown && <span className="text-[10px] opacity-40 -mb-0.5 transition-transform group-hover:rotate-180">▼</span>}
                  </Link>

                  {/* DROPDOWN MENU */}
                  {n.dropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-xl rounded-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      {n.dropdown.map((subItem, j) => {
                        const isSubActive = location.pathname === subItem.path;
                        return (
                          <Link 
                            key={j} 
                            to={subItem.path} 
                            // Nếu đang ở trang con nào thì bôi màu trang đó trong dropdown
                            className={`block px-5 py-2.5 text-[13px] font-bold transition-colors hover:bg-orange-50/50 hover:text-[#ff6b35]
                              ${isSubActive ? 'text-[#ff6b35] bg-orange-50/30' : 'text-gray-600'}`}
                          >
                            {subItem.name}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                  
                </li>
              )
            })}
          </ul>
        </nav>

        {/* BOOK TRIP BUTTON */}
        <div className="flex-none">
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