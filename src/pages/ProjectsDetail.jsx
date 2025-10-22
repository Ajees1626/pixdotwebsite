import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import projectsData from '../data/projectsData.json'

const ProjectsDetail = () => {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isDarkMode } = useTheme()

  const openModal = (project) => {
    setSelectedProject({
      ...project,
      currentImage: project.relatedImages ? project.relatedImages[0] : project.image
    })
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
  
  // Build a single project list. If varieties exist, flatten them into one array.
  let projects = []
  if (categoryData.varieties) {
    projects = Object.values(categoryData.varieties).flatMap(v => v.projects)
  } else {
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

  const navigateImage = (direction) => {
    if (!selectedProject.relatedImages || selectedProject.relatedImages.length <= 1) return
    
    const currentImageIndex = selectedProject.relatedImages.findIndex(img => img === selectedProject.currentImage)
    let newImageIndex
    
    if (direction === 'prev') {
      newImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : selectedProject.relatedImages.length - 1
    } else {
      newImageIndex = currentImageIndex < selectedProject.relatedImages.length - 1 ? currentImageIndex + 1 : 0
    }
    
    setSelectedProject({
      ...selectedProject,
      currentImage: selectedProject.relatedImages[newImageIndex]
    })
  }

  // No variety selection UI; nothing to initialize
  useEffect(() => {}, [categoryId])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isModalOpen) return
      
      if (e.key === 'ArrowLeft') {
        if (selectedProject.relatedImages && selectedProject.relatedImages.length > 1) {
          navigateImage('prev')
        } else {
          navigateProject('prev')
        }
      } else if (e.key === 'ArrowRight') {
        if (selectedProject.relatedImages && selectedProject.relatedImages.length > 1) {
          navigateImage('next')
        } else {
          navigateProject('next')
        }
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

        {/* Variety Selection removed - showing all projects together */}

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
            <span className="text-gray-600 font-semibold">{categoryData.category} Projects</span>
          </div>
        </div>
      </div>

      {/* Modal for Full Project View */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md">
         <div className="relative bg-white rounded-xl sm:rounded-2xl w-[90vw] h-[90vw] sm:w-[650px] sm:h-[650px] max-w-[90vw] max-h-[90vh] sm:max-w-[650px] sm:max-h-[650px] overflow-hidden shadow-2xl">
           {/* Close Button */}
           <button
             onClick={closeModal}
             className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
           >
             <FaTimes className="text-gray-700 text-sm sm:text-lg md:text-xl" />
           </button>

           {/* Left Navigation Arrow */}
           {(projects.length > 1 || (selectedProject.relatedImages && selectedProject.relatedImages.length > 1)) && (
             <button
               onClick={() => {
                 if (selectedProject.relatedImages && selectedProject.relatedImages.length > 1) {
                   navigateImage('prev')
                 } else {
                   navigateProject('prev')
                 }
               }}
               className="absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-3 md:left-4 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
             >
               <FaChevronLeft className="text-gray-700 text-sm sm:text-lg md:text-xl" />
             </button>
           )}

           {/* Right Navigation Arrow */}
           {(projects.length > 1 || (selectedProject.relatedImages && selectedProject.relatedImages.length > 1)) && (
             <button
               onClick={() => {
                 if (selectedProject.relatedImages && selectedProject.relatedImages.length > 1) {
                   navigateImage('next')
                 } else {
                   navigateProject('next')
                 }
               }}
               className="absolute right-2 top-1/2 transform -translate-y-1/2 sm:right-3 md:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
             >
               <FaChevronRight className="text-gray-700 text-sm sm:text-lg md:text-xl" />
             </button>
           )}

           {/* Full Image Display */}
           <div className="relative">
             <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
               <img
                 src={selectedProject.currentImage || selectedProject.image}
                 alt="Project"
                 className="w-full h-full object-cover"
               />
             </div>
           </div>

           {/* Project Counter */}
           {(projects.length > 1 || (selectedProject.relatedImages && selectedProject.relatedImages.length > 1)) && (
             <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 sm:bottom-3 md:bottom-4 z-10">
               <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg">
                 <span className="text-gray-700 text-xs sm:text-sm font-medium">
                   {selectedProject.relatedImages && selectedProject.relatedImages.length > 1 
                     ? `${selectedProject.relatedImages.findIndex(img => img === selectedProject.currentImage) + 1} / ${selectedProject.relatedImages.length}`
                     : `${projects.findIndex(p => p.id === selectedProject.id) + 1} / ${projects.length}`
                   }
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
