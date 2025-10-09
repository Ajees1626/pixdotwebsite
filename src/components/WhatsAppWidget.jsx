import React, { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const WhatsAppWidget = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  // Auto show/hide cycle (10 seconds each)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev)
    }, 10000) // 10 seconds

    // Show initially after 2 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(initialTimeout)
    }
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890" // Replace with your WhatsApp number
    const defaultMessage = "Hi! I'm interested in your services"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  if (!isVisible) return null

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-24 left-8 z-50">
        <div className="relative">
          {/* Main WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className={`w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group ${isDarkMode ? 'shadow-green-500/25' : 'shadow-green-500/50'}`}
          >
            <FaWhatsapp className="text-2xl" />
            
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
            
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
              1
            </div>
          </button>

          {/* Tooltip */}
          <div className={`absolute right-16 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
            Chat with us on WhatsApp
            <div className={`absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rotate-45`}></div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed.bottom-6.right-6 {
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </>
  )
}

export default WhatsAppWidget
