const Pricing = () => {
    return (
      <div id = "pricing" className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Affordable <span className="text-blue-600">Pricing Packages</span>
          </h2>
  
          {/* Pricing Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Onetime Package */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-3xl font-bold text-gray-800">
                £40<span className="text-base font-medium text-gray-600">/per Day</span>
              </h3>
              <p className="mt-2 text-xl font-semibold text-gray-700">
                Onetime Package
              </p>
              <p className="text-gray-600 mt-4">
                One-time laundry and dry-cleaning package for £40—premium care included.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>Laundry Service</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-red-500">
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <span>Pick-up Services</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-red-500">
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <span>Professional Staff</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>24/7 Full Support</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
              <p className="mt-2 text-sm text-gray-400 text-center">
                *Terms and Conditions apply
              </p>
            </div>
  
            {/* Monthly Package */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-3xl font-bold text-gray-800">
                £200<span className="text-base font-medium text-gray-600">/per Month</span>
              </h3>
              <p className="mt-2 text-xl font-semibold text-gray-700">
                Monthly Package
              </p>
              <p className="text-gray-600 mt-4">
                Enjoy our monthly laundry and dry-cleaning package for just £200.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>Laundry Service</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>Pick-up Services</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-red-500">
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <span>Professional Staff</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>24/7 Full Support</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
              <p className="mt-2 text-sm text-gray-400 text-center">
                *Terms and Conditions apply
              </p>
            </div>
  
            {/* Annual Package */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-3xl font-bold text-gray-800">
                £150<span className="text-base font-medium text-gray-600">/per Month</span>
              </h3>
              <p className="mt-2 text-xl font-semibold text-gray-700">
                Annual Package
              </p>
              <p className="text-gray-600 mt-4">
                Annual package at £1800: Unlimited laundry and dry-cleaning services all year.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>Laundry Service</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>Pick-up Services</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>Professional Staff</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>24/7 Full Support</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
              <p className="mt-2 text-sm text-gray-400 text-center">
                *Terms and Conditions apply
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Pricing;
  