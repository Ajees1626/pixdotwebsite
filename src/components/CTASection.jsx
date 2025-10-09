import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const CTASection = () => {
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

    const element = document.getElementById('cta-section')
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
    <section id="cta-section" className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container-custom">
        <div className={`${isDarkMode ? 'bg-gradient-to-br from-primary via-secondary to-accent' : 'bg-gradient-to-br from-primary via-secondary to-accent'} rounded-3xl p-8 md:p-12 text-center text-white transform hover:scale-105 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeInUp">
            Ready to Transform Your Business?
          </h2>
          <p className={`text-xl mb-8 ${isDarkMode ? 'opacity-90' : 'opacity-90'} animate-fadeInUp delay-200`}>
            Let's discuss how we can help you achieve your digital goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className={`${isDarkMode ? 'bg-white text-primary hover:bg-gray-100' : 'bg-white text-primary hover:bg-gray-100'} font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp delay-400`}>
              Get Started Today
            </Link>
            <Link to="/casestudy" className={`${isDarkMode ? 'border-white text-white hover:bg-white hover:text-primary' : 'border-white text-white hover:bg-white hover:text-primary'} bg-transparent font-semibold py-3 px-6 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 animate-fadeInUp delay-600`}>
              View Our Work
            </Link>
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

export default CTASection

