import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FaArrowUp, FaRocket, FaChevronUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrollingToTop, setIsScrollingToTop] = useState(false)
  const location = useLocation()

  // Scroll to top when route changes
  useEffect(() => {
    setIsScrollingToTop(true)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    
    // Reset scrolling indicator after 1 second
    const timer = setTimeout(() => {
      setIsScrollingToTop(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [location.pathname])

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Calculate scroll progress
    const calculateScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', toggleVisibility)
    window.addEventListener('scroll', calculateScrollProgress)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('scroll', calculateScrollProgress)
    }
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    setIsScrollingToTop(true)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
    // Reset scrolling indicator after 1 second
    setTimeout(() => {
      setIsScrollingToTop(false)
    }, 1000)
  }

  return (
    <>
      {/* Transparent Loading Icon */}
      {isScrollingToTop && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          <div className="relative">
            {/* Transparent Background Circle */}
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center shadow-2xl">
              {/* Loading Spinner */}
              <div className="w-12 h-12 border-4 border-white/40 border-t-white rounded-full animate-spin"></div>
            </div>
            
            {/* Floating Particles */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-white/60 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -left-3 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      )}


      {/* Scroll to Top Button */}
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50 animate-slide-in">
          {/* Progress Ring */}
          <div className="relative">
            {/* Background Circle */}
            <div className="w-16 h-16 bg-white rounded-full shadow-2xl border-2 border-gray-200 flex items-center justify-center">
              {/* Progress Ring */}
              <svg className="w-16 h-16 absolute inset-0 transform -rotate-90" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
                  className="text-secondary transition-all duration-300 ease-out"
                  strokeLinecap="round"
                />
              </svg>
              
              {/* Button Content */}
              <button
                onClick={scrollToTop}
                className="relative z-10 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white hover:from-secondary hover:to-accent transition-all duration-300 transform hover:scale-110 hover:shadow-xl group"
                aria-label="Scroll to top"
              >
                <FaChevronUp className="text-lg group-hover:animate-bounce" />
              </button>
            </div>
          </div>

          {/* Floating Animation Elements */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-ping opacity-75"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
        </div>
      )}

      {/* Alternative Rocket Style Button */}
      {isVisible && (
        <div className="fixed bottom-8 left-8 z-50 animate-slide-in">
          <button
            onClick={scrollToTop}
            className="group relative w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
            aria-label="Rocket to top"
          >
            {/* Rocket Icon */}
            <FaRocket className="text-xl group-hover:animate-bounce transform group-hover:-translate-y-1 transition-all duration-300" />
            
            {/* Trail Effect */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Sparkle Effects */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
          </button>
        </div>
      )}

      {/* Page Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
        
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
        
        @keyframes slideIn {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}

export default ScrollToTop
