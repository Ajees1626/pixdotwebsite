import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaTimes, FaPaperPlane, FaClock, FaUser, FaComments } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const ChatWidget = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [message, setMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [chatMessages, setChatMessages] = useState([])

  // Show for 10 seconds only after page load
  useEffect(() => {
    // Show initially after 2 seconds
    const showTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 10000)

     

    return () => {
      clearTimeout(showTimeout)
     
    }
  }, [])

  // Quick responses
  const quickResponses = [
    "Hi! I'm interested in your services",
    "Can you tell me about your pricing?",
    "I need help with a project",
    "What are your working hours?",
    "Do you offer custom solutions?"
  ]

  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890" // Replace with your WhatsApp number
    const defaultMessage = message || "Hi! I'm interested in your services"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, '_blank')
    setShowChat(false)
    setMessage('')
  }

  const handleQuickResponse = (response) => {
    setMessage(response)
    setIsTyping(true)
    
    // Add user message to chat
    const userMessage = {
      id: Date.now(),
      text: response,
      sender: 'user',
      timestamp: new Date()
    }
    setChatMessages(prev => [...prev, userMessage])
    
    // Simulate typing and response
    setTimeout(() => {
      setIsTyping(false)
      const botResponse = {
        id: Date.now() + 1,
        text: "Thank you for your message! Let me connect you with our team via WhatsApp.",
        sender: 'bot',
        timestamp: new Date()
      }
      setChatMessages(prev => [...prev, botResponse])
    }, 1500)
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      const userMessage = {
        id: Date.now(),
        text: message,
        sender: 'user',
        timestamp: new Date()
      }
      setChatMessages(prev => [...prev, userMessage])
      
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        const botResponse = {
          id: Date.now() + 1,
          text: "Thank you for your message! Let me connect you with our team via WhatsApp.",
          sender: 'bot',
          timestamp: new Date()
        }
        setChatMessages(prev => [...prev, botResponse])
      }, 1500)
      
      setMessage('')
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Chat Widget Toggle Button - Top Right */}
      <div className="fixed bottom-24 right-11 z-50">
        <div className="relative">
          {/* Main Chat Button */}
          <button
            onClick={() => setShowChat(!showChat)}
            className={`w-12 h-12 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 border-gray-600' : 'bg-white hover:bg-gray-50 border-gray-200'} text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group border-2`}
          >
            <FaComments className={`text-xl ${isDarkMode ? 'text-white' : 'text-primary'}`} />
            
            {/* Pulse Animation */}
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-full animate-ping opacity-20`}></div>
            
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
              <span className="text-xs">💬</span>
            </div>
          </button>

          {/* Tooltip */}
          <div className={`absolute right-16 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
            Quick Chat Support
            <div className={`absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rotate-45`}></div>
          </div>
        </div>
      </div>

      {/* Chat Widget - Bottom Right */}
      {showChat && (
        <div className="fixed bottom-36 right-11 z-50 w-80 max-w-[calc(100vw-3rem)]">
          <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl shadow-2xl border overflow-hidden`}>
            {/* Chat Header */}
            <div className={`${isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-primary to-secondary'} text-white p-4 flex items-center justify-between`}>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${isDarkMode ? 'bg-gray-600' : 'bg-white/20'} rounded-full flex items-center justify-center`}>
                  <FaComments className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Pixdot Support</h3>
                  <p className="text-white/80 text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></span>
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Chat Messages */}
            <div className={`p-4 h-80 overflow-y-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              {/* Welcome Message */}
              <div className="mb-4">
                <div className={`${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-200'} rounded-lg p-3 max-w-xs border`}>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    👋 Hi! How can we help you today?
                  </p>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-1 flex items-center`}>
                    <FaClock className="mr-1" />
                    Just now
                  </p>
                </div>
              </div>

              {/* Chat Messages */}
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`mb-4 ${msg.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}`}>
                  <div className={`${msg.sender === 'user' ? 'bg-primary text-white' : isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-200 text-gray-700'} rounded-lg p-3 max-w-xs border`}>
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-white/70' : isDarkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center`}>
                      <FaClock className="mr-1" />
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="mb-4 flex justify-start">
                  <div className={`${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-200'} rounded-lg p-3 max-w-xs border`}>
                    <div className="flex space-x-1">
                      <div className={`w-2 h-2 ${isDarkMode ? 'bg-gray-400' : 'bg-gray-500'} rounded-full animate-bounce`}></div>
                      <div className={`w-2 h-2 ${isDarkMode ? 'bg-gray-400' : 'bg-gray-500'} rounded-full animate-bounce`} style={{ animationDelay: '0.1s' }}></div>
                      <div className={`w-2 h-2 ${isDarkMode ? 'bg-gray-400' : 'bg-gray-500'} rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Responses */}
              {chatMessages.length === 0 && (
                <div className="mb-4">
                  <p className={`text-xs font-medium mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Quick responses:
                  </p>
                  <div className="space-y-2">
                    {quickResponses.map((response, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickResponse(response)}
                        className={`w-full text-left p-2 rounded-lg text-sm transition-colors border ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border-gray-600' : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200'}`}
                      >
                        {response}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className={`flex-1 px-3 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'}`}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className={`${isDarkMode ? 'bg-primary hover:bg-primary/80 disabled:bg-gray-600' : 'bg-primary hover:bg-primary/80 disabled:bg-gray-400'} text-white p-2 rounded-lg transition-colors`}
                >
                  <FaPaperPlane />
                </button>
              </div>
              
              {/* Direct WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <FaWhatsapp />
                <span>Continue on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 750px) {
          .fixed.bottom-40.right-6 {
            bottom: 1rem;
            right: 1rem;
          }
          
          .fixed.bottom-36.right-11 {
            bottom: 5rem;
            right: 1rem;
            left: 1rem;
            width: auto;
          }
        }
        
        @media (max-width: 480px) {
          .fixed.bottom-36.right-11 {
            bottom: 4.5rem;
          }
        }
      `}</style>
    </>
  )
}

export default ChatWidget
