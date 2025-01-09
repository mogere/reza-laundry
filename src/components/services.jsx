export const Services = () =>{
return (
         <div id="services" className="bg-blue-50 py-16">
         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
             Our <span className="text-blue-600">Services</span>
           </h2>
           <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
             Expert care for your everyday clothing, ensuring freshness and
             cleanliness with every wash.
           </p>
 
           {/* Services Cards */}
           <div className="mt-10 flex gap-8 overflow-auto scrollbar-hidden">
             {/* Card 1 */}
             <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden">
               <img
                 src="/_assets/laundry.jpg"
                 alt="Laundry Service"
                 className="w-full h-48 object-cover"
               />
               <div className="p-6 flex items-center justify-between">
                 <h3 className="font-semibold text-lg">Laundry</h3>
                 <button className="bg-gray-100 p-2 rounded-full">
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
                       d="M9 5l7 7-7 7"
                     />
                   </svg>
                 </button>
               </div>
             </div>
 
             {/* Card 2 */}
             <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden">
               <img
                 src="/_assets/dry_cleaning.jpg"
                 alt="Dry Cleaning Service"
                 className="w-full h-48 object-cover"
               />
               <div className="p-6 flex items-center justify-between">
                 <h3 className="font-semibold text-lg">Dry Cleaning</h3>
                 <button className="bg-gray-100 p-2 rounded-full">
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
                       d="M9 5l7 7-7 7"
                     />
                   </svg>
                 </button>
               </div>
             </div>
 
             {/* Card 3 */}
             <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden">
               <img
                 src="/_assets/shoe_cleaning.jpg"
                 alt="Shoe Cleaning Service"
                 className="w-full h-48 object-cover"
               />
               <div className="p-6 flex items-center justify-between">
                 <h3 className="font-semibold text-lg">Shoe Cleaning</h3>
                 <button className="bg-gray-100 p-2 rounded-full">
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
                       d="M9 5l7 7-7 7"
                     />
                   </svg>
                 </button>
               </div>
             </div>
           </div>
 
           {/* Navigation Arrows */}
           <div className="mt-8 flex justify-center gap-4">
             <button className="p-3 bg-white border border-gray-300 rounded-full shadow hover:shadow-md">
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
                   d="M15 19l-7-7 7-7"
                 />
               </svg>
             </button>
             <button className="p-3 bg-white border border-gray-300 rounded-full shadow hover:shadow-md">
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
                   d="M9 5l7 7-7 7"
                 />
               </svg>
             </button>
           </div>
         </div>
       </div>
);

}