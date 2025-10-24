import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaUsers, FaChartLine, FaAward, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import industriesData from '../data/industriesData.json'

const IndustriesSection = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [windowWidth, setWindowWidth] = useState(0)
  
  // Convert the industries data object to an array
  const industries = Object.values(industriesData)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('industries-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const slidesPerView = getSlidesPerView()
        const maxSlide = Math.max(0, industries.length - slidesPerView)
        return prev >= maxSlide ? 0 : prev + 1
      })
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, industries.length, windowWidth])
  
  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const slidesPerView = getSlidesPerView()
      const maxSlide = Math.max(0, industries.length - slidesPerView)
      return prev >= maxSlide ? 0 : prev + 1
    })
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const slidesPerView = getSlidesPerView()
      const maxSlide = Math.max(0, industries.length - slidesPerView)
      return prev <= 0 ? maxSlide : prev - 1
    })
  }
  
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }
  
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Responsive helper functions
  const getSlidesPerView = () => {
    if (windowWidth < 640) return 1 // Mobile: 1 slide
    if (windowWidth < 768) return 1 // Small tablet: 1 slide
    if (windowWidth < 1024) return 2 // Tablet: 2 slides
    return 3 // Desktop: 3 slides
  }

  const getSlideWidth = () => {
    if (windowWidth < 640) return 'w-full' // Mobile: full width
    if (windowWidth < 768) return 'w-full' // Small tablet: full width
    if (windowWidth < 1024) return 'w-1/2' // Tablet: half width
    return 'w-1/3' // Desktop: third width
  }

  return (
    <section id="industries-section" className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <div className="container-custom">
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 animate-fadeInUp">
            <span className="text-secondary font-semibold text-xs md:text-sm">Our Expertise</span>
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-4 md:mb-6 animate-fadeInUp delay-200`}>
            Industries We <span className="text-gradient">Transform</span>
          </h2>
          <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto animate-fadeInUp delay-400 px-4`}>
            We have extensive experience across various industries, delivering innovative solutions that drive growth and success.
          </p>
        </div>

        {/* Industries Slider */}
        <div className="relative overflow-hidden mb-12 md:mb-16">
          {/* Slider Container */}
          <div className="relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / getSlidesPerView())}%)` 
              }}
            >
              {industries.map((industry, index) => (
                <div key={industry.id} className={`${getSlideWidth()} flex-shrink-0 px-2 sm:px-3 md:px-4 lg:px-6`}>
                  <Link
                    to={`/industrie/${industry.id}`}
                    className="group block"
                  >
                    <div className={`relative ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 border overflow-hidden`}>
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      {/* Industry Image */}
                      <div className="relative mb-4 sm:mb-6">
                        <div className="w-full h-32 sm:h-40 md:h-44 lg:h-48 rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={industry.image}
                            alt={industry.name}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h3 className={`text-lg sm:text-xl md:text-xl lg:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2 sm:mb-3 group-hover:text-secondary transition-colors`}>
                          {industry.name}
                        </h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-sm lg:text-base line-clamp-2 sm:line-clamp-3`}>
                          {industry.description}
                        </p>

                        
                        {/* Services Preview */}
                        <div className="mb-4 sm:mb-6">
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {industry.services.slice(0, 2).map((service, idx) => (
                              <span key={idx} className="bg-secondary/10 text-secondary px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                                {service}
                              </span>
                            ))}
                            {industry.services.length > 2 && (
                              <span className={`${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600'} px-2 sm:px-3 py-1 rounded-full text-xs font-medium`}>
                                +{industry.services.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* CTA Arrow */}
                        <div className="flex justify-between items-center">
                          <div>
                            <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Click to explore</div>
                            <div className={`text-xs sm:text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-primary'}`}>{industry.clients}</div>
                          </div>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                            <FaArrowRight className="text-secondary group-hover:text-white transition-colors text-sm sm:text-base" />
                          </div>
                        </div>

                        {/* Hover Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider Controls - Responsive */}
          <div className="flex items-center justify-center mt-4 sm:mt-6 md:mt-8">
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <button
                onClick={prevSlide}
                className={`p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-white hover:bg-gray-50 text-primary shadow-lg'
                }`}
              >
                <FaChevronLeft className="text-sm sm:text-base" />
              </button>
              
              <button
                onClick={toggleAutoPlay}
                className={`p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-white hover:bg-gray-50 text-primary shadow-lg'
                }`}
              >
                {isAutoPlaying ? <FaPause className="text-sm sm:text-base" /> : <FaPlay className="text-sm sm:text-base" />}
              </button>
              
              <button
                onClick={nextSlide}
                className={`p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-white hover:bg-gray-50 text-primary shadow-lg'
                }`}
              >
                <FaChevronRight className="text-sm sm:text-base" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white transform hover:scale-105 transition-transform duration-500">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
              <FaAward className="text-3xl sm:text-4xl text-secondary mr-0 sm:mr-4 mb-2 sm:mb-0 animate-bounce-slow" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold animate-fadeInUp">Trusted by Industry Leaders</h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 animate-fadeInUp delay-200 px-4">
              Join hundreds of companies that trust us to deliver innovative solutions for their industry challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link 
                to="/contact" 
                className="bg-white text-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center animate-fadeInUp delay-400"
              >
                Start Your Project
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/industrie" 
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center animate-fadeInUp delay-600"
              >
                View All Industries
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Animations */}
      <style>{`
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
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
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
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  )
}

export default IndustriesSection
