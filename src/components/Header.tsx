import React from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">DigiLedger</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-indigo-600">Features</Link>
            <Link to="/blog" className="text-gray-700 hover:text-indigo-600">Blog</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</Link>
                <button
                  onClick={handleSignOut}
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Sign Out
                </button>
                <span className="text-gray-600">{user.email}</span>
              </>
            ) : (
              <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Sign In
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/features" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Features</Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Blog</Link>
              <Link to="/testimonials" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Testimonials</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</Link>
              {user ? (
                <>
                  <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Dashboard</Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
                  >
                    Sign Out
                  </button>
                  <span className="block px-3 py-2 text-gray-600">{user.email}</span>
                </>
              ) : (
                <Link to="/login" className="block px-3 py-2 bg-indigo-600 text-white rounded-md">Sign In</Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}