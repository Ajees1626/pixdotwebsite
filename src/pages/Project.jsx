import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaCalendar, FaUser, FaTag, FaExternalLinkAlt } from 'react-icons/fa'

const Project = () => {
  const { id } = useParams()
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

    const element = document.getElementById('project-page')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])
  
  // Mock project data - in real app, this would come from an API
  const project = {
    id: id,
    image: `https://images.unsplash.com/photo-${1000 + parseInt(id)}?w=1200&h=800&fit=crop&crop=center`
  }

  return (
    <div id="project-page" className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-4 sm:py-6">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white transition-colors animate-fadeInUp"
          >
            <FaArrowLeft className="mr-2" />
            <span className="text-sm sm:text-base">Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Full Image Display */}
      <div className="py-8 sm:py-12">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.image}
                  alt="Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Animations */}
      <style>{`
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
        
        .delay-800 {
          animation-delay: 0.8s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}

export default Project

