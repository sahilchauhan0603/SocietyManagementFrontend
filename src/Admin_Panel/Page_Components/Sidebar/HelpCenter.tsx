import { LifeBuoy, Mail, MessageSquare, Phone, Settings, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I add a new society?",
      answer: "Navigate to the Societies section and click 'Add New Society'."
    },
    {
      question: "How can I manage member permissions?",
      answer: "Go to Member Management and use the role assignment tool."
    },
    {
      question: "Where do I post news updates?",
      answer: "Use the News section in the sidebar to create and publish updates."
    },
    {
      question: "How do I schedule an event?",
      answer: "The Events section allows you to create and manage all society events."
    }
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: "Email Support",
      description: "Get help via email with our support team",
      link: "mailto:support@bpit-admin.edu",
      action: "Send Email"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: "Phone Support",
      description: "Call us during business hours (9AM-5PM)",
      link: "tel:+911234567890",
      action: "Call Now"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
      title: "Live Chat",
      description: "Instant messaging with our support agents",
      link: "#live-chat",
      action: "Start Chat"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar would be included here */}
      {/* <Sidebar /> */}
      
      <div className="flex-1 p-6 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <LifeBuoy className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Help Center</h1>
          </div>
          <p className="text-gray-600">Find answers to common questions or contact our support team</p>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search help articles..."
              className="w-full px-5 py-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Quick Help Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-500" />
                <h2 className="text-xl font-semibold">Documentation</h2>
              </div>
              <p className="text-gray-600 mb-4">Browse our comprehensive admin guides and tutorials.</p>
              <Link to="/docs" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                View Documentation <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-purple-500" />
                <h2 className="text-xl font-semibold">Troubleshooting</h2>
              </div>
              <p className="text-gray-600 mb-4">Solutions for common technical issues and errors.</p>
              <Link to="/troubleshooting" className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center">
                Troubleshoot Issues <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <details className="group">
                  <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                    <h3 className="font-medium text-gray-800">{faq.question}</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  {method.icon}
                  <h3 className="text-lg font-semibold">{method.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <a 
                  href={method.link} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  {method.action} <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;