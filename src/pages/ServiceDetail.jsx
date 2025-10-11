import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaCheck, FaClock, FaDollarSign, FaRocket, FaMobile, FaSearch, FaPenFancy, FaBullhorn, FaShoppingCart, FaStar, FaUsers, FaAward } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import servicesData from '../data/servicesData.json'

const ServiceDetail = () => {
  const { id } = useParams()
  const { isDarkMode } = useTheme()
  
  const iconMap = {
    FaRocket,
    FaMobile,
    FaSearch,
    FaPenFancy,
    FaBullhorn,
    FaShoppingCart
  }

  const pickWhyIcon = (text) => {
    const t = String(text || '').toLowerCase()
    if (t.includes('client') || t.includes('customer')) return FaUsers
    if (t.includes('award')) return FaAward
    if (t.includes('rating') || t.includes('star')) return FaStar
    return FaStar
  }

  const service = servicesData[id]

  if (!service) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>Service Not Found</h1>
          <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>The service you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">Go Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <div className={`${service.bgColor} py-20`}>
        <div className="container-custom">
          <Link 
            to="/service" 
            className="inline-flex items-center text-primary hover:text-secondary mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                {(() => {
                  const IconComponent = iconMap[service.icon]
                  return <IconComponent className="mr-3 text-secondary" />
                })()}
                <span className="text-sm font-medium text-primary">{service.title}</span>
              </div>
              
              {service.headerTagline && (
                <p className="text-secondary font-semibold tracking-wide uppercase mb-2">{service.headerTagline}</p>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {service.title}
              </h1>
              
              {service.overview && (
                <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {service.overview}
                </p>
              )}
              <p className={`text-xl mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.longDescription}</p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center text-gray-600">
                  <FaDollarSign className="mr-2 text-secondary" />
                  <span className="font-semibold">{service.price}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2 text-secondary" />
                  <span className="font-semibold">{service.duration}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className={`w-32 h-32 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mx-auto shadow-2xl`}>
                {(() => {
                  const IconComponent = iconMap[service.icon]
                  return <IconComponent className="text-white text-6xl" />
                })()}
              </div>
              {/* Stats cards removed as requested; keeping only the static CTA and sidebar stats */}
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Features */}
              <div>
                <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-primary'}`}>What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className={`flex items-center rounded-lg p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <FaCheck className="text-secondary mr-3 flex-shrink-0" />
                      <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-primary'}`}>Our Process</h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-primary'}`}>{step.step}</h3>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-primary'}`}>Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <FaStar className="text-secondary mr-3 flex-shrink-0" />
                      <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, index) => (
                    <span key={index} className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">Let's discuss your project requirements and create a custom solution for your business.</p>
                <Link 
                  to="/contact" 
                  className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors inline-block"
                >
                  Get Free Consultation
                </Link>
              </div>

              {/* Stats */}
              <div className={`border rounded-2xl p-6 ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>Why Choose Us?</h3>
                <div className="space-y-4">
                  {(
                    service.whyChoose && service.whyChoose.length > 0
                      ? service.whyChoose
                      : ['150+ Happy Clients', 'Award-Winning Team', '4.9/5 Client Rating']
                  ).map((item, idx) => {
                    const IconC = pickWhyIcon(item)
                    return (
                      <div key={idx} className="flex items-center">
                        <IconC className="text-secondary mr-3" />
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail

