import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Bell, Globe, ArrowRight, Shield, Users, Clock } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="relative">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Manage Your Business Finances Digitally
                </h1>
                <p className="text-xl mb-8">
                  Transform your business accounting with our powerful digital ledger solution. 
                  Track payments, manage customers, and grow your business.
                </p>
                <div className="flex space-x-4">
                  <Link 
                    to="/get-started"
                    className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Started Free
                  </Link>
                  <Link 
                    to="/features"
                    className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Digital ledger dashboard showing business analytics"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Everything You Need to Manage Your Business
              </h2>
              <p className="text-xl text-gray-600">
                Powerful features to help you track, manage, and grow your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <BookOpen className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Digital Ledger</h3>
                <p className="text-gray-600">
                  Maintain digital records of all your transactions with easy categorization and search.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <Bell className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Payment Reminders</h3>
                <p className="text-gray-600">
                  Automated payment reminders to help you collect payments on time.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <Globe className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multi-language Support</h3>
                <p className="text-gray-600">
                  Use the app in your preferred language with support for multiple languages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose DigiLedger?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-indigo-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                      <p className="text-gray-600">
                        Your data is encrypted and securely stored with regular backups.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-indigo-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Multi-user Access</h3>
                      <p className="text-gray-600">
                        Give access to your team members with custom permissions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-indigo-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                      <p className="text-gray-600">
                        Our support team is always available to help you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaborating on financial analysis"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of businesses already using DigiLedger
            </p>
            <Link 
              to="/get-started"
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}