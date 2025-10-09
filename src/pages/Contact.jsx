import React, { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUser, FaBuilding, FaComment } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const Contact = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@pixdot.com', 'support@pixdot.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: ['123 Business Street', 'Suite 100', 'New York, NY 10001'],
      description: 'Visit our office'
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
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

  const offices = [
    {
      city: 'New York',
      address: '123 Business Street, Suite 100',
      phone: '+1 (555) 123-4567',
      email: 'ny@pixdot.com'
    },
    {
      city: 'San Francisco',
      address: '456 Tech Avenue, Floor 5',
      phone: '+1 (555) 234-5678',
      email: 'sf@pixdot.com'
    },
    {
      city: 'London',
      address: '789 Innovation Road, Level 3',
      phone: '+44 20 7123 4567',
      email: 'london@pixdot.com'
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-br from-primary via-secondary to-accent' : 'bg-gradient-to-br from-primary via-secondary to-accent'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Get In <span className="text-white">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fadeInUp delay-300">
              Ready to start your next project? Let's discuss how we can help 
              transform your business with innovative digital solutions.
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
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors`}
                        placeholder="Your full name"
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
                        <FaPhone className="inline mr-2" />
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
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
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
                    <div className={`w-12 h-12 ${isDarkMode ? 'bg-gradient-to-br from-primary via-secondary to-accent' : 'bg-gradient-to-br from-primary via-secondary to-accent'} rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-lg`}>
                      <info.icon className="text-white text-xl" />
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

      {/* Office Locations */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
              Our <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Offices</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              We have offices worldwide to serve our global clientele with local expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-4`}>{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-secondary mr-3 mt-1" />
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="text-secondary mr-3" />
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="text-secondary mr-3" />
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
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
      <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-br from-primary via-secondary to-accent' : 'bg-gradient-to-br from-primary via-secondary to-accent'} text-white relative overflow-hidden`}>
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
            </div>
          </div>
        </div>
      </section>
      
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
