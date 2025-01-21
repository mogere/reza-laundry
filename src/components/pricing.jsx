import PricingCard from "./atoms/PricingCard";
const Pricing = () => {
  return (
    <div id="pricing" className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Affordable <span className="text-blue-600">Prices</span>
        </h2>

        {/* Pricing Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <PricingCard />
          <PricingCard />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
