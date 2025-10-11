import React, { useState, useEffect } from 'react'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          // Wait a bit more for smooth transition
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(() => {
              onLoadingComplete()
            }, 500) // Wait for fade out animation
          }, 300)
          return 10000
        }
        return prev + Math.random() * 15 + 5 // Random increment for realistic loading
      })
    }, 10000)

    return () => clearInterval(progressInterval)
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-pulse"></div>
        <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 bg-white/35 rounded-full animate-bounce"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo Container */}
        <div className="relative mb-8">
          {/* Logo with multiple animation layers */}
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-white/20 animate-ping"></div>
            <div className="absolute inset-2 w-28 h-28 mx-auto rounded-full bg-white/10 animate-pulse"></div>
            
            {/* Logo image */}
            <div className="relative w-24 h-24 mx-auto bg-white rounded-full p-4 shadow-2xl animate-bounce">
              <img 
                src="/1.png" 
                alt="Pixdot Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Rotating border */}
            <div className="absolute inset-0 w-32 h-32 mx-auto border-2 border-white/30 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-white mb-2 animate-fadeInUp">
            PIXDOT
          </h1>
          <p className="text-white/80 text-lg animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            Creative Solutions
          </p>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-white h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <div className="text-white/70 text-sm mt-2 animate-pulse">
            {Math.round(loadingProgress)}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-white/60 text-sm animate-pulse">
          Loading amazing experiences...
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
        
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-logoFloat {
          animation: logoFloat 2s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen
