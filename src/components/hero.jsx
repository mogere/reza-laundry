export const Hero = () =>{
    return(
      <div className="flex-grow flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Discover the Next <br />
            Evolution of <span className="text-blue-600">Laundry</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            You can use our services in any convenient way – the choice is
            yours.
          </p>
          <button className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition">
            Book Your Order
          </button>
          <div className="mt-6 flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img
                src="/_assets/reviewer1.jpg"
                alt="Reviewer"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/_assets/reviewer2.jpg"
                alt="Reviewer"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/_assets/reviewer3.jpg"
                alt="Reviewer"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <div className="text-gray-700">
              <span className="font-bold">900+ Reviews</span>
            </div>
          </div>
          <div className="mt-8 flex space-x-8">
            <div className="text-center">
              <div className="text-blue-600 text-2xl font-bold">
                Eco Friendly
              </div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-2xl font-bold">
                Money Saving
              </div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-2xl font-bold">
                Time Saving
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="w-[350px] h-[450px] bg-blue-100 rounded-[30px] shadow-xl overflow-hidden">
            <img
              src="/_assets/laundry_person.jpg"
              alt="Laundry Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    )
}