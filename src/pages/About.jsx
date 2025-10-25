import React, { useEffect, useState } from 'react'
import { FaUsers, FaAward, FaRocket, FaHeart, FaGlobe, FaLightbulb } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import StatsSection from '../components/StatsSection'

const About = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  const team = [
    {
      name: 'MOHAMED MUSTAFA N',
      role: 'DIRECTOR- BUSINESS AND BRAND CONSULTENT',
      image: '/mustafa.jpg',
       
    },
    {
      name: 'IBRAHIM ASHIK A',
      role: 'DIRECTOR- BRAND AND BUSINESS CONSULTENT',
      image: '/ashik.webp',
       
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
    { year: '2023', title: 'Company Founded', description: 'Started with a vision to deliver high-quality digital, branding, and creative solutions for businesses in India and abroad.' },
    { year: '2023', title: 'First Major Client', description: 'Secured our first enterprise client and successfully executed branding and digital marketing projects.' },
    { year: '2024', title: 'Team Expansion', description: 'Expanded the Pixdot team to include designers, developers, and marketers to serve multiple industries efficiently.' },
    { year: '2024', title: 'Service Diversification', description: 'Introduced website development, app development, and personal branding solutions to meet growing client demands.' },
    { year: '2025', title: 'Recognition & Growth', description: ' Achieved 100+ satisfied clients with over 1000 successful projects delivered across sectors like health, education, IT, retail, and more.' },
    { year: '2025', title: 'Global Outreach', description: 'Expanded operations to serve international clients while maintaining a strong Indian client base.' }
    
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
            At Pixdot, we blend strategy, creativity, and technology to build impactful digital experiences.
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
              To empower businesses by delivering creative design and digital strategies that fuel growth, engagement, and lasting impact. We are committed to quality, innovation, and creating meaningful brand experiences that resonate globally.
              </p>
              
            </div>
            <div className={`${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} rounded-2xl p-6 sm:p-8 text-white shadow-xl`}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-base sm:text-lg leading-relaxed text-white/90">
              To become a global leader in design and digital solutions by transforming brands into enduring legacies through purposeful creativity, strategic execution, and client-focused partnerships.
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
      {/* Professional Business Team */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3 mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Leadership Team</span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
              Meet Our <span className="text-gradient">Directors</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Visionary leaders driving innovation and excellence in every project
            </p>
          </div>

          {/* Round Team Images with Hover Background */}
          <div className='bg-primary/10 rounded-2xl p-6 sm:p-8 border border-primary/60'>
          <div className="max-w-4xl mx-auto  bg border-primary/60 rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {team.map((member, index) => (
                <div key={index} className="group relative flex flex-col items-center rounded-full transition-all duration-500 hover:shadow-2xl hover:bg-primary/10">
                  {/* Round Image */}
                  <div className="relative w-80 h-80 mb-8 border-4 border-primary/60 rounded-full">
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Light Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Hover Background - Colorful Outline Effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 -z-10">
                    {/* Blue Outline Circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-4 border-primary/60 rounded-full animate-pulse"></div>
                    
                    {/* Cyan Outline Circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border-3 border-secondary/70 rounded-full animate-ping"></div>
                    
                    {/* Accent Outline Circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border-2 border-accent/80 rounded-full animate-bounce"></div>
                    
                    {/* Light Background Fill */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-primary/20 to-secondary/15 rounded-full blur-2xl"></div>
                  </div>

                  {/* Name and Role - Simple */}
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
          {/* Professional Bottom Section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
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

      <StatsSection/>
      
      
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

