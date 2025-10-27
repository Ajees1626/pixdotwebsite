import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes, FaChevronUp, FaGavel, FaShieldAlt, FaLock, FaUserShield, FaFacebookSquare, FaInstagram, FaBehanceSquare, FaWhatsapp, FaPinterestSquare, FaLinkedin } from 'react-icons/fa'
import { MdPhoneCallback, MdMarkEmailRead } from 'react-icons/md'
import { CiLocationArrow1 } from 'react-icons/ci'
import { IoLogoYoutube } from 'react-icons/io'
import { BsTwitterX } from 'react-icons/bs'
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
      { name: 'Website Development', href: '/service/Website Development' },
      { name: 'Digital Marketing', href: '/service/Digital Marketing' },
      { name: 'Packaging Design', href: '/service/Packaging Design' },
      { name: 'App Development', href: '/service/App Development' },
      { name: 'Personal Branding', href: '/service/Personal Branding' },
      { name: 'Brand & Creative', href: '/service/Brand & Creative' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Case Studies', href: '/casestudy' },
      { name: 'contact', href: '/contact' } 
    ],
    industries: [
      { name: 'Health Care ', href: '/industrie/healthcare' },
      { name: 'E-commerce ', href: '/industrie/E-commerce' },
      { name: 'Education ', href: '/industrie/Education' },
      { name: 'Real Estate ', href: '/industrie/real-estate' },
      { name: 'Food ', href: '/industrie/food' },
      { name: 'IT Industry ', href: '/industrie/IT Industry' }
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
    { icon: FaFacebookSquare, href: 'https://www.facebook.com/profile.php?id=61560584369932', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/pixdotsolutions/', label: 'Instagram' },
    { icon: IoLogoYoutube, href: '#', label: 'YouTube' },
    { icon: BsTwitterX, href: 'https://x.com/pixdot24', label: 'Twitter X' },
    { icon: FaBehanceSquare, href: 'https://www.behance.net/pixdotworkup', label: 'Behance' },
    { icon: FaWhatsapp, href: 'https://wa.me/918778996278', label: 'WhatsApp' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/pixdot/', label: 'LinkedIn' }
  ]

  return (
    <>
      <footer id="footer-section" className="relative overflow-hidden">
        {/* Light/Dark Theme Background */}
        {isDarkMode ? (
          <>
            {/* Dark Theme Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/40"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-primary/40"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-primary/40"></div>
          </>
        ) : (
          <>
            {/* Light Theme Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 to-purple-50/30"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/40"></div>
          </>
        )}
        
        <div className={`relative z-10 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          <div className="container-custom">
            {/* Main Footer Content */}
            <div className="section-padding">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* Company Info */}
                <div className={`lg:col-span-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link to="/" className="mb-6 block transform hover:scale-105 transition-transform duration-300">
                    {isDarkMode ? (
                      <img 
                        src="/2.png" 
                        alt="Pixdot Logo" 
                        className="h-20 w-auto"
                      />
                    ) : (
                      <img 
                        src="/1.png" 
                        alt="Pixdot Logo" 
                        className="h-20 w-auto"
                      />
                    )}
                  </Link>
                  <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-8 leading-relaxed text-lg`}>
                    Transforming businesses through innovative digital solutions. 
                    We help companies grow and succeed in the digital world with cutting-edge technology.
                  </p>
                  
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} transform hover:translate-x-2 transition-all duration-300 group`}>
                      <div className="w-14 h-14 flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300">
                        <MdPhoneCallback className={`${isDarkMode ? 'text-secondary hover:text-primary' : 'text-primary hover:text-secondary'} text-xl group-hover:scale-110 transition-all duration-300`} />
                      </div>
                      <div>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Phone</p>
                        <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>+91 87789 96278,+91 87789 64644</p>
                      </div>
                    </div>
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} transform hover:translate-x-2 transition-all duration-300 group`}>
                      <div className="w-14 h-14 flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300">
                        <MdMarkEmailRead className={`${isDarkMode ? 'text-secondary hover:text-primary' : 'text-primary hover:text-secondary'} text-xl group-hover:scale-110 transition-all duration-300`} />
                      </div>
                      <div>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Email</p>
                        <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>info@pixdotsolutions.com</p>
                      </div>
                    </div>
                    <div className={`flex items-center ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} transform hover:translate-x-2 transition-all duration-300 group`}>
                      <div className="w-14 h-14 flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300">
                        <CiLocationArrow1 className={`${isDarkMode ? 'text-secondary hover:text-primary' : 'text-primary hover:text-secondary'} text-xl group-hover:scale-110 transition-all duration-300`} />
                      </div>
                      <div>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Address</p>
                        <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>No:40, First Floor, G.K Industrial Estate,<br />
                        Alapakkam, Porur, Chennai - 600 116.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Services</h3>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link, index) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className={`${isDarkMode ? 'text-gray-200 hover:text-secondary' : 'text-gray-600 hover:text-primary'} transition-all duration-300 transform hover:translate-x-2 block group`}
                        >
                          <span className="group-hover:text-secondary transition-colors duration-300">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Company</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className={`${isDarkMode ? 'text-gray-200 hover:text-secondary' : 'text-gray-600 hover:text-primary'} transition-all duration-300 transform hover:translate-x-2 block group`}
                        >
                          <span className="group-hover:text-secondary transition-colors duration-300">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries */}
                <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Industries</h3>
                  <ul className="space-y-3">
                    {footerLinks.industries.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className={`${isDarkMode ? 'text-gray-200 hover:text-secondary' : 'text-gray-600 hover:text-primary'} transition-all duration-300 transform hover:translate-x-2 block group`}
                        >
                          <span className="group-hover:text-secondary transition-colors duration-300">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            

            {/* Bottom Footer */}
            <div className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} py-8`}>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'} text-center lg:text-left`}>
                  <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>&copy; {currentYear} Pixdot. All rights reserved.</p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">
                    <button
                      onClick={() => setShowTermsModal(true)}
                      className={`${isDarkMode ? 'text-gray-200 hover:text-secondary' : 'text-gray-600 hover:text-primary'} transition-colors duration-300 flex items-center gap-2 group hover:scale-105 transform`}
                    >
                      <FaGavel className={`group-hover:${isDarkMode ? 'text-blue-300' : 'text-blue-600'} transition-colors duration-300`} />
                      Terms & Conditions
                    </button>
                    <Link to="/privacy" className={`${isDarkMode ? 'text-gray-200 hover:text-blue-300' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-300 flex items-center gap-2 group hover:scale-105 transform`}>
                      <FaShieldAlt className={`group-hover:${isDarkMode ? 'text-blue-300' : 'text-blue-600'} transition-colors duration-300`} />
                      Privacy Policy
                    </Link>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex flex-wrap justify-center lg:justify-end gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 group`}
                      aria-label={social.label}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <social.icon size={28} className={`${isDarkMode ? 'text-secondary hover:text-white' : 'text-primary hover:text-secondary'} group-hover:scale-110 transition-all duration-300`} />
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
                {/* Header */}
                <div className="mb-8">
                  <div className={`bg-gradient-to-r ${isDarkMode ? 'from-primary/20 to-secondary/20' : 'from-primary/10 to-secondary/10'} border ${isDarkMode ? 'border-secondary/30' : 'border-secondary/20'} p-6 rounded-lg mb-6`}>
                    <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-3`}>
                      <span className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center text-lg font-bold">P</span>
                      Welcome to Pixdot!
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                      By accessing or using our website (www.pixdotsolutions.com), you agree to the following terms and conditions. Please read them carefully before continuing.
                    </p>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} font-medium`}>
                      Last Updated: October 2025
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      General
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      Pixdot is a creative digital agency offering services in branding, digital marketing, website development, and related areas. 
                      By using our website, you accept our terms and agree to follow them.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      Use of Our Website
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                      You agree not to misuse our website or attempt to disrupt its operation.
                    </p>
                    <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                      <li>All content, visuals, and data on this site are owned by Pixdot and protected by copyright laws.</li>
                      <li>You may not copy, reproduce, or distribute our materials without written permission.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      Services
                    </h3>
                    <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                      <li>All our services are offered based on project discussions and written agreements.</li>
                      <li>Prices and timelines may vary depending on project requirements.</li>
                      <li>Once a project is approved and payment is made, no refunds will be provided unless specifically stated.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      Payments
                    </h3>
                    <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                      <li>All payments should be made as per the agreed proposal or quotation.</li>
                      <li>Any delay in payment may affect project timelines or result in suspension of services.</li>
                      <li>Taxes, if applicable, will be charged extra.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                      Client Responsibilities
                    </h3>
                    <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                      <li>Clients must provide accurate information, materials, and feedback on time.</li>
                      <li>Any delay in providing content or approvals may impact delivery schedules.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                      Intellectual Property
                    </h3>
                    <ul className={`list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                      <li>Final project files will be shared only after full payment.</li>
                      <li>Pixdot retains the right to showcase completed works in our portfolio or social media, unless the client requests otherwise in writing.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
                      Limitation of Liability
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      Pixdot shall not be held responsible for any loss, damage, or delay caused by factors beyond our control 
                      (e.g., internet issues, hosting downtime, or third-party failures).
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
                      Updates to Terms
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      We may update these Terms & Conditions occasionally. Changes will be effective once published on this page.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                     
                    <div className={`bg-gradient-to-r ${isDarkMode ? 'from-primary/20 to-secondary/20' : 'from-primary/10 to-secondary/10'} border ${isDarkMode ? 'border-secondary/30' : 'border-secondary/20'} p-6 rounded-lg`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                          <FaUserShield className="text-white" />
                        </div>
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-primary'}`}>Legal Department</h4>
                      </div>
                      <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <p><strong>Email:</strong> info@pixdotsolutions.com</p>
                        <p><strong>Phone:</strong> +91 87789 96278</p>
                        <p><strong>Address:</strong> No:40, First Floor, G.K Industrial Estate,
                        Alapakkam, Porur, Chennai - 600 116.</p>
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

