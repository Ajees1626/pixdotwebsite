import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import projectsData from '../data/projectsData.json'

const ProjectsSection = () => {
  const { isDarkMode } = useTheme()
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('projects-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Define category configurations with images and colors
  const categoryConfigs = {
    'logo-design': {
      name: 'Logo Design', 
      image: 'https://res.cloudinary.com/dxiwvcfs5/image/upload/v1761384821/logo_jdhwzm.webp',
      color: 'from-blue-500 to-blue-600', 
      bgColor: 'bg-blue-50'
    },
    'poster-design': {
      name: 'Poster Design', 
      image: 'https://res.cloudinary.com/dxiwvcfs5/image/upload/v1761384820/smp_jwkk4p.webp',
      color: 'from-green-500 to-green-600', 
      bgColor: 'bg-green-50'
    },
    'packaging-design': {
      name: 'Packaging Design', 
      image: 'https://res.cloudinary.com/dxiwvcfs5/image/upload/v1761384820/packaging_yqj3l8.webp',
      color: 'from-purple-500 to-purple-600', 
      bgColor: 'bg-purple-50'
    },
    'branding': {
      name: 'Branding', 
      image: 'https://res.cloudinary.com/dxiwvcfs5/image/upload/v1761384820/branding_hg3yzn.webp',
      color: 'from-pink-500 to-pink-600', 
      bgColor: 'bg-pink-50'
    }
  }

  // Generate categories dynamically from projectsData.json
  const categories = Object.keys(projectsData).map(categoryId => ({
    id: categoryId,
    ...categoryConfigs[categoryId]
  }))


  // Handle category click - navigate to projects page with data
  const handleCategoryClick = (categoryId) => {
    // Store the projects data in localStorage for the next page
    localStorage.setItem('projectsData', JSON.stringify(projectsData))
    localStorage.setItem('selectedCategory', categoryId)
    
    // Navigate to projects page
    navigate(`/projects/${categoryId}`)
  }

  return (
    <section id="projects-section" className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-3 mb-6 animate-fadeInUp">
            <span className="text-secondary font-semibold text-sm">Creative Portfolio</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6 animate-fadeInUp delay-200`}>
            Design <span className="text-gradient">Categories</span>
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto animate-fadeInUp delay-400`}>
            Choose a design category to explore our creative projects across logo design, branding, and digital marketing.
          </p>
        </div>

        {/* 6 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.id)}
              className="group cursor-pointer animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border overflow-hidden`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Category Image */}
                <div className="relative mb-4 md:mb-6">
                  <div className="w-full h-40 md:h-48 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2 md:mb-3 group-hover:text-secondary transition-colors`}>
                    {category.name}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 md:mb-6 leading-relaxed text-sm md:text-base`}>
                    {projectsData[category.id]?.description || `Explore our ${category.name.toLowerCase()} projects and see how we create stunning visual designs that make brands stand out.`}
                  </p>

                  {/* Project Count */}
                  <div className="flex justify-between items-center mb-4 md:mb-6">
                    <div>
                      <div className={`text-base md:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-primary'}`}>
                        {projectsData[category.id]?.varieties 
                          ? Object.values(projectsData[category.id].varieties).reduce((total, variety) => total + variety.projects.length, 0)
                          : projectsData[category.id]?.projects?.length || 0
                        } Projects
                      </div>
                      <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Click to view all</div>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                      <span className="text-secondary group-hover:text-white transition-colors font-bold text-sm md:text-base">→</span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Project Count */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`inline-flex items-center ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-full px-6 md:px-8 py-3 md:py-4 shadow-lg border transform hover:scale-105 transition-transform duration-300`}>
            <span className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mr-2 md:mr-3 animate-counter`}>
              {Object.values(projectsData).reduce((total, category) => {
                if (category.varieties) {
                  return total + Object.values(category.varieties).reduce((varietyTotal, variety) => varietyTotal + variety.projects.length, 0)
                }
                return total + (category.projects?.length || 0)
              }, 0)}
            </span>
            <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-semibold text-sm md:text-base`}>Total Projects</span>
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

export default ProjectsSection
