import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

 
return (
  <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm border-b">
    <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div>
           <img src="/favicon.svg" alt="CodeFlow" className="h-10 w-10" />
          </div>
          <span className="text-lg sm:text-xl md:text-2xl font-medium">
           <span className="text-white">Code</span>
           <span className="text-blue-500">Flow</span>
          </span>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#features" className="text-gray-300 hover:text-yellow-500 text-sm lg:text-base">
            Features
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-yellow-500 text-sm lg:text-base">
            Pricing
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-yellow-500 text-sm lg:text-base">
            Testimonials
          </a> 
        </div>

        <button className="md:hidden p-2 text-gray-300 hover:text-yellow-500" 
        onClick={() => setMobileMenuIsOpen((prev) => !prev)}
        >
          {mobileMenuIsOpen ? (
            <X />
          ) : (
            <Menu className="w-5 h-5 sm:h-6 sm:w-6 "></Menu>
          )}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    
    {mobileMenuIsOpen && (
      <div className="md:hidden bg-slate-950/90 backdrop-blur-sm border-t">
        <div className="px-4 py-2 space-y-2">
          <a href="#features" className="block text-gray-300 hover:text-yellow-500 text-sm lg:text-base">
            Features
          </a>
          <a href="#pricing" className="block text-gray-300 hover:text-yellow-500 text-sm lg:text-base">
            Pricing
          </a>
          <a href="#testimonials" className="block text-gray-300 hover:text-yellow-500 text-sm lg:text-base">
            Testimonials
          </a>
        </div>
      </div>
    )}
  </nav>
);
}
