import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import servicesData from '../data/servicesData.json'

// ✅ Icons
import { IoIosPeople } from "react-icons/io";
import { CiMobile1 } from "react-icons/ci";
import { TbWorldCheck } from "react-icons/tb";
import { VscPackage } from "react-icons/vsc";
import { GiArcheryTarget } from "react-icons/gi";
import { FaLightbulb, FaRocket } from "react-icons/fa";
import { FaCheck, FaArrowRight } from "react-icons/fa6"; // ✅ Added these missing imports

const ServicesSection = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  
  // ✅ Icon map
  const iconMap = {
    IoIosPeople,
    CiMobile1,
    TbWorldCheck,
    VscPackage,
    GiArcheryTarget,
    FaLightbulb
  }

  const services = servicesData ? Object.values(servicesData) : []

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('services-section')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section
      id="services-section"
      className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'}`}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-3 mb-6 animate-fadeInUp">
            <span className="text-secondary font-semibold text-sm">Our Services</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDarkMode ? 'text-white' : 'text-primary'
            } mb-6 animate-fadeInUp delay-200`}
          >
            Solutions That <span className="text-gradient">Drive Results</span>
          </h2>
          <p
            className={`text-xl ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto animate-fadeInUp delay-400`}
          >
            We provide comprehensive solutions to help your business thrive in the modern world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaRocket
            return (
              <Link key={service.id} to={`/service/${service.id}`} className="group block">
                <div
                  className={`relative ${
                    isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                  } rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border overflow-hidden animate-slideInUp`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="text-white text-3xl" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <FaCheck className="text-white text-xs" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3
                      className={`text-2xl font-bold ${
                        isDarkMode ? 'text-white' : 'text-primary'
                      } mb-3 group-hover:text-secondary transition-colors`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      } mb-6 leading-relaxed`}
                    >
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-secondary font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* Price & Duration */}
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <div
                          className={`text-lg font-bold ${
                            isDarkMode ? 'text-white' : 'text-primary'
                          }`}
                        >
                          {service.price}
                        </div>
                        <div
                          className={`text-sm ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        >
                          {service.duration}
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                        <FaArrowRight className="text-secondary group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white transform hover:scale-105 transition-transform duration-500">
            <h3 className="text-3xl font-bold mb-4 animate-fadeInUp">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 opacity-90 animate-fadeInUp delay-200">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center animate-fadeInUp delay-400"
              >
                Get Free Consultation
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/service"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center animate-fadeInUp delay-600"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideInUp { animation: slideInUp 0.6s ease-out forwards; }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  )
}

export default ServicesSection
