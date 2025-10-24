import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaSearch, 
  FaChess, 
  FaEye, 
  FaUsers,
  FaShoppingCart,
  FaUtensils,
  FaBasketballBall,
  FaCar
} from "react-icons/fa";

import { IoIosCompass, IoIosSettings } from "react-icons/io";
import { IoFunnel, IoPush } from "react-icons/io5";

import { VscLayoutPanelJustify } from "react-icons/vsc";
import { TbTypography } from "react-icons/tb";
import { GiGrowth, GiSpiderWeb, GiPublicSpeaker, GiHospitalCross, GiForkKnifeSpoon, GiAppleSeeds, GiTempleDoor, GiAmpleDress, GiOpenedFoodCan } from "react-icons/gi";
import { HiSpeakerphone } from "react-icons/hi";
import { MdOutlineSocialDistance, MdModeComment } from "react-icons/md";
import { RiUserCommunityFill } from "react-icons/ri";
import { CgMediaPodcast } from "react-icons/cg";
import { ImTruck } from "react-icons/im";
import { LiaSchoolSolid } from "react-icons/lia";
import { CiLaptop } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { IoMdMedal } from "react-icons/io";
import { MdFastfood, MdRealEstateAgent, MdDryCleaning, MdTravelExplore } from "react-icons/md";
import { RiBrushAiFill } from "react-icons/ri";
import { PiBowlFoodFill } from "react-icons/pi";
import { SiBlockchaindotcom } from "react-icons/si";

import { useTheme } from '../contexts/ThemeContext'
import industriesData from '../data/industriesData.json'
import solutionsData from '../data/solutionsData.json'

