import React, { useEffect, useState } from 'react'
import { FaUsers, FaAward, FaRocket, FaHeart, FaGlobe, FaLightbulb } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const About = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Visionary leader with 15+ years in digital innovation.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Technology expert specializing in scalable solutions.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Creative director with award-winning design portfolio.'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Full-stack developer passionate about clean code.'
    }
  ]

  const values = [
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we deliver.'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions.'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'We love what we do and it shows in our work.'
    }
  ]

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to transform digital experiences.' },
    { year: '2019', title: 'First Major Client', description: 'Secured our first enterprise client and expanded our team.' },
    { year: '2020', title: 'Remote Work Revolution', description: 'Adapted to remote work and expanded globally.' },
    { year: '2021', title: 'Award Recognition', description: 'Received industry awards for innovation and excellence.' },
    { year: '2022', title: 'Team Expansion', description: 'Grew to 50+ team members across multiple countries.' },
    { year: '2023', title: 'AI Integration', description: 'Launched AI-powered solutions for our clients.' },
    { year: '2024', title: 'Global Presence', description: 'Expanded to serve clients in 25+ countries.' }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fadeInUp">
              About <span className="text-white">Pixdot</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed px-4 sm:px-0 animate-fadeInUp delay-300">
              We are a team of passionate innovators dedicated to transforming businesses 
              through cutting-edge digital solutions and exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-2xl p-6 sm:p-8 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
                Our Mission
              </h2>
              <p className={`text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                To empower businesses with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting value in an ever-evolving digital landscape.
              </p>
              <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                We believe technology should be accessible, intuitive, and transformative. 
                Our mission is to bridge the gap between complex digital challenges and 
                simple, effective solutions.
              </p>
            </div>
            <div className={`${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} rounded-2xl p-6 sm:p-8 text-white shadow-xl`}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-base sm:text-lg leading-relaxed text-white/90">
                To be the leading digital innovation partner that businesses trust to 
                navigate the future of technology, creating meaningful connections between 
                brands and their audiences worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
              Our <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Values</span>
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 sm:px-0 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              These core values guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className={`text-center ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-2xl p-6 sm:p-8 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <div className={`w-16 h-16 sm:w-20 sm:h-20 ${isDarkMode ? 'bg-gradient-to-br from-primary to-secondary' : 'bg-gradient-to-br from-white to-secondary'} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}>
                  <value.icon className="text-white text-2xl sm:text-3xl" />
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>{value.title}</h3>
                <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
              Meet Our <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Team</span>
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 sm:px-0 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              The talented individuals who make Pixdot's success possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div key={index} className={`text-center ${isDarkMode ? 'bg-gray-700/30' : 'bg-gray-50'} rounded-2xl p-6 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slideInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full mx-auto object-cover shadow-lg border-4 border-white"
                  />
                  <div className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} opacity-0 hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-primary'}`}>{member.name}</h3>
                <p className="text-secondary font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
              Our <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Journey</span>
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 sm:px-0 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Key milestones in our company's growth and evolution.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on large screens */}
            <div className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${isDarkMode ? 'bg-gradient-to-b from-primary to-secondary' : 'bg-gradient-to-b from-primary to-secondary'}`}></div>
            
            {/* Mobile Timeline Line - Vertical line on the left */}
            <div className={`lg:hidden absolute left-8 top-0 w-1 h-full ${isDarkMode ? 'bg-gradient-to-b from-primary to-secondary' : 'bg-gradient-to-b from-primary to-secondary'}`}></div>
            
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'} mb-4 lg:mb-0`}>
                    <div className={`rounded-2xl p-4 sm:p-6 shadow-xl border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} relative hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                      {/* Mobile timeline dot - positioned on the left */}
                      <div className={`lg:hidden absolute -left-12 top-6 w-4 h-4 ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} rounded-full border-4 shadow-lg z-10 ${isDarkMode ? 'border-gray-900' : 'border-white'}`}></div>
                      
                      <div className={`font-bold text-base sm:text-lg mb-2 ${isDarkMode ? 'text-secondary' : 'text-secondary'}`}>{milestone.year}</div>
                      <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-primary'}`}>{milestone.title}</h3>
                      <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Desktop Timeline Dot */}
                  <div className={`hidden lg:block w-4 h-4 ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} rounded-full border-4 shadow-lg z-10 ${isDarkMode ? 'border-gray-900' : 'border-white'}`}></div>
                  
                  <div className="w-full lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className={`${isDarkMode ? 'bg-white/10' : 'bg-white/10'} backdrop-blur-sm rounded-2xl p-4 sm:p-6 border ${isDarkMode ? 'border-white/20' : 'border-white/20'} hover:bg-white/20 transition-all duration-300 transform hover:scale-105`}>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">50+</div>
              <div className="text-sm sm:text-base lg:text-lg text-white/90">Team Members</div>
            </div>
            <div className={`${isDarkMode ? 'bg-white/10' : 'bg-white/10'} backdrop-blur-sm rounded-2xl p-4 sm:p-6 border ${isDarkMode ? 'border-white/20' : 'border-white/20'} hover:bg-white/20 transition-all duration-300 transform hover:scale-105`}>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">25+</div>
              <div className="text-sm sm:text-base lg:text-lg text-white/90">Countries Served</div>
            </div>
            <div className={`${isDarkMode ? 'bg-white/10' : 'bg-white/10'} backdrop-blur-sm rounded-2xl p-4 sm:p-6 border ${isDarkMode ? 'border-white/20' : 'border-white/20'} hover:bg-white/20 transition-all duration-300 transform hover:scale-105`}>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">500+</div>
              <div className="text-sm sm:text-base lg:text-lg text-white/90">Projects Completed</div>
            </div>
            <div className={`${isDarkMode ? 'bg-white/10' : 'bg-white/10'} backdrop-blur-sm rounded-2xl p-4 sm:p-6 border ${isDarkMode ? 'border-white/20' : 'border-white/20'} hover:bg-white/20 transition-all duration-300 transform hover:scale-105`}>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">98%</div>
              <div className="text-sm sm:text-base lg:text-lg text-white/90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      
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
        
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  )
}

export default About

