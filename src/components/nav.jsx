export const Nav = () =>{
    return(
      <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 flex items-center space-x-2">
          <div className="bg-blue-200 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a7 7 0 11-5.84 11.36l-1.58 2.72a.5.5 0 01-.58.24.5.5 0 01-.34-.44v-4.68A7 7 0 019 2zm1 8V4.5a.5.5 0 00-1 0V10a.5.5 0 00.25.43l2.5 1.5a.5.5 0 00.5-.86L10 10z" />
            </svg>
          </div>
          <span>Reza Laundry</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700">
          <a href="#services" className="hover:text-blue-600 transition">
            Services
          </a>
          <a href="#pricing" className="hover:text-blue-600 transition">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            About us
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            FAQs
          </a>
        </nav>

        {/* Contact Us Button */}
        <a
          href="#"
          className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Contact Us
        </a>

        {/* Mobile Menu */}
        <button
          className="md:hidden flex items-center bg-blue-600 text-white px-3 py-2 rounded-full"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
    )
}