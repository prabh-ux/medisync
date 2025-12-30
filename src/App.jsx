import { useState } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Specialties from './pages/Specialties'
import OurDoctors from './pages/OurDoctors'
import PatientPortalPage from './pages/PatientPortalPage'
import Location from './pages/Location'
import ScrollToTop from './ScrollToTop'



export default function App() {

  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A2F23] font-serif">
      <Header />
<ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/specialties' element={<Specialties />} />
        <Route path='/doctors' element={<OurDoctors openProfile={openProfile} setOpenProfile={setOpenProfile} />} />
        <Route path="/portal" element={<PatientPortalPage />} />
        <Route path="/locations" element={<Location />} />

      </Routes>

      <Footer />
    </div>
  )
}