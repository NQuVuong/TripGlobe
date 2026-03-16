import React, { useState } from 'react'

// Lấy lại đúng 3 ảnh từ phần Team của bạn (lưu ý cái đuôi .png.png của ảnh 3)
import Team1 from '../assets/team-1.png.jpg'
import Team2 from '../assets/team-2.png.jpg'
import Team3 from '../assets/team-3.png.jpg'

const REVIEWS = [
  {
    id: 1,
    name: "Vasili Ilmaz",
    role: "Web Developer",
    text: "I can't thank Triptopia enough for helping me find love! Initially, I was hesitant about online dating, but this platform changed my perspective entirely. The user-friendly interface, personalized matches, and the welcoming community made me feel at ease from the very beginning.",
    img: Team1
  },
  {
    id: 2,
    name: "Veronica",
    role: "Product Designer",
    text: "This platform made booking my summer vacation an absolute breeze. The recommendations were spot on, and the interface is incredibly smooth. Highly recommend it to anyone looking to explore the world without the usual hassle of trip planning!",
    img: Team2
  },
  {
    id: 3,
    name: "Lion jhonson",
    role: "Web Developer",
    text: "As someone who travels constantly for work, finding a reliable booking system is tough. Triptopia exceeded my expectations with their curated locations and responsive support team. Will definitely use it for my next assignment.",
    img: Team3
  }
]

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1))
  }

  const currentReview = REVIEWS[currentIndex]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h4 className="text-[#ff6b35] font-extrabold text-[11px] uppercase tracking-[0.2em] mb-4">
            Testimonial
          </h4>
          <h2 className="text-4xl md:text-[50px] font-black text-[#11223f] leading-tight">
            What Our Traveller Said <br /> About Us
          </h2>
        </div>

        {/* Khối Review Card */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Nền khung viền */}
          <div className="border border-[#2ebfa5] rounded-xl px-12 pt-16 pb-12 text-center bg-white relative">
            
            {/* Ảnh Avatar nằm đè lên viền trên */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img 
                src={currentReview.img} 
                alt={currentReview.name} 
                className="w-20 h-20 rounded-full border-[6px] border-white object-cover shadow-sm transition-all duration-500"
              />
            </div>

            {/* Nội dung Review */}
            <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-3xl mx-auto transition-all duration-500">
              {currentReview.text}
            </p>

            <h4 className="text-[#11223f] font-black text-xl mb-1">{currentReview.name}</h4>
            <p className="text-gray-400 text-[13px] font-medium">{currentReview.role}</p>
          </div>

          {/* Nút Mũi tên Trái */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-400 hover:text-[#2ebfa5] hover:border-[#2ebfa5] transition-all cursor-pointer shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Nút Mũi tên Phải */}
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-400 hover:text-[#2ebfa5] hover:border-[#2ebfa5] transition-all cursor-pointer shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

        </div>
      </div>
    </section>
  )
}

export default Testimonial