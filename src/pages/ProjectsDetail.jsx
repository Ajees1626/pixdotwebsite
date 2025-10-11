import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaExternalLinkAlt, FaCalendarAlt, FaUser, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import projectsData from '../data/projectsData.json'

const ProjectsDetail = () => {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedVariety, setSelectedVariety] = useState(null)
  const { isDarkMode } = useTheme()

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  if (!projectsData[categoryId]) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="text-center">
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>Category Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-primary transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const categoryData = projectsData[categoryId]
  
  // Handle categories with varieties
  let projects = []
  let currentVariety = null
  
  if (categoryData.varieties) {
    if (selectedVariety && categoryData.varieties[selectedVariety]) {
      currentVariety = categoryData.varieties[selectedVariety]
      projects = currentVariety.projects
    } else {
      // Default to first variety if none selected
      const firstVarietyKey = Object.keys(categoryData.varieties)[0]
      currentVariety = categoryData.varieties[firstVarietyKey]
      projects = currentVariety.projects
      setSelectedVariety(firstVarietyKey)
    }
  } else {
    // Handle categories without varieties
    projects = categoryData.projects || []
  }

  const navigateProject = (direction) => {
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    let newIndex
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1
    } else {
      newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0
    }
    
    setSelectedProject(projects[newIndex])
  }

  // Set default variety for categories with varieties
  useEffect(() => {
    if (projectsData[categoryId]?.varieties && !selectedVariety) {
      const firstVarietyKey = Object.keys(projectsData[categoryId].varieties)[0]
      setSelectedVariety(firstVarietyKey)
    }
  }, [categoryId, selectedVariety])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isModalOpen) return
      
      if (e.key === 'ArrowLeft') {
        navigateProject('prev')
      } else if (e.key === 'ArrowRight') {
        navigateProject('next')
      } else if (e.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isModalOpen, selectedProject, projects])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <div className="container-custom section-padding">
        {/* Back Button */}
        <div className="mb-8 px-4 sm:px-6 lg:py-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-primary hover:text-secondary transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Categories
          </button>
        </div>

        {/* Category Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-3 mb-6">
            <span className="text-secondary font-semibold text-sm">
              {categoryData.category} Projects
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {categoryData.category} <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {categoryData.description}
          </p>
        </div>

        {/* Variety Selection */}
        {categoryData.varieties && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Choose {categoryData.category} Type</h2>
              <p className="text-gray-600">Select the type of {categoryData.category.toLowerCase()} you're interested in</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(categoryData.varieties).map(([varietyKey, variety]) => (
                <button
                  key={varietyKey}
                  onClick={() => setSelectedVariety(varietyKey)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedVariety === varietyKey
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-secondary hover:text-secondary hover:shadow-md'
                  }`}
                >
                  {variety.name}
                </button>
              ))}
            </div>

            {/* Current Variety Description */}
            {currentVariety && (
              <div className="text-center">
                <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
                  <span className="text-primary font-semibold">{currentVariety.name}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600 text-sm">{currentVariety.description}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group cursor-pointer"
            >
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 border border-gray-100 overflow-hidden">
                {/* Project Image */}
                <div className="relative">
                  <div className="w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={project.image}
                      alt="Project"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Stats */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <span className="text-3xl font-bold text-primary mr-3">{projects.length}</span>
            <span className="text-gray-600 font-semibold">
              {currentVariety ? `${currentVariety.name} Projects` : `${categoryData.category} Projects`}
            </span>
          </div>
        </div>
      </div>

      {/* Modal for Full Project View */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md">
         <div className="relative bg-white rounded-xl sm:rounded-2xl w-[650px] h-[650px] max-w-[650px] max-h-[650px] overflow-hidden shadow-2xl">
           {/* Close Button */}
           <button
             onClick={closeModal}
             className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
           >
             <FaTimes className="text-gray-700 text-lg sm:text-xl" />
           </button>

           {/* Left Navigation Arrow */}
           {projects.length > 1 && (
             <button
               onClick={() => navigateProject('prev')}
               className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
             >
               <FaChevronLeft className="text-gray-700 text-lg sm:text-xl" />
             </button>
           )}

           {/* Right Navigation Arrow */}
           {projects.length > 1 && (
             <button
               onClick={() => navigateProject('next')}
               className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
             >
               <FaChevronRight className="text-gray-700 text-lg sm:text-xl" />
             </button>
           )}

           {/* Full Image Display */}
           <div className="relative">
             <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
               <img
                 src={selectedProject.image}
                 alt="Project"
                 className="w-full h-full object-cover"
               />
             </div>
           </div>

           {/* Project Counter */}
           {projects.length > 1 && (
             <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-10">
               <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                 <span className="text-gray-700 text-sm font-medium">
                   {projects.findIndex(p => p.id === selectedProject.id) + 1} / {projects.length}
                 </span>
               </div>
             </div>
           )}
         </div>
      </div>
      )}
    </div>
  )
}

export default ProjectsDetail
