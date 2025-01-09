import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Frequently <span className="text-blue-600">Asked Questions</span>
        </h2>

        {/* Contact Details */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <span className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h11M9 21V3m8 8h2m-2-6h.01M21 16h-6m2-3v6"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-medium text-gray-700">Contact</h4>
                  <p className="text-gray-500">(+44) 117 2345678</p>
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <span className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12H8m4-8h.01M20 20H4"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-medium text-gray-700">Email</h4>
                  <p className="text-gray-500">admin123@mail.com</p>
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <span className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 21V19m-7-8h6m8-3v4M8 3H4"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-medium text-gray-700">Address</h4>
                  <p className="text-gray-500">
                    23 Willow Crescent, Greenwich, London, UK.
                  </p>
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <span className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h11m1 5m1m3"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-medium text-gray-700">
                    Working Hours
                  </h4>
                  <p className="text-gray-500">
                    Monday - Sunday (9:00 AM to 10:00 PM)
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column - FAQ */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {[
              "How does Cleano Laundry work?",
              "Is there minimum spending required for free delivery?",
              "How long will I be without my clothes?",
              "What forms of payment do you accept?",
              "Do I have to provide my own laundry bag?",
              "Can I order by phone?",
              "Do you wash my clothes together with other people’s clothes?",
            ].map((question, index) => (
              <div
                key={index}
                className="border-b py-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium text-gray-700">
                    {question}
                  </h4>
                  <span>
                    {activeIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm">
                    Answer for {question} will go here. Replace this with the
                    actual content.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
