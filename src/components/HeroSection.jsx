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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background Images */}
      <div className="absolute inset-0">
        {/* Background Image 1 - Hero with Scrolling */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed animate-scroll-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop')`
          }}
        >
          {/* Dark Overlay Only on Left Side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-pulse animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/30 rounded-full animate-bounce animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/25 rounded-full animate-pulse animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/20 rounded-full animate-bounce animate-float-reverse"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`text-white dark:text-gray-100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
           
            
            {/* Main Heading */}
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block animate-fadeInUp">We Don't Just Build  Brands,</span>
              <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent animate-fadeInUp delay-500">
                We Build Legacies.
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              We create exceptional digital experiences that drive growth, 
              innovation, and success for businesses worldwide.
            </p>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center animate-pulse-slow"
              >
                <span>Start Your Journey</span>
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center animate-bounce-slow">
                <FaPlay className="mr-3 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </button>
            </div>
            
            {/* Stats Grid */}
            <div className={`grid grid-cols-3 gap-8 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center group animate-counter">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-gray-300 dark:text-gray-400 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center group animate-counter delay-200">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-sm text-gray-300 dark:text-gray-400 font-medium">Success Rate</div>
              </div>
              <div className="text-center group animate-counter delay-400">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm text-gray-300 dark:text-gray-400 font-medium">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Background Image with Shadow Path */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Shadow Path from Left */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent transform -skew-x-12 -translate-x-8"></div>
            
            {/* Background Image Container */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center')`
                }}
              >
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/30 to-secondary/60 dark:from-gray-900/40 dark:via-gray-800/50 dark:to-gray-700/70"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                {/* Top Content */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                      <span className="text-white font-bold text-xl">P</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Pixdot Legacy</h3>
                      <p className="text-gray-200 dark:text-gray-300 text-sm">Building Tomorrow</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <FaChartLine className="text-accent text-xl" />
                      <span className="text-green-400 text-sm font-semibold">+98%</span>
                    </div>
                    <div className="text-white font-bold">Success Rate</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <FaUsers className="text-secondary text-xl" />
                      <span className="text-green-400 text-sm font-semibold">150+</span>
                    </div>
                    <div className="text-white font-bold">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
              <FaAward className="text-white text-2xl" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
              <FaGlobe className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 dark:text-gray-400 text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 dark:border-gray-500/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white dark:bg-gray-300 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"></div>
      
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