const Solutions = () => {
  const { isDarkMode } = useTheme()
  
  // Convert the industries data object to an array
  const industries = Object.values(industriesData)
  
  // Icon mapping for dynamic icon rendering
  const iconMap = {
    // Industry icons
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
    SiBlockchaindotcom,
    // Solution icons
    FaChess,
    FaEye,
    IoIosCompass,
    VscLayoutPanelJustify,
    TbTypography,
    GiGrowth,
    FaSearch,
    HiSpeakerphone,
    MdOutlineSocialDistance,
    IoIosSettings,
    GiSpiderWeb,
    IoFunnel,
    FaUsers,
    RiUserCommunityFill,
    MdModeComment,
    GiPublicSpeaker,
    CgMediaPodcast,
    IoPush
  }

  // Convert the solutions data object to an array
  const solutions = Object.values(solutionsData)

  const categories = ['All', 'Strategy', 'Communication', 'Design', 'Research', 'Marketing', 'Branding', 'Consulting','Automation','Development']

  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredSolutions = selectedCategory === 'All' 
    ? solutions 
    : solutions.filter(solution => solution.category === selectedCategory)

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems, processes, and requirements to understand your needs.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a customized solution architecture tailored to your business goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution using agile methodologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Comprehensive testing ensures quality, followed by a smooth launch and go-live support.'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization to ensure peak performance and ROI.'
    }
  ]

  return (
    <div id="solutions-page" className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Comprehensive technology solutions designed to solve complex business 
              challenges and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>


      {/* Solutions Grid */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
              Our <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Solutions</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {selectedCategory === 'All' 
                ? 'Explore our comprehensive range of digital solutions designed to address every aspect of your business needs.'
                : `Specialized ${selectedCategory.toLowerCase()} solutions tailored to your specific requirements.`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {filteredSolutions.map((solution, index) => {
              const IconComponent = iconMap[solution.icon] || FaUsers // Fallback icon
              if (!iconMap[solution.icon]) {
                console.warn(`Icon not found: ${solution.icon} for solution: ${solution.title}`)
              }
              return (
                <div
                  key={index}
                  className={`rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-white border-gray-200'} hover:shadow-2xl`}
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 transform hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="text-white text-xl md:text-2xl" />
                  </div>
                
                <div className="mb-4">
                  <span className={`inline-block ${isDarkMode ? 'bg-secondary text-white' : 'bg-gray-200 text-primary'} text-sm font-semibold px-3 py-1 rounded-full`}>
                    {solution.category}
                  </span>
                </div>
                
                <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>{solution.title}</h3>
                <p className={`mb-4 md:mb-6 text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{solution.description}</p>
                
                <div className="mb-4 md:mb-6">
                  <h4 className={`font-semibold mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-primary'}`}>Key Features:</h4>
                  <ul className="space-y-1 md:space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary rounded-full mr-2 md:mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`rounded-lg p-3 md:p-4 ${isDarkMode ? 'bg-gray-600/50' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-500' : 'border-gray-200'}`}>
                  <h4 className={`font-semibold mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-primary'}`}>Benefits:</h4>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className={`flex items-center text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <div className={`w-1 h-1 md:w-1.5 md:h-1.5 ${isDarkMode ? 'bg-secondary' : 'bg-secondary'} rounded-full mr-1 md:mr-2`}></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
              Our <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Process</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A proven methodology that ensures successful solution delivery and maximum ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className={`text-center ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-2xl p-6 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className={`hidden lg:block absolute top-10 left-full w-full h-0.5 ${isDarkMode ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gradient-to-r from-primary to-secondary'} transform translate-x-4`}></div>
                  )}
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'}`}>{step.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
              Industries We <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Serve</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our solutions are tailored to meet the unique challenges and opportunities across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.slice(0, 9).map((industry, index) => {
              const IconComponent = iconMap[industry.icon]
              return (
                <Link
                  key={industry.id}
                  to={`/industrie/${industry.id}`}
                  className="group block"
                >
                  <div className={`${isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-white border-gray-200'} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border group-hover:border-secondary`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-3 group-hover:text-secondary transition-colors`}>{industry.name}</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm`}>{industry.description}</p>
                  
                  <div className={`${isDarkMode ? 'bg-gray-600/50' : 'bg-gray-50'} rounded-lg p-3`}>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'}`}>Projects:</span> {industry.projects} • <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'}`}>Growth:</span> {industry.growth}
                    </p>
                  </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
              Technology <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Stack</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We use cutting-edge technologies and proven frameworks to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'CorelDRAW', 'Figma', 'Coolors',
              'Adobe Dimension', 'Mockup Studio', 'Placeit', 'Canva', 'React.js', 'Next.js',
              'Vue.js', 'WordPress', 'Webflow', 'Node.js', 'Express', 'MongoDB',
              'MySQL', 'PostgreSQL', 'AWS', 'Vercel', 'Netlify', 'Tailwind CSS',
              'Bootstrap', 'Google Analytics', 'SEO Tools', 'Flutter', 'React Native', 'Swift',
              'Kotlin', 'Firebase', 'AWS Amplify', 'Python', 'Postman', 'App Store',
              'Play Console', 'Lightroom', 'Premiere Pro', 'After Effects', 'Notion', 'ClickUp',
              'ChatGPT', 'Copy.ai', 'Meta Business Suite', 'LinkedIn Analytics', 'Squarespace'
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className={`rounded-lg p-4 mb-3 transition-all duration-200 border ${isDarkMode ? 'bg-gray-700/50 border-gray-600 hover:bg-gray-600 hover:border-gray-500' : 'bg-gray-100 border-gray-200 hover:bg-gray-200 hover:border-gray-300'} transform hover:scale-105`}>
                  <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'}`}>{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Implement Your Solution?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss your requirements and create a custom solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className={`${isDarkMode ? 'bg-white text-primary hover:bg-gray-100' : 'bg-white text-primary hover:bg-gray-100'} font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105`}>
                Start Your Project
              </a>
              <a href="/casestudy" className={`${isDarkMode ? 'border-white text-white hover:bg-white hover:text-primary' : 'border-white text-white hover:bg-white hover:text-primary'} bg-transparent font-semibold py-3 px-6 rounded-lg border-2 transition-all duration-300 transform hover:scale-105`}>
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Solutions

