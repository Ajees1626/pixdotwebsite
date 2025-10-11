import React, { useEffect, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const StatsSection = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [countedStats, setCountedStats] = useState([0, 0, 0, 0])
  
  const stats = [
    { number: 500, label: 'Projects Completed', suffix: '+' },
    { number: 150, label: 'Happy Clients', suffix: '+' },
    { number: 98, label: 'Success Rate', suffix: '%' },
    { number: 24, label: 'Support Available', suffix: '/7' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps
      
      stats.forEach((stat, index) => {
        const increment = stat.number / steps
        let current = 0
        
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.number) {
            current = stat.number
            clearInterval(timer)
          }
          
          setCountedStats(prev => {
            const newStats = [...prev]
            newStats[index] = Math.floor(current)
            return newStats
          })
        }, stepDuration)
      })
    }
  }, [isVisible])

  return (
    <section id="stats-section" className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-tr from-primary to-secondary'}`}>
      <div className="container-custom">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-white'} mb-6 animate-fadeInUp`}>
            Our <span className={`${isDarkMode ? 'text-secondary' : 'text-white'}`}>Impact</span>
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-200' : 'text-white/90'} max-w-3xl mx-auto animate-fadeInUp delay-200`}>
            The numbers speak for themselves - our solutions deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center ${isDarkMode ? 'text-white' : 'text-white'} animate-slideInUp`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-secondary' : 'text-white'} mb-2 transform hover:scale-110 transition-transform duration-300`}>
                {isVisible ? countedStats[index] : 0}{stat.suffix}
              </div>
              <div className={`text-lg ${isDarkMode ? 'text-gray-200' : 'text-white/80'}`}>
                {stat.label}
              </div>
            </div>
          ))}
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
        
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  )
}

export default StatsSection

