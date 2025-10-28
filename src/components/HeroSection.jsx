import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaPlay, FaRocket, FaChartLine, FaUsers, FaAward, FaGlobe, FaLightbulb } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const HeroSection = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <section className={`relative min-h-screen md:min-h-[50vh] lg:min-h-[80vh] xl:min-h-screen flex items-center overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Background tint overlay */}
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-primary/20 to-secondary/20' : 'bg-gradient-to-br from-secondary/5 to-primary/5'}`}></div>
        
        {/* Subtle floating shapes - Responsive */}
        <div className={`absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 rounded-full animate-pulse animate-float ${isDarkMode ? 'bg-secondary/20' : 'bg-secondary/10'}`}></div>
        <div className={`absolute top-20 sm:top-40 right-4 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 rounded-full animate-bounce animate-float-delayed ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'}`}></div>
        <div className={`absolute bottom-20 sm:bottom-40 left-4 sm:left-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full animate-pulse animate-float-slow ${isDarkMode ? 'bg-secondary/25' : 'bg-secondary/15'}`}></div>
        <div className={`absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full animate-bounce animate-float-reverse ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'}`}></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center min-h-screen md:min-h-[50vh] lg:min-h-[80vh] xl:min-h-screen py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16">
          
          {/* Left Content - Standing Lady PNG Image */}
          <div className={`relative h-full flex items-end order-2 md:order-1 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Circular Gradient Background - Mobile Optimized */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-secondary to-primary rounded-full opacity-30 animate-pulse"></div>
            </div>
            
            {/* Person Image Container - Mobile Responsive */}
            <div className="relative z-10 flex justify-center items-center w-full px-2 sm:px-0">
              <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                {/* PNG Image - Standing Lady */}
                <div className="w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl relative overflow-hidden bg-transparent flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/dxiwvcfs5/image/upload/v1761651797/hero_tweuqo.png" 
                    alt="Professional Business Lady"
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
                  />
                  {/* Foreground bottom-to-top overlay (shadow) */}
                  <div className={`pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t ${isDarkMode ? 'from-black/40 via-black/20' : 'from-white/50 via-white/20'} to-transparent`}></div>
                </div>
                
                {/* Lightbulb Icon - Mobile Responsive */}
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 md:-bottom-4 md:-left-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <FaLightbulb className="text-white text-xs sm:text-sm md:text-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`${isDarkMode ? 'text-white' : 'text-primary'} transition-all duration-1000 order-1 md:order-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Main Heading - Mobile & Tablet Optimized */}
            <h1 className={`text-6xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block animate-fadeInUp">
                We Don't Just Build <span className="text-secondary">Brands</span>
              </span>
              <span className={`block animate-fadeInUp delay-500 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
                We Build <span className="text-secondary">Legacies</span> 
              </span>
            </h1>
            
            {/* CTA Buttons - Mobile & Tablet Optimized */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center text-xs sm:text-sm md:text-base"
              >
                <span>Get Free Consultation</span>
                <FaArrowRight className="ml-1.5 sm:ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/service" 
                className={`group border-2 border-secondary font-semibold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center text-xs sm:text-sm md:text-base ${isDarkMode ? 'bg-transparent text-white hover:bg-secondary hover:text-white' : 'bg-white text-primary hover:bg-secondary hover:text-white'}`}
              >
                <span>Our Services</span>
              </Link>
            </div>
            
            {/* Stats Grid - Mobile & Tablet Optimized */}
            <div className={`grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center group animate-counter">
                <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Projects Delivered</div>
              </div>
              <div className="text-center group animate-counter delay-200">
                <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">89%</div>
                <div className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Success Rate</div>
              </div>
              <div className="text-center group animate-counter delay-400">
                <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator - Mobile & Tablet Optimized */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 xl:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-1 sm:space-y-2">
          <span className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Scroll</span>
          <div className={`w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 ${isDarkMode ? 'border-gray-500/40' : 'border-gray-300'} rounded-full flex justify-center`}>
            <div className={`w-1 h-1.5 sm:h-2 md:h-3 ${isDarkMode ? 'bg-gray-300' : 'bg-gray-400'} rounded-full mt-0.5 sm:mt-1 md:mt-2 animate-bounce`}></div>
          </div>
        </div>
      </div>

      
      {/* Custom CSS Animations */}
      <style>{`
        @keyframes scrollBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-scroll-bg {
          animation: scrollBackground 30s ease-in-out infinite;
        }
        
        @media (max-width: 1024px) {
          .bg-fixed {
            background-attachment: scroll !important;
          }
          .animate-scroll-bg {
            animation-duration: 40s;
          }
          
          /* Tablet optimizations */
          .container-custom {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          /* Reduce animation intensity on tablet */
          .animate-float,
          .animate-float-delayed,
          .animate-float-slow,
          .animate-float-reverse {
            animation-duration: 8s;
          }
          
          /* Tablet-specific adjustments */
          .min-h-screen {
            min-height: 50vh;
            min-height: 50dvh; /* Dynamic viewport height for tablet */
          }
        }
        
        @media (max-width: 768px) {
          .bg-fixed {
            background-attachment: scroll !important;
          }
          .animate-scroll-bg {
            animation-duration: 40s;
          }
          
          /* Mobile optimizations */
          .container-custom {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          /* Reduce animation intensity on mobile */
          .animate-float,
          .animate-float-delayed,
          .animate-float-slow,
          .animate-float-reverse {
            animation-duration: 8s;
          }
          
          /* Mobile-specific adjustments */
          .min-h-screen {
            min-height: 100vh;
            min-height: 100dvh; /* Dynamic viewport height for mobile */
          }
        }
        
        @media (max-width: 640px) {
          /* Extra small mobile optimizations */
          .animate-fadeInUp {
            animation-duration: 0.6s;
          }
          
          .animate-counter {
            animation-duration: 0.4s;
          }
          
          /* Ultra mobile adjustments */
          .container-custom {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          
          /* Reduce floating shapes on very small screens */
          .animate-float,
          .animate-float-delayed,
          .animate-float-slow,
          .animate-float-reverse {
            animation-duration: 10s;
            opacity: 0.7;
          }
        }
        
        @media (max-width: 480px) {
          /* Extra small screens */
          .animate-fadeInUp {
            animation-duration: 0.5s;
          }
          
          .animate-counter {
            animation-duration: 0.3s;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-bg {
            animation: none;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float 6s ease-in-out infinite reverse;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        @keyframes counter {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-counter {
          animation: counter 0.6s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
