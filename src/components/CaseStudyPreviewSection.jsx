import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const CaseStudyPreviewSection = () => {
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

    const element = document.getElementById('case-study-preview-section')
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
    <section id="case-study-preview-section" className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6 animate-fadeInUp`}>
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto animate-fadeInUp delay-200`}>
            Real-world results from our recent projects and client transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slideInUp`} style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mr-4 transform hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'}`}>E-commerce Platform</h3>
                <p className="text-secondary">Fashion Forward</p>
              </div>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Complete platform redesign with modern UI/UX, mobile optimization, and advanced analytics.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-accent animate-counter">+128%</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Conversion Rate</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-accent animate-counter">+67%</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Order Value</div>
              </div>
            </div>
          </div>

          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slideInUp`} style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mr-4 transform hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'}`}>Healthcare System</h3>
                <p className="text-secondary">MediCare Plus</p>
              </div>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Comprehensive digital health platform with patient portals and telemedicine capabilities.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-accent animate-counter">-60%</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Wait Time</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-accent animate-counter">+42%</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Efficiency</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center mt-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link to="/casestudy" className="btn-primary transform hover:scale-105 transition-transform duration-300 animate-fadeInUp">
            View All Case Studies
          </Link>
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
        
        .delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  )
}

export default CaseStudyPreviewSection

