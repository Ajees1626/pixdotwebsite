import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaExternalLinkAlt, FaChartLine, FaUsers, FaClock, FaDollarSign, FaChevronLeft, FaChevronRight, FaTimes, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import caseStudiesData from '../data/caseStudiesData.json'

const CaseStudy = () => {
  const { isDarkMode } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCase, setSelectedCase] = useState(null)
  const itemsPerPage = 9

  // Get all case studies from all categories
  const allCaseStudies = Object.values(caseStudiesData).flatMap(category => 
    category.caseStudies.map(caseStudy => ({
      ...caseStudy,
      category: category.category
    }))
  )

  // Filter case studies by category
  const filteredCaseStudies = selectedCategory === 'all' 
    ? allCaseStudies 
    : allCaseStudies.filter(caseStudy => caseStudy.category === caseStudiesData[selectedCategory]?.category)

  // Pagination
  const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCaseStudies = filteredCaseStudies.slice(startIndex, endIndex)

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory])

  const categories = [
    { key: 'all', name: 'All Cases', count: allCaseStudies.length },
    { key: 'logo', name: 'Logo Design', count: caseStudiesData.logo?.caseStudies.length || 0 },
    { key: 'design', name: 'UI/UX Design', count: caseStudiesData.design?.caseStudies.length || 0 },
    { key: 'poster', name: 'Poster Design', count: caseStudiesData.poster?.caseStudies.length || 0 },
    { key: 'branding', name: 'Brand Identity', count: caseStudiesData.branding?.caseStudies.length || 0 },
    { key: 'website', name: 'Website Development', count: caseStudiesData.website?.caseStudies.length || 0 }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Hero Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Case <span className="text-white">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Real-world success stories showcasing how we've helped businesses 
              transform and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className={isDarkMode ? 'text-white' : 'text-primary'}>Filter by Category</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg transform scale-105'
                    : isDarkMode
                    ? 'bg-gray-700 text-gray-300 border-2 border-gray-600 hover:border-secondary hover:text-secondary hover:shadow-md'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-secondary hover:text-secondary hover:shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Explore our portfolio of successful projects across various industries 
              and see the measurable impact we've delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentCaseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border overflow-hidden cursor-pointer group ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-secondary' 
                    : 'bg-white border-gray-100 hover:border-secondary'
                }`}
                onClick={() => setSelectedCase(caseStudy)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="relative">
                  <img
                    src={caseStudy.images[0]}
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-white/90 text-gray-700'
                    }`}>
                      {caseStudy.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
                    {caseStudy.title}
                  </h3>
                  <p className="text-secondary font-semibold mb-4">{caseStudy.client}</p>
                  <p className={`mb-4 line-clamp-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {caseStudy.challenge}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <FaClock className="mr-2" />
                      {caseStudy.duration}
                    </div>
                    <div className={`flex items-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <FaUsers className="mr-2" />
                      {caseStudy.team}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`p-3 rounded-full transition-all duration-300 ${
                  currentPage === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : isDarkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-lg`}
              >
                <FaChevronLeft />
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                        : isDarkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-full transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : isDarkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-lg`}
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Popup Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className={`rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            {/* Banner Image */}
            <div className="relative">
              <img
                src={selectedCase.images[0]}
                alt={selectedCase.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedCase.industry}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-white/90 text-gray-700'
                }`}>
                  {selectedCase.category}
                </span>
              </div>
            </div>
            
            {/* Title and Client */}
            <div className="p-6 pb-4">
              <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
                {selectedCase.title}
              </h2>
              <p className="text-lg text-secondary font-semibold">{selectedCase.client}</p>
            </div>

            {/* Three Images Grid */}
            <div className="px-6 pb-6">
              <div className="grid grid-cols-3 gap-4">
                {/* First Image */}
                <div className="relative group">
                  <img
                    src={selectedCase.images[1] || selectedCase.images[0]}
                    alt={`${selectedCase.title} - Image 2`}
                    className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Second Image */}
                <div className="relative group">
                  <img
                    src={selectedCase.images[2] || selectedCase.images[0]}
                    alt={`${selectedCase.title} - Image 3`}
                    className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  </div>
                  
                {/* Third Image - Centered with View More */}
                <div className="relative group">
                  <img
                    src={selectedCase.images[0]}
                    alt={`${selectedCase.title} - Main Image`}
                    className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">View More</span>
                  </div>
                </div>
                </div>
              </div>
              
            {/* Action Buttons */}
            <div className="px-6 pb-6 flex justify-between items-center">
              <Link
                to={`/casestudy/${selectedCase.id}`}
                className="btn-primary inline-flex items-center"
              >
                <FaEye className="mr-2" />
                View Full Details
              </Link>
                <button
                  onClick={() => setSelectedCase(null)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <FaTimes className="mr-2" />
                Close
                </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-white">Impact</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              The numbers speak for themselves - our solutions deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">90+</div>
              <div className="text-lg text-white/90">Case Studies</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-lg text-white/90">Happy Clients</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-lg text-white/90">Success Rate</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">$50M+</div>
              <div className="text-lg text-white/90">Client ROI Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container-custom">
          <div className={`rounded-3xl p-8 md:p-12 text-center text-white ${
            isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'
          } relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let's discuss your project and create a custom solution that delivers exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block">
                  Start Your Project
                </Link>
                <Link to="/solutions" className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 inline-block">
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default CaseStudy
