import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUtensils, FaBasketballBall, FaCar } from "react-icons/fa";
import { GiHospitalCross, GiForkKnifeSpoon, GiAppleSeeds, GiTempleDoor, GiAmpleDress } from "react-icons/gi";
import { ImTruck } from "react-icons/im";
import { GiOpenedFoodCan } from "react-icons/gi";
import { LiaSchoolSolid } from "react-icons/lia";
import { CiLaptop } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { IoMdMedal } from "react-icons/io";
import { MdFastfood, MdRealEstateAgent, MdDryCleaning, MdTravelExplore } from "react-icons/md";
import { RiBrushAiFill } from "react-icons/ri";
import { PiBowlFoodFill } from "react-icons/pi";
import { SiBlockchaindotcom } from "react-icons/si";
import industriesData from '../data/industriesData.json'
import { useTheme } from '../contexts/ThemeContext'

const Industrie = () => {
  const { isDarkMode } = useTheme()
  
  // Convert the industries data object to an array
  const industries = Object.values(industriesData)
  
  // Icon mapping for dynamic icon rendering
  const iconMap = {
    FaShoppingCart,
    GiOpenedFoodCan,
    FaBasketballBall, 
    FaCar, 
    ImTruck,
    GiHospitalCross,
    GiForkKnifeSpoon,
    GiAppleSeeds,
    GiTempleDoor,
    GiAmpleDress,
    LiaSchoolSolid,
    CiLaptop,
    IoBagHandle,
    IoMdMedal,
    MdFastfood,
    MdRealEstateAgent,
    MdDryCleaning,
    MdTravelExplore,
    RiBrushAiFill,
    PiBowlFoodFill,
    SiBlockchaindotcom
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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {industries.map((industry, index) => {
              const IconComponent = iconMap[industry.icon]
              return (
                <Link
                  key={industry.id}
                  to={`/industrie/${industry.id}`}
                  className="group block"
                >
                  <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border group-hover:border-secondary`}>
                    <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6`}>
                      <IconComponent className="text-white text-xl md:text-2xl" />
                    </div>
                    
                    <h3 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-3 md:mb-4 group-hover:text-secondary transition-colors`}>{industry.name}</h3>
                    <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 md:mb-6`}>{industry.description}</p>
                    
                    <div className="mb-4 md:mb-6">
                      <h4 className={`font-semibold text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-primary'} mb-2 md:mb-3`}>Our Solutions:</h4>
                      <ul className="space-y-1 md:space-y-2">
                        {industry.services.slice(0, 4).map((service, idx) => (
                          <li key={idx} className={`flex items-center text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary rounded-full mr-2 md:mr-3"></div>
                            {service}
                          </li>
                        ))}
                        {industry.services.length > 4 && (
                          <li className={`flex items-center text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full mr-2 md:mr-3"></div>
                            +{industry.services.length - 4} more solutions
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 md:p-4`}>
                      <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'}`}>Projects:</span> {industry.projects} • <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'}`}>Growth:</span> {industry.growth}
                      </p>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="mt-3 md:mt-4 flex items-center text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs md:text-sm font-semibold">View Details</span>
                      <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-lg text-gray-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      

      {/* CTA Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="bg-gradient-to-tr from-primary to-secondary rounded-3xl p-6 md:p-8 lg:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90">
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

