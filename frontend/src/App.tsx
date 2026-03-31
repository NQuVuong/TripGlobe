import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import Contact from './components/Contact'
import Error404 from './components/Error404'
import BlogPage from './components/BlogPage'
import TermsAndCondition from './components/TermsAndCondition'
import Checkout from './components/Checkout'
import CheckoutConfirm from './components/CheckoutConfirm'
import DestinationPage from './components/DestinationPage'
import DestinationDetail from './components/DestinationDetail'
import BlogDetail from './components/BlogDetail'
import About from './components/About'
import Pricing from './components/PricingPage'
import FAQPage from './components/FAQPage'


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
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/terms" element={<TermsAndCondition />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-confirm" element={<CheckoutConfirm />} />
            <Route path="/destination" element={<DestinationPage />} />
            <Route path="/destination-detail" element={<DestinationDetail />} />
            <Route path="/blog-detail" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQPage />} />



            {/* 4. Trang Error (tự gõ /error) */}
            <Route path="/error" element={<Error404 />} />

            {/* 5. CATCH-ALL: Bắt mọi đường dẫn sai. LUÔN PHẢI NẰM DƯỚI CÙNG! */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App