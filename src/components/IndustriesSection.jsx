import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaUsers, FaChartLine, FaAward } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import industriesData from '../data/industriesData.json'

const IndustriesSection = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  
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

  return (
    <section id="industries-section" className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <div className="container-custom">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-3 mb-6 animate-fadeInUp">
            <span className="text-secondary font-semibold text-sm">Our Expertise</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6 animate-fadeInUp delay-200`}>
            Industries We <span className="text-gradient">Transform</span>
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto animate-fadeInUp delay-400`}>
            We have extensive experience across various industries, delivering innovative solutions that drive growth and success.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Link
              key={industry.id}
              to={`/industrie/${industry.id}`}
              className="group block animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border overflow-hidden`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Industry Image */}
                <div className="relative mb-6">
                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
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
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-3 group-hover:text-secondary transition-colors`}>
                    {industry.name}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-3 transform hover:scale-105 transition-transform duration-300`}>
                      <div className="flex items-center mb-1">
                        <FaChartLine className="text-secondary mr-2 text-sm animate-pulse" />
                        <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} font-medium`}>Projects</span>
                      </div>
                      <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-primary'} animate-counter`}>{industry.projects}</div>
                    </div>
                    <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-3 transform hover:scale-105 transition-transform duration-300`}>
                      <div className="flex items-center mb-1">
                        <FaUsers className="text-secondary mr-2 text-sm animate-pulse" />
                        <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} font-medium`}>Growth</span>
                      </div>
                      <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-primary'} animate-counter`}>{industry.growth}</div>
                    </div>
                  </div>

                  {/* Services Preview */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {industry.services.slice(0, 2).map((service, idx) => (
                        <span key={idx} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                          {service}
                        </span>
                      ))}
                      {industry.services.length > 2 && (
                        <span className={`${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600'} px-3 py-1 rounded-full text-xs font-medium`}>
                          +{industry.services.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Arrow */}
                  <div className="flex justify-between items-center">
                    <div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Click to explore</div>
                      <div className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-primary'}`}>{industry.clients}</div>
                    </div>
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                      <FaArrowRight className="text-secondary group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white transform hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-center mb-6">
              <FaAward className="text-4xl text-secondary mr-4 animate-bounce-slow" />
              <h3 className="text-3xl font-bold animate-fadeInUp">Trusted by Industry Leaders</h3>
            </div>
            <p className="text-xl mb-8 opacity-90 animate-fadeInUp delay-200">
              Join hundreds of companies that trust us to deliver innovative solutions for their industry challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-primary font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center animate-fadeInUp delay-400"
              >
                Start Your Project
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/industrie" 
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center animate-fadeInUp delay-600"
              >
                View All Industries
              </Link>
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
