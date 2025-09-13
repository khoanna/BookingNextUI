import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../assets';

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;

    const navLinks = [
        { name: 'Products', path: '/' },
        { name: 'Contact', path: '/' },
        { name: 'About', path: '/' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${path === "/" ? (isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6") : "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"}`}>

            <Link to="/" className="flex items-center justify-center gap-2">
                <img src={assets.home} alt="Logo" className={`h-3 w-3 md:h-4 md:w-4 ${path === "/" ? (isScrolled ? 'invert' : '') : "invert"}`} />
                <p className={`font-bold text-xl md:text-2xl ${path === "/" ? (isScrolled ? 'text-black' : 'text-white') : "text-black"}`}>Booking Next</p>
            </Link>

            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${path === "/" ? (isScrolled ? "text-gray-700" : "text-white") : "text-gray-700"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </a>
                ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
                <Link to='/login' className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${path === "/" ? (isScrolled ? "text-white bg-black" : "bg-white text-black") : "text-white bg-black"}`}>
                    Đăng nhập
                </Link>
            </div>

            <div className="flex items-center gap-3 md:hidden">
                <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${path === "/" ? (isScrolled ? "" : "invert") : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </a>
                ))}

                <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                    New Launch
                </button>

                <Link to='/login' className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                    Đăng nhập
                </Link>
            </div>
        </nav>
    )
}

export default Navbar