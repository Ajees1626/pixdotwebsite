import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import projectsData from '../data/projectsData.json'

const ProjectsSection = () => {
  const { isDarkMode } = useTheme()
  const navigate = useNavigate()
  const [allImages, setAllImages] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  // Category order: Logo → Poster → Packaging → Branding
  const categoryOrder = ['logo-design', 'poster-design', 'packaging-design', 'branding']
  
  // Category name mapping
  const categoryNames = {
    'logo-design': 'Logo Design',
    'poster-design': 'Poster Design',
    'packaging-design': 'Packaging Design',
    'branding': 'Branding'
  }

  // Get all project images from all categories, organized in alternating pattern
  useEffect(() => {
    // First, collect images from each category separately
    const categoryImages = {}
    
    categoryOrder.forEach(categoryId => {
      const category = projectsData[categoryId]
      if (!category) return
      
      const categoryName = categoryNames[categoryId] || categoryId
      categoryImages[categoryId] = []
      
      // Check if category has varieties
      if (category.varieties) {
        Object.values(category.varieties).forEach(variety => {
          if (variety.projects && Array.isArray(variety.projects)) {
            variety.projects.forEach(project => {
              if (project.image) {
                categoryImages[categoryId].push({
                  image: project.image,
                  categoryId: categoryId,
                  categoryName: categoryName,
                  projectId: project.id
                })
              }
            })
          }
        })
      } else if (category.projects && Array.isArray(category.projects)) {
        // If no varieties, use projects directly
        category.projects.forEach(project => {
          if (project.image) {
            categoryImages[categoryId].push({
              image: project.image,
              categoryId: categoryId,
              categoryName: categoryName,
              projectId: project.id
            })
          }
        })
      }
    })
    
    // Now interleave images in pattern: Logo → Poster → Packaging → Branding → repeat
    const interleavedImages = []
    const maxLength = Math.max(
      ...categoryOrder.map(catId => categoryImages[catId]?.length || 0)
    )
    
    for (let i = 0; i < maxLength; i++) {
      categoryOrder.forEach(categoryId => {
        if (categoryImages[categoryId] && categoryImages[categoryId][i]) {
          interleavedImages.push(categoryImages[categoryId][i])
        }
      })
    }
    
    setAllImages(interleavedImages)
  }, [])

  // Handle image click - navigate to project page
  const handleImageClick = () => {
    // Store the projects data in localStorage for the next page
    localStorage.setItem('projectsData', JSON.stringify(projectsData))
    
    // Navigate to project page
    navigate('/projectpage')
  }

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

  return (
    <section id="projects-section" className={`section-padding overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <div className="container-custom">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-3 mb-6">
            <span className="text-secondary font-semibold text-sm">Our Portfolio</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto animate-fadeInUp delay-400`}>
            Choose a design category to explore our creative projects across logo design, branding, and digital marketing.
          </p>
        </div>

        {/* Auto-sliding Image Carousel */}
        <div className="relative w-full overflow-hidden py-8">
          {/* Gradient Overlays */}
          <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${isDarkMode ? 'from-gray-10' : 'from-gray-10'} to-transparent z-10 pointer-events-none`}></div>
          <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${isDarkMode ? 'from-gray-10' : 'from-gray-10'} to-transparent z-10 pointer-events-none`}></div>
          
          {/* Sliding Container */}
          <div 
            className="flex gap-4 animate-slideRightToLeft" 
            style={{ 
              width: 'max-content',
              '--image-count': allImages.length.toString(),
              '--animation-duration': `${Math.max(allImages.length * 0.6, 400)}s`
            }}
          >
            {/* First set of images */}
            {allImages.map((imageData, index) => (
              <div
                key={`first-${index}`}
                onClick={handleImageClick}
                className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <img
                  src={imageData.image}
                  alt={`${imageData.categoryName} - Project ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Category Name Badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold z-10">
                  {imageData.categoryName}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {allImages.map((imageData, index) => (
              <div
                key={`second-${index}`}
                onClick={handleImageClick}
                className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <img
                  src={imageData.image}
                  alt={`${imageData.categoryName} - Project ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Category Name Badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold z-10">
                  {imageData.categoryName}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Count */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`inline-flex items-center ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-full px-6 md:px-8 py-3 md:py-4 shadow-lg border`}>
            <span className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mr-3`}>
              {allImages.length}
            </span>
            <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-semibold text-sm md:text-base`}>
              Total Projects
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-272px * var(--image-count)));
          }
        }

        @media (min-width: 768px) {
          @keyframes slideRightToLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-336px * var(--image-count)));
            }
          }
        }

        .animate-slideRightToLeft {
          animation: slideRightToLeft var(--animation-duration, 400s) linear infinite;
          display: flex;
        }

        .animate-slideRightToLeft:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default ProjectsSection
