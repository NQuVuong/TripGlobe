import React from 'react'
import MainTravelImg from '../assets/about-img-3.png.jpg'

const Features = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Tiêu đề chính */}
        <div className="text-center mb-16">
          <h4 className="text-[#ff6b35] font-extrabold text-[11px] uppercase tracking-[0.3em] mb-4">
            GET TO KNOW US
          </h4>
          <h2 className="text-4xl md:text-[48px] font-black text-[#11223f] leading-tight mb-6">
            Experience the World <br /> With Triptopia
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Our dating website offers a range of features and benefits that make finding love online simple and enjoyable. With our advanced matching algorithm.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
          
          {/* Nhóm bên trái */}
          <div className="flex-1 space-y-24 w-full">
            {/* Luxury Trip */}
            <div className="flex flex-col items-start lg:items-start text-left">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 shadow-sm">
                <span className="text-xl">🗺️</span>
              </div>
              <h3 className="text-[#11223f] font-black text-xl mb-3">Luxury Trip</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                Our algorithm connects you with like-minded partners using your interests.
              </p>
            </div>

            {/* Affordable Budget */}
            <div className="flex flex-col items-start lg:items-start text-left">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-6 shadow-sm">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-[#11223f] font-black text-xl mb-3">Affordable Budget</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                Your safety is a priority. We ensure strict security for your information.
              </p>
            </div>
          </div>

          {/* Ảnh trung tâm (Vali + Địa danh) */}
          <div className="flex-[1.2] flex justify-center relative order-first lg:order-none mb-12 lg:mb-0">
            <div className="relative z-10 scale-110">
              <img 
                src={MainTravelImg} 
                alt="Travel Concept" 
                className="w-full max-w-[450px] h-auto object-contain" 
              />
              {/* Vầng sáng phía sau ảnh cho đúng chất Figma */}
              <div className="absolute inset-0 bg-blue-50/50 blur-[80px] -z-10 rounded-full"></div>
            </div>
          </div>

          {/* Nhóm bên phải */}
          <div className="flex-1 space-y-24 w-full lg:pl-12">
            {/* Personalized approach */}
            <div className="flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6 shadow-sm">
                <span className="text-xl">👤</span>
              </div>
              <h3 className="text-[#11223f] font-black text-xl mb-3">Personalized approach</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                Effortlessly navigate and find your perfect match with our user-friendly interface.
              </p>
            </div>

            {/* Experienced Guide */}
            <div className="flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-6 shadow-sm">
                <span className="text-xl">🛡️</span>
              </div>
              <h3 className="text-[#11223f] font-black text-xl mb-3">Experienced Guide</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                Our team is available 24/7 to assist you with any queries or concern.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features