import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaExternalLinkAlt, FaCalendarAlt, FaUser, FaTimes } from 'react-icons/fa'
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

  // Set default variety for categories with varieties
  useEffect(() => {
    if (projectsData[categoryId]?.varieties && !selectedVariety) {
      const firstVarietyKey = Object.keys(projectsData[categoryId].varieties)[0]
      setSelectedVariety(firstVarietyKey)
    }
  }, [categoryId, selectedVariety])

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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <div className="container-custom section-padding">
        {/* Back Button */}
        <div className="mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group cursor-pointer"
            >
              <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden">
                {/* Project Image */}
                <div className="relative mb-6">
                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center mb-1">
                        <FaUser className="text-secondary mr-2 text-xs" />
                        <span className="font-semibold text-gray-700 text-xs">Client</span>
                      </div>
                      <p className="text-gray-600 text-xs">{project.client}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center mb-1">
                        <FaCalendarAlt className="text-secondary mr-2 text-xs" />
                        <span className="font-semibold text-gray-700 text-xs">Date</span>
                      </div>
                      <p className="text-gray-600 text-xs">{project.date}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Results Preview */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm font-medium">Results:</span>
                      <div className="flex space-x-2">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <span key={idx} className="text-secondary font-bold text-sm">
                            {result.value}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <FaTimes className="text-gray-600" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                    {currentVariety ? currentVariety.name : categoryData.category}
                  </div>
                  <h2 className="text-white font-bold text-2xl mb-1">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 overflow-y-auto max-h-[90vh]">
                <div className="space-y-6">
                  {/* Project Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Project Overview</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <FaUser className="text-secondary mr-2" />
                        <span className="font-semibold text-gray-700">Client</span>
                      </div>
                      <p className="text-gray-600">{selectedProject.client}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <FaCalendarAlt className="text-secondary mr-2" />
                        <span className="font-semibold text-gray-700">Date</span>
                      </div>
                      <p className="text-gray-600">{selectedProject.date}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-3">Project Results</h4>
                    <div className="space-y-3">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                          <span className="text-gray-700 font-medium">{result.metric}</span>
                          <span className="text-secondary font-bold text-lg">{result.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                      <FaExternalLinkAlt className="mr-2" />
                      View Live Project
                    </button>
                    <button className="bg-white border-2 border-secondary text-secondary font-semibold py-3 px-6 rounded-xl hover:bg-secondary hover:text-white transition-all duration-300">
                      Get Similar Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectsDetail
