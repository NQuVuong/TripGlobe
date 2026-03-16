import React from 'react'

import Team1 from '../assets/team-1.png.jpg'
import Team2 from '../assets/team-2.png.jpg'
import Team3 from '../assets/team-3.png.jpg' 

const TEAM_MEMBERS = [
  {
    name: "Vasili Ilmaz",
    role: "Web Developer",
    img: Team1
  },
  {
    name: "Veronica",
    role: "Product Designer",
    img: Team2
  },
  {
    name: "Lion jhonson",
    role: "Web Developer",
    img: Team3
  }
]

const Team = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h4 className="text-[#ff6b35] font-extrabold text-[11px] uppercase tracking-[0.3em] mb-4">
          OUR TEAM
        </h4>
        <h2 className="text-4xl md:text-[42px] font-black text-[#11223f] mb-20 leading-tight">
          Meet the Creative Minds <br /> Behind Triptopia
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="group relative pt-20">
              
              {/* Profile Image Wrapper */}
              <div className="relative w-44 h-44 mx-auto z-10">
                <div className="absolute inset-0 rounded-full border-[10px] border-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" 
                  />
                </div>
                <div className="absolute -inset-2 rounded-full border border-gray-100 -z-10"></div>
              </div>

              {/* Info Card */}
              <div className="bg-[#11223f] rounded-2xl pt-28 pb-12 px-6 -mt-24 shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-white text-2xl font-bold mb-2 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team