import React, { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Privacy = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Privacy <span className="text-white">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fadeInUp delay-300">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
              <div className="prose prose-lg max-w-none">
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
                  Information We Collect
                </h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us for support. This may include your name, email address, 
                  phone number, and other contact information.
                </p>

                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
                  How We Use Your Information
                </h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  We use the information we collect to provide, maintain, and improve our services, 
                  process transactions, send you technical notices and support messages, and communicate 
                  with you about products, services, and promotional offers.
                </p>

                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
                  Information Sharing
                </h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this privacy policy. We may share your 
                  information with trusted third parties who assist us in operating our website and 
                  conducting our business.
                </p>

                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
                  Data Security
                </h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet or electronic storage is 100% secure.
                </p>

                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
                  Cookies and Tracking
                </h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  We use cookies and similar tracking technologies to enhance your experience on our 
                  website. You can control cookie settings through your browser preferences.
                </p>

                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
                  Your Rights
                </h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  You have the right to access, update, or delete your personal information. You may also 
                  opt out of certain communications from us. To exercise these rights, please contact us 
                  using the information provided below.
                </p>

                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
                  Changes to This Policy
                </h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  We may update this privacy policy from time to time. We will notify you of any changes 
                  by posting the new privacy policy on this page and updating the "Last Updated" date.
                </p>

                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
                  Contact Us
                </h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <div className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-lg p-6`}>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <strong>Email:</strong> info@pixdotsolutions.com<br />
                    <strong>Phone:</strong> +91 87789 96278<br />
                    <strong>Address:</strong> No:40, First Floor, G.K Industrial Estate, Alapakkam, Porur, Chennai - 600 116
                  </p>
                </div>
              </div>
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
        
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  )
}

export default Privacy

