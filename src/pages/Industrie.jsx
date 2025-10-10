import React from 'react'
import { Link } from 'react-router-dom'
import { FaHospital, FaUniversity, FaShoppingCart, FaGraduationCap, FaHome, FaIndustry } from 'react-icons/fa'
import industriesData from '../data/industriesData.json'
import { useTheme } from '../contexts/ThemeContext'

const Industrie = () => {
  const { isDarkMode } = useTheme()
  
  // Convert the industries data object to an array
  const industries = Object.values(industriesData)
  
  // Icon mapping for dynamic icon rendering
  const iconMap = {
    FaHospital,
    FaUniversity,
    FaShoppingCart,
    FaGraduationCap,
    FaHome,
    FaIndustry
  }

  const stats = [
    { number: `${industries.length}`, label: 'Industries Served' },
    { number: '200+', label: 'Industry Projects' },
    { number: '95%', label: 'Client Retention' },
    { number: '50+', label: 'Expert Consultants' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-tr from-primary to-secondary'} text-white`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industry <span className="text-secondary">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Specialized digital solutions tailored to meet the unique challenges 
              and opportunities of your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Our deep industry expertise allows us to deliver solutions that address 
              specific challenges and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = iconMap[industry.icon]
              return (
                <Link
                  key={industry.id}
                  to={`/industrie/${industry.id}`}
                  className="group block"
                >
                  <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border group-hover:border-secondary`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-4 group-hover:text-secondary transition-colors`}>{industry.name}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>{industry.description}</p>
                    
                    <div className="mb-6">
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'} mb-3`}>Our Solutions:</h4>
                      <ul className="space-y-2">
                        {industry.services.slice(0, 4).map((service, idx) => (
                          <li key={idx} className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                            {service}
                          </li>
                        ))}
                        {industry.services.length > 4 && (
                          <li className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                            +{industry.services.length - 4} more solutions
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'}`}>Projects:</span> {industry.projects} • <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'}`}>Growth:</span> {industry.growth}
                      </p>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="mt-4 flex items-center text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold">View Details</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-tr from-primary to-secondary'} text-white`}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry <span className="text-secondary">Impact</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our solutions have made a significant impact across various industries worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
                Deep Industry <span className="text-gradient">Expertise</span>
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                Our team includes industry specialists who understand the unique challenges, 
                regulations, and opportunities in each sector we serve.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
                We don't just build technology – we create solutions that address real 
                industry pain points and drive meaningful business outcomes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Industry-specific compliance and regulations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Proven methodologies and best practices</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Scalable and future-proof solutions</span>
                </div>
              </div>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg`}>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>Why Choose Industry Specialists?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2`}>Domain Knowledge</h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Deep understanding of industry-specific challenges and opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2`}>Compliance Expertise</h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Knowledge of industry regulations and compliance requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2`}>Proven Results</h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Track record of successful implementations in your industry.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="bg-gradient-to-tr from-primary to-secondary rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our industry expertise can help solve your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className={`btn-primary ${isDarkMode ? 'bg-white text-primary hover:bg-gray-100' : 'bg-white text-primary hover:bg-gray-100'}`}>
                Get Industry Consultation
              </a>
              <a href="/casestudy" className={`btn-outline ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-primary' : 'border-white text-white hover:bg-white hover:text-primary'}`}>
                View Industry Cases
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Industrie

