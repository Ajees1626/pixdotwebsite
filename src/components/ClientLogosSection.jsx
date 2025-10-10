import React, { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const ClientLogosSection = () => {
  const { isDarkMode } = useTheme()
  // Real client logos
  const logos = [
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710267/clients_names-01_nvscg2.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710267/clients_names-02_nby2jc.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710267/clients_names-03_op6wvc.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710268/clients_names-04_jchrau.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710267/clients_names-05_ozwf0w.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710267/clients_names-06_gbbn9w.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710268/clients_names-07_h3i3p4.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710269/clients_names-08_zwas4e.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710268/clients_names-09_gup9fr.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710268/clients_names-10_sxcg4u.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710269/clients_names-11_ztxad7.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710269/clients_names-12_gk5yqc.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710269/clients_names-13_k2iehb.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710269/clients_names-14_pybaa7.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710271/clients_names-15_brmmt3.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710269/clients_names-16_gax0br.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710270/clients_names-17_himezc.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710270/clients_names-18_wwxr9w.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710270/clients_names-19_lewai6.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710271/clients_names-20_ouc3pk.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710270/clients_names-21_lqj37s.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710271/clients_names-22_nre2g9.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710271/clients_names-23_gt2xuu.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710297/clients_names-24_svmhvo.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710297/clients_names-25_ezgs5z.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710297/clients_names-26_luz5cv.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710296/clients_names-27_tqdk7j.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710297/clients_names-28_gpcxqu.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710297/clients_names-29_kyxfsj.webp",
    "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710298/clients_names-30_afbcs5.webp",
  ];

  const clientLogos = logos.map((logo, index) => ({
    id: index + 1,
    logo: logo,
    name: `Client ${index + 1}`
  }))
  const [scrollPosition, setScrollPosition] = useState(0)

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => (prev + 1) % clientLogos.length)
    }, 100) // Smooth scrolling

    return () => clearInterval(interval)
  }, [clientLogos.length])

  return (
    <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-white'} overflow-hidden transition-colors duration-300`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-3 mb-6">
            <span className="text-secondary font-semibold text-sm">Our Partners</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
            Trusted by <span className="text-gradient">30+ Companies</span>
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            We're proud to work with industry leaders, innovative startups, and growing businesses worldwide.
          </p>
        </div>

        {/* Multiple Scrolling Rows with Different Animations */}
        
        {/* Row 1: Fast Left Scrolling */}
        <div className="mb-8">
          <div className="flex space-x-8 overflow-hidden">
            <div 
              className="flex space-x-8 animate-scroll-left"
              style={{
                animation: `scrollLeft ${clientLogos.length * 2}s linear infinite`,
                transform: `translateX(-${scrollPosition * 2}px)`
              }}
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={`row1-${index}`} className="flex-shrink-0 group">
                  <div className={`w-32 h-16 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 flex items-center justify-center border p-2`}>
                    <img 
                      src={logo.logo} 
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Slow Right Scrolling */}
        <div className="mb-8">
          <div className="flex space-x-8 overflow-hidden">
            <div 
              className="flex space-x-8 animate-scroll-right"
              style={{
                animation: `scrollRight ${clientLogos.length * 3}s linear infinite`,
                transform: `translateX(${scrollPosition * 1.5}px)`
              }}
            >
              {[...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()].map((logo, index) => (
                <div key={`row2-${index}`} className="flex-shrink-0 group">
                  <div className={`w-28 h-14 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex items-center justify-center border p-2`}>
                    <img 
                      src={logo.logo} 
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Bounce Animation */}
        <div className="mb-8">
          <div className="flex space-x-6 overflow-hidden">
            <div 
              className="flex space-x-6 animate-scroll-bounce"
              style={{
                animation: `scrollBounce ${clientLogos.length * 4}s ease-in-out infinite`,
                transform: `translateX(-${scrollPosition * 1}px)`
              }}
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={`row3-${index}`} className="flex-shrink-0 group">
                  <div className={`w-24 h-12 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 animate-bounce-slow flex items-center justify-center border p-1`}>
                    <img 
                      src={logo.logo} 
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 4: Pulse Animation */}
        <div className="mb-8">
          <div className="flex space-x-4 overflow-hidden">
            <div 
              className="flex space-x-4 animate-scroll-pulse"
              style={{
                animation: `scrollPulse ${clientLogos.length * 2.5}s linear infinite`,
                transform: `translateX(-${scrollPosition * 3}px)`
              }}
            >
              {[...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()].map((logo, index) => (
                <div key={`row4-${index}`} className="flex-shrink-0 group">
                  <div className={`w-20 h-10 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 animate-pulse-slow flex items-center justify-center border p-1`}>
                    <img 
                      src={logo.logo} 
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       

        {/* Stats Section */}
        <div className="text-center mt-16">
          <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl p-8 shadow-lg border transition-colors duration-300`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2`}>30+</div>
                <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-semibold`}>Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-semibold`}>Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-semibold`}>Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25%); }
        }
        
        @keyframes scrollPulse {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scrollRotate {
          0% { transform: translateX(0) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(360deg); }
        }
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default ClientLogosSection
