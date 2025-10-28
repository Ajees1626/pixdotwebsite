import React, { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and other contact information.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers.`,
  },
  {
    title: 'Information Sharing',
    content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share your information with trusted third parties who assist us in operating our website and conducting our business.`,
  },
  {
    title: 'Data Security',
    content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.`,
  },
  {
    title: 'Cookies and Tracking',
    content: `We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us using the information provided below.`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.`,
  },
]

const Privacy = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState(0)
  const lastUpdated = 'October 2025'

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-2">Privacy <span className="text-white">Policy</span></h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">Your privacy is important to us. Learn how we collect, use, and protect your information.</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-white text-sm border border-white/30">Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Accordions */}
            <div className="lg:col-span-8 space-y-4">
              {sections.map((s, idx) => (
                <div key={idx} className={`${isDarkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl overflow-hidden shadow-sm`}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                    className={`w-full text-left px-5 py-4 flex items-center justify-between ${isDarkMode ? 'text-white' : 'text-primary'} hover:bg-black/5`}
                  >
                    <span className="font-semibold">{s.title}</span>
                    <span className={`ml-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{openIndex === idx ? 'Hide' : 'Show'}</span>
                  </button>
                  {openIndex === idx && (
                    <div className={`px-5 pb-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <p className="leading-7">{s.content}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Contact box */}
              <div className={`${isDarkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6 shadow-sm`}>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'}`}>Contact Us</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>If you have any questions about this privacy policy, please contact us at:</p>
                <div className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'} rounded-lg p-5`}> 
                  <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    <strong>Email:</strong> info@pixdotsolutions.com<br />
                    <strong>Phone:</strong> +91 87789 96278<br />
                    <strong>Address:</strong> No:40, First Floor, G.K Industrial Estate, Alapakkam, Porur, Chennai - 600 116
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Quick links */}
            <aside className="lg:col-span-4 lg:sticky lg:top-20 h-fit">
              <div className={`${isDarkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6 shadow-sm`}>
                <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>On this page</h3>
                <ul className="space-y-2">
                  {sections.map((s, idx) => (
                    <li key={idx}>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(idx)}
                        className={`text-sm underline-offset-4 hover:underline ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-primary'}`}
                      >
                        {s.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  )
}

export default Privacy

