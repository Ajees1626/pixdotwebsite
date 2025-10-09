import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const AboutPreviewSection = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about-preview-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])
  
  return (
    <section id="about-preview-section" className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6 animate-fadeInUp`}>
              About <span className="text-gradient">Pixdot</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed animate-fadeInUp delay-200`}>
              We are a team of passionate innovators dedicated to transforming businesses 
              through cutting-edge digital solutions and exceptional user experiences.
            </p>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed animate-fadeInUp delay-400`}>
              With over 500 successful projects and 150+ happy clients, we have established 
              ourselves as a trusted partner for digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="btn-primary transform hover:scale-105 transition-transform duration-300 animate-fadeInUp delay-600">
                Learn More About Us
              </Link>
              <Link to="/contact" className="btn-outline transform hover:scale-105 transition-transform duration-300 animate-fadeInUp delay-800">
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-secondary rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-6 animate-fadeInUp">Why Choose Pixdot?</h3>
              <div className="space-y-4">
                <div className="flex items-center animate-slideInUp" style={{ animationDelay: '0.6s' }}>
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 transform hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Expert team with 10+ years experience</span>
                </div>
                <div className="flex items-center animate-slideInUp" style={{ animationDelay: '0.8s' }}>
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 transform hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Cutting-edge technology stack</span>
                </div>
                <div className="flex items-center animate-slideInUp" style={{ animationDelay: '1s' }}>
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 transform hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>24/7 support and maintenance</span>
                </div>
                <div className="flex items-center animate-slideInUp" style={{ animationDelay: '1.2s' }}>
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 transform hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Proven track record of success</span>
                </div>
              </div>
            </div>
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
      `}</style>
    </section>
  )
}

export default AboutPreviewSection

