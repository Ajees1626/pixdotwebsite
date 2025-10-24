import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { isDarkMode, toggleTheme } = useTheme()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Service', href: '/service' },
    { name: 'Industrie', href: '/industrie' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Case Study', href: '/casestudy' },
    { name: 'Contact', href: '/contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isScrolled ? 'shadow-xl backdrop-blur-md bg-opacity-95' : 'shadow-lg'} sticky top-0 z-50 transition-all duration-500 ease-in-out`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="transform group-hover:scale-105 transition-transform duration-300 ease-out">
              {isDarkMode ? (
                <img 
                  src="/2.png" 
                  alt="Pixdot Logo" 
                  className="h-16 w-auto"
                />
              ) : (
                <img 
                  src="/1.png" 
                  alt="Pixdot Logo" 
                  className="h-16  w-auto"
                />
              )}
            </div>
          </Link>

          {/* Desktop & Tablet Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-0.5 ${
                  location.pathname === item.href
                    ? 'text-secondary border-b-2 border-secondary'
                    : `${isDarkMode ? 'text-gray-300' : 'text-primary'} hover:text-secondary`
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-all duration-300 transform hover:scale-110 hover:rotate-12`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun size={18} className="animate-pulse" /> : <FaMoon size={18} className="animate-pulse" />}
            </button>
            <Link to="/contact" className="btn-primary transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out text-sm xl:text-base px-3 xl:px-4 py-2 xl:py-3">
              Get Started
            </Link>
          </div>

          {/* Tablet & Mobile menu button & theme toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-all duration-300 transform hover:scale-110`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun size={16} className="animate-pulse" /> : <FaMoon size={16} className="animate-pulse" />}
            </button>
            <button
              onClick={toggleMenu}
              className={`${isDarkMode ? 'text-white hover:text-secondary' : 'text-primary hover:text-secondary'} transition-all duration-300 transform hover:scale-110`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} className="animate-spin" /> : <FaBars size={24} className="animate-bounce" />}
            </button>
          </div>
        </div>

        {/* Tablet & Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fadeInDown">
            <div className={`px-4 pt-4 pb-4 space-y-2 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t shadow-lg`}>
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:translate-x-2 ${
                    location.pathname === item.href
                      ? `${isDarkMode ? 'text-white bg-secondary shadow-lg' : 'text-white bg-secondary shadow-lg'}`
                      : `${isDarkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'}`
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Link
                  to="/contact"
                  className="btn-primary w-full text-center block transform hover:scale-105 transition-all duration-300 ease-out rounded-lg py-3 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.5s ease-out;
        }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideInFromTop {
          animation: slideInFromTop 0.6s ease-out;
        }
      `}</style>
    </header>
  )
}

export default Header

