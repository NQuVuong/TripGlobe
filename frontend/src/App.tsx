import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import TopDestination from './components/TopDestination'
import Team from './components/Team'
import Features from './components/Features'
import Destination from './components/Destination'
import TravelHotspots from './components/TravelHotspots'
import Trending from './components/Trending'
import Testimonial from './components/Tesmonial'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import Footer from './components/Footer'
import SignUp from './components/SignUp'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="h-20"></div>
      <Experience />
      <TopDestination />
      <Team />
      <Features />
      <Destination />
      <TravelHotspots />
      <Trending />
      <Testimonial />
      <FAQ />
      <Blog />
    </>
  )
}
function App() {
  return (
    <Router>
      <div className="w-full bg-white font-sans text-[#11223f]">
        {/* Navbar và Footer luôn hiển thị ở mọi trang */}
        <Navbar />

        <main>
          <Routes>
            {/* Đường dẫn mặc định (Trang chủ) */}
            <Route path="/" element={<Home />} />

            {/* Đường dẫn tới trang Sign Up */}
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App