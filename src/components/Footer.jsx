import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes, FaChevronUp, FaGavel, FaShieldAlt, FaLock, FaUserShield } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const Footer = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('footer-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '/service' },
      { name: 'Digital Marketing', href: '/service' },
      { name: 'SEO Services', href: '/service' },
      { name: 'UI/UX Design', href: '/service' },
      { name: 'Mobile Apps', href: '/service' },
      { name: 'Cloud Solutions', href: '/service' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Case Studies', href: '/casestudy' },
      { name: 'Careers', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'News', href: '/news' }
    ],
    industries: [
      { name: 'Healthcare', href: '/industrie' },
      { name: 'Finance', href: '/industrie' },
      { name: 'E-commerce', href: '/industrie' },
      { name: 'Education', href: '/industrie' },
      { name: 'Real Estate', href: '/industrie' },
      { name: 'Manufacturing', href: '/industrie' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Status Page', href: '/status' },
      { name: 'Contact Support', href: '/contact' }
    ]
  }

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' }
  ]

  return (
    <>
      <footer id="footer-section" className="relative overflow-hidden">
        {/* Light/Dark Theme Background */}
        {isDarkMode ? (
          <>
            {/* Dark Theme Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-primary/20"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black/40"></div>
          </>
        ) : (
          <>
            {/* Light Theme Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/80"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20"></div>
          </>
        )}
        
        <div className={`relative z-10 ${isDarkMode ? 'text-white' : 'text-white'}`}>
          <div className="container-custom">
            {/* Main Footer Content */}
            <div className="section-padding">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* Company Info */}
                <div className={`lg:col-span-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link to="/" className="mb-6 block transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/3.png" 
                      alt="Pixdot Logo" 
                      className="h-20 w-auto"
                    />
                  </Link>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-white/90'} mb-8 leading-relaxed text-lg`}>
                    Transforming businesses through innovative digital solutions. 
                    We help companies grow and succeed in the digital world with cutting-edge technology.
                  </p>
                  
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-white/90'} transform hover:translate-x-2 transition-transform duration-300 group`}>
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <FaPhone className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p>+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-white/90'} transform hover:translate-x-2 transition-transform duration-300 group`}>
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary to-white rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <FaEnvelope className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p>info@pixdot.com</p>
                      </div>
                    </div>
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-white/90'} transform hover:translate-x-2 transition-transform duration-300 group`}>
                      <div className="w-12 h-12 bg-gradient-to-r from-white to-primary rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <FaMapMarkerAlt className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Address</p>
                        <p>123 Business St, City, State 12345</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">Services</h3>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link, index) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-white/90 hover:text-white'} transition-all duration-300 transform hover:translate-x-2 block group`}
                        >
                          <span className="group-hover:text-secondary transition-colors duration-300">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">Company</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-white/90 hover:text-white'} transition-all duration-300 transform hover:translate-x-2 block group`}
                        >
                          <span className="group-hover:text-secondary transition-colors duration-300">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries */}
                <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">Industries</h3>
                  <ul className="space-y-3">
                    {footerLinks.industries.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-white/90 hover:text-white'} transition-all duration-300 transform hover:translate-x-2 block group`}
                        >
                          <span className="group-hover:text-secondary transition-colors duration-300">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className={`border-t ${isDarkMode ? 'border-white/20' : 'border-white/30'} py-12`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                    Stay Updated
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-white/90'} text-lg`}>
                    Subscribe to our newsletter for the latest updates, tips, and industry insights.
                  </p>
                </div>
                <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className={`flex-1 px-6 py-4 rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-white/20'} backdrop-blur-sm border ${isDarkMode ? 'border-white/20' : 'border-white/30'} text-white ${isDarkMode ? 'placeholder-gray-300' : 'placeholder-white/70'} focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent`}
                    />
                    <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className={`border-t ${isDarkMode ? 'border-white/20' : 'border-white/30'} py-8`}>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className={`${isDarkMode ? 'text-gray-300' : 'text-white/90'} text-center lg:text-left`}>
                  <p>&copy; {currentYear} Pixdot. All rights reserved.</p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">
                    <button
                      onClick={() => setShowTermsModal(true)}
                      className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-white/90 hover:text-white'} transition-colors duration-300 flex items-center gap-2 group`}
                    >
                      <FaGavel className="group-hover:text-secondary transition-colors duration-300" />
                      Terms & Conditions
                    </button>
                    <Link to="/privacy" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-white/90 hover:text-white'} transition-colors duration-300 flex items-center gap-2 group`}>
                      <FaShieldAlt className="group-hover:text-secondary transition-colors duration-300" />
                      Privacy Policy
                    </Link>
                    <Link to="/cookies" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-white/90 hover:text-white'} transition-colors duration-300 flex items-center gap-2 group`}>
                      <FaLock className="group-hover:text-secondary transition-colors duration-300" />
                      Cookie Policy
                    </Link>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-white/20 hover:bg-white/30'} backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border ${isDarkMode ? 'border-white/20' : 'border-white/30'}`}
                      aria-label={social.label}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <social.icon size={18} className="text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowTermsModal(false)}
          ></div>
          
          {/* Modal */}
          <div className={`relative ${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaGavel className="text-xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Terms & Conditions</h2>
                    <p className="text-white/80 text-sm">Legal Information</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-90"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="space-y-8">
                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      Acceptance of Terms
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      By accessing and using Pixdot's services, you accept and agree to be bound by the terms and provision of this agreement. 
                      If you do not agree to abide by the above, please do not use this service.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      Use License
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                      Permission is granted to temporarily download one copy of the materials on Pixdot's website for personal, 
                      non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to reverse engineer any software contained on the website</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      Service Description
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      Pixdot provides digital solutions including but not limited to web development, mobile applications, 
                      digital marketing, and consulting services. We reserve the right to modify or discontinue any service 
                      at any time without notice.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      User Responsibilities
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      Users are responsible for providing accurate information and maintaining the confidentiality of their account credentials. 
                      Users must not use our services for any unlawful purpose or in any way that could damage, disable, or impair our services.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                      Intellectual Property
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      All content, trademarks, and intellectual property on this website are the property of Pixdot or its licensors. 
                      Users may not reproduce, distribute, or create derivative works without explicit written permission.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                      Privacy Policy
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, 
                      to understand our practices regarding the collection and use of your personal information.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
                      Limitation of Liability
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      In no event shall Pixdot or its suppliers be liable for any damages (including, without limitation, 
                      damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                      to use the materials on Pixdot's website.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
                      Governing Law
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction 
                      in which Pixdot operates and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">9</span>
                      Changes to Terms
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      Pixdot reserves the right to revise these terms of service at any time without notice. By using this website, 
                      you are agreeing to be bound by the then current version of these terms of service.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">10</span>
                      Contact Information
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                      If you have any questions about these Terms & Conditions, please contact us at:
                    </p>
                    <div className={`bg-gradient-to-r ${isDarkMode ? 'from-primary/20 to-secondary/20' : 'from-primary/10 to-secondary/10'} border ${isDarkMode ? 'border-secondary/30' : 'border-secondary/20'} p-6 rounded-lg`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                          <FaUserShield className="text-white" />
                        </div>
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-primary'}`}>Legal Department</h4>
                      </div>
                      <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <p><strong>Email:</strong> legal@pixdot.com</p>
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong>Address:</strong> 123 Business St, City, State 12345</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className={`bg-gradient-to-r ${isDarkMode ? 'from-gray-800 to-gray-900' : 'from-gray-50 to-gray-100'} p-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                  <FaShieldAlt className="text-secondary" />
                  <span>Last updated: {new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowTermsModal(false)}
                    className={`px-6 py-2 ${isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} rounded-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Close
                  </button>
                  <button
                    onClick={() => setShowTermsModal(false)}
                    className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <FaShieldAlt />
                    I Agree
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Custom Animations */}
      <style jsx>{`
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
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .delay-800 {
          animation-delay: 0.8s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  )
}

export default Footer

