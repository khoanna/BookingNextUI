import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Hotel from './pages/Hotel'
import FindHotel from './pages/FindHotel'
import Footer from './components/Footer'

const App = () => {
  const location = useLocation();
  const hideNavbar = !['/login'].includes(location.pathname);

  return (
    <div>
      {hideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotel' element={<FindHotel />} />
        <Route path='/hotel/:id' element={<Hotel />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App