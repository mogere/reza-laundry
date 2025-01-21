const PricingCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      <h3 className="text-3xl font-bold text-gray-800">
      Ksh 100<span className="text-base font-medium text-gray-600">/per Kg</span>
      </h3>
      <p className="mt-2 text-xl font-semibold text-gray-700">
        Onetime Package
      </p>
      <p className="text-gray-600 mt-4">
        One-time laundry and dry-cleaning package for Ksh 100—premium care included.

        {/* •Towels curtains upholstery for homes and businesses
•Wash and fold: same day pick up and delivery
•Dry cleaning: Expert care for delicate garments.
•ironing and pressing
•Stain removal including ink,rust,food,coffee and others 
•whitening white garments 
•fabric softening  */}

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
          <span>Wash and fold</span>
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
          <span>same day pick up and delivery</span>
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
          <span>ironing and pressing</span>
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
          <span>Stain removal including ink,rust,food,coffee and others </span>
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
          <span>whitening white garments </span>
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
          <span>fabric softening </span>
        </li>
      </ul>
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
        Get Started
      </button>
      <p className="mt-2 text-sm text-gray-400 text-center">
        *Terms and Conditions apply
      </p>
    </div>
  );
};

export default PricingCard;
