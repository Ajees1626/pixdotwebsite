import React, { useEffect, useState } from 'react'
import { FaShieldAlt, FaUserShield, FaLock, FaEye, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const Privacy = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'} py-20`}>
        {/* Background Effects */}
        {isDarkMode ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/40"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-primary/40"></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 to-purple-50/30"></div>
          </>
        )}
        
        <div className="container-custom relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-white text-3xl" />
              </div>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Privacy Policy
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              At Pixdot, we respect your privacy. This policy explains how we collect, use, and protect your information when you visit our website.
            </p>
            <div className={`mt-6 inline-flex items-center gap-2 px-6 py-3 ${isDarkMode ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'} rounded-full font-medium`}>
              <FaShieldAlt />
              Last Updated: October 2025
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              
              {/* Information We Collect */}
              <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="border-l-4 border-secondary pl-6">
                  <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-3`}>
                    <span className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center text-lg font-bold">1</span>
                    Information We Collect
                  </h2>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
                    We may collect the following:
                  </p>
                  <div className="space-y-4">
                    <div className={`flex items-start gap-4 p-4 ${isDarkMode ? 'bg-gray-700/50' : 'bg-white'} rounded-lg border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaUserShield className="text-primary text-sm" />
                      </div>
                      <div>
                        <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Contact Information</h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Your name, email, phone number, and company name (when you contact us).
                        </p>
                      </div>
                    </div>
                    <div className={`flex items-start gap-4 p-4 ${isDarkMode ? 'bg-gray-700/50' : 'bg-white'} rounded-lg border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaEye className="text-primary text-sm" />
                      </div>
                      <div>
                        <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Website Usage Data</h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Website usage data through cookies or analytics tools.
                        </p>
                      </div>
                    </div>
                    <div className={`flex items-start gap-4 p-4 ${isDarkMode ? 'bg-gray-700/50' : 'bg-white'} rounded-lg border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaLock className="text-primary text-sm" />
                      </div>
                      <div>
                        <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Project Files</h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Project-related files or documents you share voluntarily.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="border-l-4 border-secondary pl-6">
                  <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-3`}>
                    <span className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center text-lg font-bold">2</span>
                    How We Use Your Information
                  </h2>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
                    We use your information to:
                  </p>
                  <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-3`}>
                    <li>Respond to your inquiries and provide requested services.</li>
                    <li>Improve our website experience and service quality.</li>
                    <li>Send updates or offers (only if you've opted in).</li>
                  </ul>
                </div>
              </div>

              {/* Data Protection */}
              <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="border-l-4 border-secondary pl-6">
                  <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-3`}>
                    <span className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center text-lg font-bold">3</span>
                    Data Protection
                  </h2>
                  <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-3`}>
                    <li>We use secure systems to protect your personal information.</li>
                    <li>We never sell, rent, or share your data with third parties for marketing purposes.</li>
                    <li>Only authorized team members can access client information.</li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="border-l-4 border-secondary pl-6">
                  <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-3`}>
                    <span className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center text-lg font-bold">4</span>
                    Cookies
                  </h2>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    Our website may use cookies to improve browsing experience. You can disable cookies in your browser settings if you prefer.
                  </p>
                </div>
              </div>

              {/* Third-Party Links */}
              <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="border-l-4 border-secondary pl-6">
                  <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-3`}>
                    <span className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center text-lg font-bold">5</span>
                    Third-Party Links
                  </h2>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    Our site may include links to other websites. We are not responsible for their content or privacy practices.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="border-l-4 border-secondary pl-6">
                  <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-3`}>
                    <span className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center text-lg font-bold">6</span>
                    Your Rights
                  </h2>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
                    You can request to:
                  </p>
                  <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-3`}>
                    <li>Access, correct, or delete your personal information.</li>
                    <li>Unsubscribe from our communications anytime.</li>
                  </ul>
                </div>
              </div>

              {/* Contact Us */}
              <div className={`transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="border-l-4 border-secondary pl-6">
                  <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-3`}>
                    <span className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center text-lg font-bold">7</span>
                    Contact Us
                  </h2>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
                    If you have any questions about this Privacy Policy or Terms, reach us at:
                  </p>
                  <div className={`bg-gradient-to-r ${isDarkMode ? 'from-primary/20 to-secondary/20' : 'from-primary/10 to-secondary/10'} border ${isDarkMode ? 'border-secondary/30' : 'border-secondary/20'} p-8 rounded-lg`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <FaUserShield className="text-white text-xl" />
                      </div>
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'}`}>Privacy & Legal Department</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <FaEnvelope className={`text-secondary ${isDarkMode ? 'text-secondary' : 'text-primary'}`} />
                          <div>
                            <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Email</p>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>info@pixdotsolutions.com</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaGlobe className={`text-secondary ${isDarkMode ? 'text-secondary' : 'text-primary'}`} />
                          <div>
                            <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Website</p>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>www.pixdotsolutions.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <FaMapMarkerAlt className={`text-secondary ${isDarkMode ? 'text-secondary' : 'text-primary'}`} />
                          <div>
                            <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Location</p>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Chennai, Tamil Nadu, India</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaPhone className={`text-secondary ${isDarkMode ? 'text-secondary' : 'text-primary'}`} />
                          <div>
                            <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Phone</p>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>+91 87789 96278</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
