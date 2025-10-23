import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaShoppingCart, FaUtensils, FaBasketballBall, FaCar, FaArrowLeft, FaRocket, FaUsers, FaChartLine, FaCheck, FaLock, FaAward } from "react-icons/fa";
import { GiHospitalCross, GiForkKnifeSpoon, GiAppleSeeds, GiTempleDoor, GiAmpleDress } from "react-icons/gi";
import { LiaSchoolSolid } from "react-icons/lia";
import { CiLaptop } from "react-icons/ci";
import { ImTruck } from "react-icons/im";
import { GiOpenedFoodCan } from "react-icons/gi";
import { IoBagHandle } from "react-icons/io5";
import { IoMdMedal } from "react-icons/io";
import { MdFastfood, MdRealEstateAgent, MdDryCleaning, MdTravelExplore } from "react-icons/md";
import { RiBrushAiFill } from "react-icons/ri";
import { PiBowlFoodFill } from "react-icons/pi";
import { SiBlockchaindotcom } from "react-icons/si";
import { useTheme } from '../contexts/ThemeContext'
import industriesData from '../data/industriesData.json'

const IndustryDetail = () => {
  const { id } = useParams()
  const { isDarkMode } = useTheme()
  
  const formatMetric = (value) => {
    const s = String(value || '')
    const match = s.match(/[+]?\d+\+?%?/)
    return match ? match[0] : s
  }
  
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

  const industry = industriesData[id]

  if (!industry) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>Industry Not Found</h1>
          <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>The industry you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">Go Home</Link>
        </div>
      </div>
    )
  }

  // Get the icon component dynamically
  const IconComponent = iconMap[industry.icon]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <div className={`${industry.bgColor} py-20`}>
        <div className="container-custom">
          <Link 
            to="/industrie" 
            className="inline-flex items-center text-primary hover:text-secondary mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Industries
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <IconComponent className="mr-3 text-secondary" />
                <span className="text-sm font-medium text-primary">{industry.name}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {industry.name} Solutions
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {industry.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <FaRocket className="mr-2 text-secondary" />
                  <span className="font-bold text-xl">{formatMetric(industry.projects)}</span>
                </div>
                <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <FaUsers className="mr-2 text-secondary" />
                  <span className="font-bold text-xl">{formatMetric(industry.clients)}</span>
                </div>
                <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <FaChartLine className="mr-2 text-secondary" />
                  <span className="font-bold text-xl">{formatMetric(industry.growth)}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className={`w-32 h-32 bg-gradient-to-br ${industry.color} rounded-3xl flex items-center justify-center mx-auto shadow-2xl`}>
                <IconComponent className="text-white text-6xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Details */}
      <div className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Services */}
              <div>
                <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-8`}>Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(industry.services || []).map((service, index) => (
                    <div key={index} className={`flex items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                      <FaCheck className="text-secondary mr-3 flex-shrink-0" />
                      <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-8`}>Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(industry.features || []).map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <FaLock className="text-secondary mr-3 flex-shrink-0" />
                      <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-8`}>Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(industry.benefits || []).map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <FaAward className="text-secondary mr-3 flex-shrink-0" />
                      <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Studies */}
              <div>
                <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-8`}>Success Stories</h2>
                <div className="space-y-6">
                  {(industry.caseStudies || []).map((study, index) => (
                    <div key={index} className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-2xl p-6`}>
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2`}>{study.title}</h3>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{study.description}</p>
                      <div className="flex items-center">
                        <FaChartLine className="text-secondary mr-2" />
                        <span className="text-secondary font-bold">{study.results}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
             
              
              {/* CTA */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Transform Your {industry.name} Business?</h3>
                <p className="text-white/90 mb-6">Let's discuss how our solutions can help your organization succeed.</p>
                <Link 
                  to="/contact" 
                  className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors inline-block"
                >
                  Get Free Consultation
                </Link>
              </div>

              {/* Stats */}
              <div className={`${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} border rounded-2xl p-6`}>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-4`}>Industry Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaRocket className="text-secondary mr-3" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{industry.projects} </span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="text-secondary mr-3" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{industry.clients}</span>
                  </div>
                  <div className="flex items-center">
                    <FaChartLine className="text-secondary mr-3" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{industry.growth} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndustryDetail
