import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt, FaChartLine, FaUsers, FaClock, FaDollarSign, FaStar, FaEye } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import caseStudiesData from '../data/caseStudiesData.json'

const CaseStudyDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const { isDarkMode } = useTheme()

  // Find the case study
  const caseStudy = Object.values(caseStudiesData)
    .flatMap(category => category.caseStudies)
    .find(cs => cs.id === id)

  // Get all case studies for navigation
  const allCaseStudies = Object.values(caseStudiesData)
    .flatMap(category => category.caseStudies.map(cs => ({
      ...cs,
      category: category.category
    })))

  const currentIndex = allCaseStudies.findIndex(cs => cs.id === id)
  const previousCase = currentIndex > 0 ? allCaseStudies[currentIndex - 1] : null
  const nextCase = currentIndex < allCaseStudies.length - 1 ? allCaseStudies[currentIndex + 1] : null

  if (!caseStudy) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>Case Study Not Found</h1>
          <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>The case study you're looking for doesn't exist.</p>
          <Link to="/casestudy" className="btn-primary">Back to Case Studies</Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % caseStudy.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + caseStudy.images.length) % caseStudy.images.length)
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Header */}
      <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gradient-primary'} text-white py-20`}>
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/casestudy" 
              className="inline-flex items-center text-white hover:text-accent transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Case Studies
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium text-white">{caseStudy.category}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {caseStudy.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center text-gray-200">
                  <FaClock className="mr-2 text-accent" />
                  <span className="font-semibold">{caseStudy.duration}</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <FaUsers className="mr-2 text-accent" />
                  <span className="font-semibold">{caseStudy.team}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative">
                <img
                  src={caseStudy.images[currentImageIndex]}
                  alt={caseStudy.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl cursor-pointer"
                  onClick={() => setIsImageModalOpen(true)}
                />
                
                {caseStudy.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-2">
                    {caseStudy.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Details */}
      <div className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Challenge & Solution */}
              <div>
                <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
                  Challenge & Solution
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
                      The Challenge
                    </h3>
                    <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {caseStudy.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
                      Our Solution
                    </h3>
                    <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
                  Results & Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className={`rounded-lg p-6 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'}`}>
                          {result.metric}
                        </h4>
                        <span className="text-accent font-bold">{result.improvement}</span>
                      </div>
                      <div className={`flex items-center justify-between text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <span>Before: {result.before}</span>
                        <FaChartLine className="text-secondary" />
                        <span>After: {result.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              <div>
                <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {caseStudy.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative group cursor-pointer"
                      onClick={() => {
                        setCurrentImageIndex(index)
                        setIsImageModalOpen(true)
                      }}
                    >
                      <img
                        src={image}
                        alt={`${caseStudy.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        {index === 2 ? (
                          <span className="text-white font-semibold text-lg">View More</span>
                        ) : (
                          <FaEye className="text-white text-2xl" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className={`rounded-2xl p-6 ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
                  Project Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaUsers className="mr-3 text-secondary" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Team: {caseStudy.team}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-3 text-secondary" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Duration: {caseStudy.duration}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaStar className="mr-3 text-secondary" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Industry: {caseStudy.industry}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Technologies */}
              <div className={`rounded-2xl p-6 ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode 
                        ? 'bg-gray-600 text-gray-300' 
                        : 'bg-secondary text-white'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className={`rounded-2xl p-6 text-white ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-gray-700 to-gray-600' 
                  : 'bg-gradient-to-r from-primary to-secondary'
              }`}>
                <h3 className="text-xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-white/90 mb-6">Let's discuss how we can help you achieve similar results.</p>
                <Link 
                  to="/contact" 
                  className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors inline-block w-full text-center"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {previousCase ? (
              <Link
                to={`/casestudy/${previousCase.id}`}
                className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-lg`}
              >
                <FaChevronLeft className="mr-2" />
                <div className="text-left">
                  <div className="text-sm text-gray-500">Previous</div>
                  <div className="font-semibold">{previousCase.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            
            {nextCase ? (
              <Link
                to={`/casestudy/${nextCase.id}`}
                className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-lg`}
              >
                <div className="text-right">
                  <div className="text-sm text-gray-500">Next</div>
                  <div className="font-semibold">{nextCase.title}</div>
                </div>
                <FaChevronRight className="ml-2" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors z-10"
            >
              <FaTimes />
            </button>
            
            <img
              src={caseStudy.images[currentImageIndex]}
              alt={caseStudy.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {caseStudy.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  <FaChevronRight />
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-2">
                    {caseStudy.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CaseStudyDetail
