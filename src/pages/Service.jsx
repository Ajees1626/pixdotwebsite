import React from 'react'
import { FaRocket, FaMobile, FaSearch, FaPenFancy, FaBullhorn, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import servicesData from '../data/servicesData.json'

const Service = () => {
  const { isDarkMode } = useTheme()
  const iconMap = {
    FaRocket,
    FaMobile,
    FaSearch,
    FaPenFancy,
    FaBullhorn,
    FaShoppingCart
  }

  const services = Object.values(servicesData)

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements.'
    },
    {
      step: '02',
      title: 'Design & Strategy',
      description: 'Our team creates detailed designs and strategies tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using cutting-edge technologies and rigorous testing protocols.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We launch your project and provide ongoing support to ensure continued success.'
    }
  ]

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Comprehensive digital solutions designed to accelerate your business growth 
              and enhance your online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              From web development to digital marketing, we provide end-to-end solutions 
              to help your business thrive in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon]
              return (
                <Link
                  key={service.id}
                  to={`/service/${service.id}`}
                  className="group block"
                >
                  <div className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border group-hover:border-secondary ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'}`}>
                    <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-4 group-hover:text-secondary transition-colors ${isDarkMode ? 'text-white' : 'text-primary'}`}>{service.title}</h3>
                    <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-secondary font-medium">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                    
                    <div className={`border-t pt-4 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Starting Price</span>
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'}`}>{service.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Duration</span>
                        <span className="font-semibold text-secondary">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-secondary transform translate-x-4"></div>
                  )}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>{step.title}</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="bg-gradient-secondary rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project requirements and create a custom solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Start Your Project
              </a>
              <a href="/casestudy" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service

