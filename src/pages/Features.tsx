import React from 'react';
import { 
  BookOpen, Bell, Globe, Shield, Users, Clock,
  PieChart, Smartphone, CreditCard, Cloud, Mail, Settings
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Digital Ledger",
      description: "Keep track of all your business transactions digitally with easy categorization and search capabilities."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Payment Reminders",
      description: "Set up automated payment reminders for your customers and never miss a payment again."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-language Support",
      description: "Use the application in your preferred language with support for multiple regional languages."
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Business Analytics",
      description: "Get detailed insights into your business performance with comprehensive analytics and reports."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App",
      description: "Access your business data on the go with our mobile application for iOS and Android."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Online Payments",
      description: "Accept payments online and reconcile them automatically with your ledger."
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Backup",
      description: "Your data is automatically backed up to the cloud for safe keeping."
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Invoice Generation",
      description: "Create and send professional invoices to your customers directly from the application."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Customization",
      description: "Customize the application according to your business needs with flexible settings."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Powerful Features for Your Business
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover all the tools and features that make DigiLedger the perfect solution for your business accounting needs.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-indigo-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Businesses Trust DigiLedger
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of businesses that rely on DigiLedger for their accounting needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Bank-grade security with regular backups and data encryption
              </p>
            </div>

            <div className="text-center p-6">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-600">
                Multiple user access with custom permissions
              </p>
            </div>

            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer support to help you
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}