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
    title: `Project ${id}`,
    category: ['Web Development', 'Mobile App', 'E-commerce', 'UI/UX Design', 'Digital Marketing', 'AI Integration', 'Healthcare', 'Finance', 'Education', 'Real Estate'][(id - 1) % 10],
    image: `https://images.unsplash.com/photo-${1000 + parseInt(id)}?w=1200&h=800&fit=crop&crop=center`,
    description: `This is an amazing project ${id} that showcases our expertise in digital innovation. We created a comprehensive solution that transformed the client's business and delivered exceptional results.`,
    longDescription: `Project ${id} represents a significant milestone in our portfolio. This comprehensive digital solution was developed using cutting-edge technologies and innovative design principles. The project involved extensive research, strategic planning, and meticulous execution to deliver a product that exceeded all expectations.

Our team worked closely with the client to understand their unique requirements and challenges. Through collaborative design sessions and iterative development, we created a solution that not only met their immediate needs but also positioned them for future growth and success.

The project features advanced functionality, responsive design, and seamless user experience across all devices. We implemented modern development practices, including agile methodology, continuous integration, and comprehensive testing to ensure the highest quality standards.`,
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
    features: [
      'Responsive Design',
      'Advanced Analytics',
      'Real-time Updates',
      'Secure Authentication',
      'Mobile Optimization',
      'API Integration'
    ],
    results: [
      { metric: 'Performance Improvement', value: '+150%' },
      { metric: 'User Engagement', value: '+200%' },
      { metric: 'Conversion Rate', value: '+85%' },
      { metric: 'Load Time', value: '-60%' }
    ],
    client: 'TechCorp Inc.',
    duration: '6 months',
    team: '8 members'
  }

  return (
    <div id="project-page" className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors animate-fadeInUp"
          >
            <FaArrowLeft className="mr-2" />
            Back to Projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fadeInUp">
                <FaTag className="mr-2" />
                <span className="text-sm font-medium">{project.category}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp delay-200">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed animate-fadeInUp delay-400">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-200 animate-fadeInUp delay-600">
                  <FaCalendar className="mr-2" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center text-gray-200 animate-fadeInUp delay-800">
                  <FaUser className="mr-2" />
                  <span>{project.team}</span>
                </div>
                <div className="flex items-center text-gray-200 animate-fadeInUp delay-1000">
                  <FaExternalLinkAlt className="mr-2" />
                  <span>{project.client}</span>
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-8 animate-fadeInUp">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6 animate-fadeInUp delay-200">
                  {project.longDescription}
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-6 mt-12 animate-fadeInUp delay-400">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4 transform hover:scale-105 transition-transform duration-300 animate-slideInUp" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className="bg-gray-50 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300 animate-slideInUp" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-xl font-bold text-primary mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium transform hover:scale-110 transition-transform duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Results */}
              <div className="bg-gray-50 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300 animate-slideInUp" style={{ animationDelay: '1s' }}>
                <h3 className="text-xl font-bold text-primary mb-4">Project Results</h3>
                <div className="space-y-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex justify-between items-center transform hover:scale-105 transition-transform duration-300">
                      <span className="text-gray-600">{result.metric}</span>
                      <span className="text-2xl font-bold text-accent animate-counter">{result.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300 animate-slideInUp" style={{ animationDelay: '1.2s' }}>
                <h3 className="text-xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-white/90 mb-6">Let's discuss how we can help you achieve similar results.</p>
                <Link 
                  to="/contact" 
                  className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 inline-block transform hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
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

