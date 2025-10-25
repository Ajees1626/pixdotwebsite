import React, { useState, useEffect } from 'react'
import { FaPhoneAlt , FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUser, FaBuilding, FaComment, FaWhatsapp, FaTelegram } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const Contact = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    setIsVisible(true)
    
    // Test backend connection on component mount
    const testBackendConnection = async () => {
      try {
        const response = await fetch('https://newpixdotbackend.onrender.com/', {
          method: 'GET',
          mode: 'cors'
        })
        console.log('Backend test response:', response.status)
        if (response.ok) {
          const text = await response.text()
          console.log('Backend response:', text)
        }
      } catch (error) {
        console.error('Backend connection test failed:', error)
      }
    }
    
    testBackendConnection()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      console.log('Submitting form data:', formData)
      
      const response = await fetch('https://newpixdotbackend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()
      console.log('Response data:', result)

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitError(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FaPhoneAlt ,
      title: 'Phone',
      details: ['+91 87789 96278', '+91 87789 64644'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@pixdotsolutions.com', 'pixdotsolutions@gmail.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: ['No:40, First Floor,', 'G.K Industrial Estate,Alapakkam,', 'Porur, Chennai - 600 116.'],
      description: 'Visit our office'
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:30 AM - 6:30 PM', 'Saturday: 10:00 AM - 5:00 PM', 'Sunday: Closed'],
      description: 'We\'re here to help'
    }
  ]

  const services = [
    'Web Development',
    'Mobile App Development',
    'Digital Marketing',
    'SEO Services',
    'UI/UX Design',
    'E-commerce Solutions',
    'Cloud Solutions',
    'AI Integration',
    'Other'
  ]

   

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Get In <span className="text-white">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fadeInUp delay-300">
            Let’s connect and grow your brand together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'} animate-fadeInUp`}>Send us a Message</h2>
              
              {isSubmitted ? (
                <div className={`${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-6 text-center`}>
                  <div className={`w-16 h-16 ${isDarkMode ? 'bg-green-800/30' : 'bg-green-100'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <FaPaperPlane className="text-green-600 text-2xl" />
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-green-300' : 'text-green-800'} mb-2`}>Message Sent Successfully!</h3>
                  <p className="text-green-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2`}>
                        <FaUser className="inline mr-2" />
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors`}
                        placeholder="Your first name"
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2`}>
                        <FaUser className="inline mr-2" />
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors`}
                        placeholder="Your last name"
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2`}>
                        <FaEnvelope className="inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors`}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2`}>
                        <FaBuilding className="inline mr-2" />
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors`}
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2`}>
                        <FaPhoneAlt  className="inline mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors`}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2`}>
                      <FaComment className="inline mr-2" />
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors`}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2`}>
                      <FaComment className="inline mr-2" />
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors resize-none`}
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  {submitError && (
                    <div className={`${isDarkMode ? 'bg-red-900/20 border-red-700' : 'bg-red-50 border-red-200'} border rounded-lg p-4`}>
                      <p className="text-red-600 text-sm">{submitError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>Contact Information</h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className={`text-secondary text-xl`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-2`}>{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{detail}</p>
                        ))}
                      </div>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-2`}>{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
              Find <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Us</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Visit our office or get in touch with us for your next project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="relative">
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.7369330389853!2d80.16283126955499!3d13.03899899920518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526118c60dabc9%3A0x9e2278ded5a253e0!2s40%2C%20Arcot%20Rd%2C%20Ganesh%20Nagar%2C%20Porur%2C%20Chennai%2C%20Tamil%20Nadu%20600116!5e0!3m2!1sen!2sin!4v1752575633205!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pixdot Solutions Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
                  Head Office
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-secondary mr-3 mt-1" />
                    <div>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      No:40, First Floor,G.K Industrial Estate,<br />
                      Alapakkam, Porur, Chennai - 600 116.<br />
                      Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt  className="text-secondary mr-3" />
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>+91 87789 96278 , +91 87789 64644</p>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="text-secondary mr-3" />
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>info@pixdotsolutions.com</p>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="text-secondary mr-3" />
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Mon - Fri: 9:30 AM - 6:30 PM</p>
                  </div>
                </div>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaWhatsapp className="text-green-500 mr-3" />
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>+91 87789 96278</p>
                  </div>
                  <div className="flex items-center">
                    <FaTelegram className="text-blue-500 mr-3" />
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>info@pixdotsolutions.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
              Frequently Asked <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Questions</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the planning phase."
              },
              {
                question: "What is your development process?",
                answer: "We follow an agile methodology with regular check-ins, iterative development, and continuous testing. Our process includes discovery, design, development, testing, and launch phases."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive support packages including maintenance, updates, security monitoring, and technical support. Support plans are tailored to your specific needs."
              },
              {
                question: "What technologies do you work with?",
                answer: "We work with modern technologies including React, Vue.js, Node.js, Python, AWS, and more. We choose the best technology stack based on your project requirements."
              },
              {
                question: "How do you ensure project quality?",
                answer: "We have rigorous quality assurance processes including code reviews, automated testing, performance optimization, and security audits. Our team follows industry best practices."
              }
            ].map((faq, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-lg p-6 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-lg transition-all duration-300`}>
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-3`}>{faq.question}</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss your ideas and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className={`${isDarkMode ? 'bg-white text-primary hover:bg-gray-100' : 'bg-white text-primary hover:bg-gray-100'} font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105`}>
                Get Started Today
              </a>
              <a href="/casestudy" className={`${isDarkMode ? 'border-white text-white hover:bg-white hover:text-primary' : 'border-white text-white hover:bg-white hover:text-primary'} bg-transparent font-semibold py-3 px-6 rounded-lg border-2 transition-all duration-300 transform hover:scale-105`}>
                View Our Work
              </a>
               <a href="https://newpixdotbackend.onrender.com" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'border-white text-white hover:bg-white hover:text-primary' : 'border-white text-white hover:bg-white hover:text-primary'} bg-transparent font-semibold py-3 px-6 rounded-lg border-2 transition-all duration-300 transform hover:scale-105`}>
                 Backend API
               </a>
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
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  )
 
}
export default Contact