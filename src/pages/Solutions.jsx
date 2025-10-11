import React, { useEffect, useState } from 'react'
import { FaRocket, FaChartLine, FaUsers, FaShieldAlt, FaLightbulb, FaCog, FaMobile, FaSearch, FaPenFancy, FaBullhorn, FaShoppingCart, FaCloud, FaBrain } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const Solutions = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('solutions-page')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const solutions = [
    {
      icon: FaRocket,
      title: 'Digital Transformation',
      description: 'Complete digital transformation solutions to modernize your business operations.',
      features: ['Process Automation', 'Legacy System Migration', 'Cloud Integration', 'Workflow Optimization'],
      benefits: ['Increased Efficiency', 'Reduced Costs', 'Better Scalability', 'Enhanced Security'],
      category: 'Transformation'
    },
    {
      icon: FaChartLine,
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting solutions to drive data-driven decisions.',
      features: ['Custom Dashboards', 'Real-time Analytics', 'Predictive Modeling', 'KPI Tracking'],
      benefits: ['Better Insights', 'Faster Decisions', 'Improved ROI', 'Competitive Advantage'],
      category: 'Analytics'
    },
    {
      icon: FaUsers,
      title: 'Customer Experience',
      description: 'Comprehensive solutions to enhance customer engagement and satisfaction.',
      features: ['CRM Integration', 'Customer Journey Mapping', 'Personalization', 'Feedback Systems'],
      benefits: ['Higher Satisfaction', 'Increased Loyalty', 'Better Retention', 'More Referrals'],
      category: 'Experience'
    },
    {
      icon: FaShieldAlt,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your business and data.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response'],
      benefits: ['Data Protection', 'Regulatory Compliance', 'Risk Mitigation', 'Business Continuity'],
      category: 'Security'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation Lab',
      description: 'Cutting-edge technology solutions including AI, IoT, and blockchain.',
      features: ['AI Integration', 'IoT Development', 'Blockchain Solutions', 'AR/VR Experiences'],
      benefits: ['Future-Ready', 'Competitive Edge', 'New Revenue Streams', 'Market Leadership'],
      category: 'Innovation'
    },
    {
      icon: FaCog,
      title: 'System Integration',
      description: 'Seamless integration of disparate systems and applications.',
      features: ['API Development', 'Data Synchronization', 'Third-party Integration', 'System Migration'],
      benefits: ['Unified Operations', 'Reduced Complexity', 'Better Data Flow', 'Lower Maintenance'],
      category: 'Integration'
    },
    {
      icon: FaMobile,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for all devices.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Progressive Web Apps'],
      benefits: ['Mobile Presence', 'User Engagement', 'Offline Capability', 'App Store Revenue'],
      category: 'Mobile'
    },
    {
      icon: FaSearch,
      title: 'Search & Discovery',
      description: 'Advanced search and recommendation systems for better user experience.',
      features: ['Search Optimization', 'Recommendation Engines', 'Content Discovery', 'Personalization'],
      benefits: ['Better Findability', 'Increased Engagement', 'Higher Conversion', 'User Satisfaction'],
      category: 'Search'
    },
    {
      icon: FaPenFancy,
      title: 'Content Management',
      description: 'Comprehensive content management and digital asset solutions.',
      features: ['CMS Development', 'Digital Asset Management', 'Content Workflows', 'Multi-channel Publishing'],
      benefits: ['Content Efficiency', 'Brand Consistency', 'Faster Publishing', 'Better Collaboration'],
      category: 'Content'
    },
    {
      icon: FaBullhorn,
      title: 'Marketing Automation',
      description: 'Automated marketing solutions to streamline campaigns and improve ROI.',
      features: ['Email Automation', 'Lead Scoring', 'Campaign Management', 'Performance Tracking'],
      benefits: ['Higher Conversion', 'Reduced Manual Work', 'Better Targeting', 'Improved ROI'],
      category: 'Marketing'
    },
    {
      icon: FaShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with advanced features and integrations.',
      features: ['Online Stores', 'Payment Processing', 'Inventory Management', 'Order Fulfillment'],
      benefits: ['Online Sales', 'Global Reach', '24/7 Availability', 'Scalable Growth'],
      category: 'E-commerce'
    },
    {
      icon: FaCloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Implementation', 'Monitoring & Support'],
      benefits: ['Cost Efficiency', 'Scalability', 'Reliability', 'Global Access'],
      category: 'Cloud'
    }
  ]

  const categories = ['All', 'Transformation', 'Analytics', 'Experience', 'Security', 'Innovation', 'Integration', 'Mobile', 'Search', 'Content', 'Marketing', 'E-commerce', 'Cloud']

  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredSolutions = selectedCategory === 'All' 
    ? solutions 
    : solutions.filter(solution => solution.category === selectedCategory)

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems, processes, and requirements to understand your needs.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a customized solution architecture tailored to your business goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution using agile methodologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Comprehensive testing ensures quality, followed by a smooth launch and go-live support.'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization to ensure peak performance and ROI.'
    }
  ]

  return (
    <div id="solutions-page" className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Digital <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fadeInUp delay-200">
              Comprehensive technology solutions designed to solve complex business 
              challenges and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className={`py-8 border-b ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 animate-slideInUp ${
                  selectedCategory === category
                    ? 'bg-secondary text-white shadow-lg'
                    : isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'} animate-fadeInUp`}>
              Our <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Solutions</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} animate-fadeInUp delay-200`}>
              {selectedCategory === 'All' 
                ? 'Explore our comprehensive range of digital solutions designed to address every aspect of your business needs.'
                : `Specialized ${selectedCategory.toLowerCase()} solutions tailored to your specific requirements.`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border animate-slideInUp ${isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-white border-gray-200'} hover:shadow-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} rounded-2xl flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <solution.icon className="text-white text-2xl" />
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block ${isDarkMode ? 'bg-secondary text-white' : 'bg-secondary text-primary'} text-sm font-semibold px-3 py-1 rounded-full`}>
                    {solution.category}
                  </span>
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-primary'}`}>{solution.title}</h3>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'}`}>Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`rounded-lg p-4 ${isDarkMode ? 'bg-gray-600/50' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-500' : 'border-gray-200'}`}>
                  <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'}`}>Benefits:</h4>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className={`flex items-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <div className={`w-1.5 h-1.5 ${isDarkMode ? 'bg-secondary' : 'bg-secondary'} rounded-full mr-2`}></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
              Our <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Process</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A proven methodology that ensures successful solution delivery and maximum ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className={`text-center ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-2xl p-6 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className={`hidden lg:block absolute top-10 left-full w-full h-0.5 ${isDarkMode ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gradient-to-r from-primary to-secondary'} transform translate-x-4`}></div>
                  )}
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-primary'}`}>{step.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>
              Technology <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Stack</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We use cutting-edge technologies and proven frameworks to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Vue.js', 'Node.js', 'Python', 'Java', 'C#',
              'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'MongoDB',
              'PostgreSQL', 'Redis', 'Elasticsearch', 'GraphQL', 'REST APIs', 'Microservices'
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className={`rounded-lg p-4 mb-3 transition-all duration-200 border ${isDarkMode ? 'bg-gray-700/50 border-gray-600 hover:bg-gray-600 hover:border-gray-500' : 'bg-gray-100 border-gray-200 hover:bg-gray-200 hover:border-gray-300'} transform hover:scale-105`}>
                  <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-primary'}`}>{tech}</span>
                </div>
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
              Ready to Implement Your Solution?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss your requirements and create a custom solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className={`${isDarkMode ? 'bg-white text-primary hover:bg-gray-100' : 'bg-white text-primary hover:bg-gray-100'} font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105`}>
                Start Your Project
              </a>
              <a href="/casestudy" className={`${isDarkMode ? 'border-white text-white hover:bg-white hover:text-primary' : 'border-white text-white hover:bg-white hover:text-primary'} bg-transparent font-semibold py-3 px-6 rounded-lg border-2 transition-all duration-300 transform hover:scale-105`}>
                View Case Studies
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
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  )
}

export default Solutions

