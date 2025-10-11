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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5"></div>
        
        {/* Subtle floating shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/10 rounded-full animate-pulse animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full animate-bounce animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-secondary/15 rounded-full animate-pulse animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/10 rounded-full animate-bounce animate-float-reverse"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          

          {/* left Content - Standing Lady PNG Image */}
          <div className={`relative h-full flex items-end transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Circular Gradient Background */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-secondary to-primary rounded-full opacity-30 animate-pulse"></div>
            </div>
            
            {/* Person Image Container */}
            <div className="relative z-10 flex justify-center items-center">
              <div className="relative">
                {/* PNG Image - Standing Lady */}
                <div className="w-full h-full rounded-2xl relative overflow-hidden bg-transparent flex items-center justify-center">
                  <img 
                    src="/hero.png" 
                    alt="Professional Business Lady"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {/* Foreground bottom-to-top overlay (shadow) */}
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/50 via-white/20 to-transparent"></div>
                </div>
                
                {/* Lightbulb Icon */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <FaLightbulb className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* right Content */}
          <div className={`text-primary transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
           
            
            {/* Main Heading */}
            <h1 className={`text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block animate-fadeInUp">
                We Don't Just Build <span className="text-secondary">Brands</span>
              </span>
              <span className="block text-primary animate-fadeInUp delay-500">
                We Build <span className="text-secondary">Legacies</span> 
              </span>
            </h1>
            
            
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
              >
                <span>Get Free Consultation</span>
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/service" 
                className="group bg-white border-2 border-secondary hover:bg-secondary hover:text-white text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <span>Our Services</span>
              </Link>
            </div>
            
            {/* Stats Grid */}
            <div className={`grid grid-cols-3 gap-8 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center group animate-counter">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center group animate-counter delay-200">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
              <div className="text-center group animate-counter delay-400">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-500 text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      
      {/* Custom CSS Animations */}
      <style jsx>{`
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
        
        @media (max-width: 768px) {
          .bg-fixed {
            background-attachment: scroll !important;
          }
          .animate-scroll-bg {
            animation-duration: 40s;
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
