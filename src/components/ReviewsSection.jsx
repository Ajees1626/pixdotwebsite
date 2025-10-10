import React, { useState, useEffect } from 'react'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const ReviewsSection = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  
  const reviews = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Pixdot transformed our digital presence completely. Their expertise and dedication exceeded our expectations.'
    },
    {
      name: 'Michael Chen',
      company: 'StartupXYZ',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Outstanding work! The team delivered a world-class solution that helped us scale our business rapidly.'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Global Solutions',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Professional, innovative, and results-driven. Pixdot is our go-to partner for all digital initiatives.'
    },
    {
      name: 'David Thompson',
      company: 'InnovateLab',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Exceptional service and incredible attention to detail. They brought our vision to life perfectly.'
    },
    {
      name: 'Lisa Wang',
      company: 'Digital Dynamics',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The team at Pixdot is simply amazing. They delivered beyond our expectations and on time.'
    },
    {
      name: 'James Wilson',
      company: 'FutureTech',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Outstanding results and seamless collaboration. Pixdot made our digital transformation effortless.'
    },
    {
      name: 'Maria Garcia',
      company: 'CloudFirst',
      role: 'VP of Engineering',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Technical excellence and creative solutions. Pixdot delivered exactly what we needed and more.'
    },
    {
      name: 'Robert Kim',
      company: 'NextGen Solutions',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Professional, reliable, and innovative. Pixdot is the best digital partner we have ever worked with.'
    },
    {
      name: 'Jennifer Lee',
      company: 'Smart Systems',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Incredible work quality and customer service. They truly understand our business needs.'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('reviews-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, reviews.length])

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    setIsAutoPlaying(false)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
    setIsAutoPlaying(false)
  }

  const goToReview = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="reviews-section" className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-3 mb-6 animate-fadeInUp">
            <span className="text-secondary font-semibold text-sm">Client Testimonials</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6 animate-fadeInUp delay-200`}>
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto animate-fadeInUp delay-400`}>
            Hear from our satisfied clients about their experience working with Pixdot.
          </p>
        </div>

        {/* Auto-scrolling Carousel */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Review Display */}
          <div className={`relative ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl p-8 md:p-12 shadow-2xl border overflow-hidden transform hover:scale-105 transition-transform duration-500`}>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-white/10 rounded-full -translate-y-16 translate-x-16 animate-float"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full translate-y-12 -translate-x-12 animate-float delay-1000"></div>
            
            <div className="relative z-10">
              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="relative mb-4 md:mb-0 md:mr-6 animate-slideInUp">
                  <img
                    src={reviews[currentIndex].image}
                    alt={reviews[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg transform hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center animate-pulse-slow">
                    <FaQuoteLeft className="text-white text-sm" />
                  </div>
                </div>
                <div className="text-center md:text-left animate-fadeInUp delay-200">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-1`}>{reviews[currentIndex].name}</h3>
                  <p className="text-secondary font-semibold text-lg mb-1">{reviews[currentIndex].role}</p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{reviews[currentIndex].company}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex justify-center md:justify-start mb-6 animate-fadeInUp delay-400">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl mx-1 animate-bounce-slow" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              
              {/* Review Text */}
              <div className="text-center md:text-left animate-fadeInUp delay-600">
                <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed italic`}>
                  "{reviews[currentIndex].text}"
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4 animate-fadeInUp delay-800">
            <button
              onClick={prevReview}
              className={`w-12 h-12 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12`}
            >
              <FaChevronLeft className={isDarkMode ? 'text-white' : 'text-primary'} />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-150 ${
                    index === currentIndex 
                      ? 'bg-secondary scale-125 animate-pulse' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextReview}
              className={`w-12 h-12 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-12`}
            >
              <FaChevronRight className={isDarkMode ? 'text-white' : 'text-primary'} />
            </button>
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-4 animate-fadeInUp delay-1000">
            <div className={`inline-flex items-center ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm rounded-full px-4 py-2 shadow-lg transform hover:scale-105 transition-transform duration-300`}>
              <div className={`w-2 h-2 rounded-full mr-2 ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>
                {isAutoPlaying ? 'Auto-playing' : 'Paused'}
              </span>
            </div>
          </div>
        </div>

        {/* Additional Reviews Grid (3 columns) */}
        <div className={`mt-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} text-center mb-12 animate-fadeInUp`}>More Client Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-3 transform hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-primary'}`}>{review.name}</h4>
                    <p className="text-secondary text-sm font-semibold">{review.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm animate-bounce-slow" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm italic`}>"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom Animations */}
      <style jsx>{`
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
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
        
        .delay-800 {
          animation-delay: 0.8s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </section>
  )
}

export default ReviewsSection
