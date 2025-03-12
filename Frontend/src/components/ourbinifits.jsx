import React from "react";


const benefits = [
  {
    id: "01",
    title: "Standardization",
    description:
      "When working in a global workplace, it's often difficult to gauge learners’ training experiences, which are ...",
  },
  {
    id: "02",
    title: "Reduced Costs",
    description:
      "With Weekend UX, there's no cost to reproduce materials and, thanks to mobile learning and microlearning ...",
  },
  {
    id: "03",
    title: "More Customization",
    description:
      "Just like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different ...",
  },
  {
    id: "04",
    title: "Affordable Pricing",
    description:
      "With Weekend UX, there's no cost to reproduce materials and, thanks to mobile learning and microlearning ...",
  },
  {
    id: "05",
    title: "Learner Satisfaction",
    description:
      "If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad ...",
  },
  {
    id: "06",
    title: "Multimedia Materials",
    description:
      "One of the main reasons why custom eLearning is effective is that it's the perfect delivery method for ...",
  },
];

const Benefits = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-center  dark:bg-gray-900 dark:text-black">
      {/* Title Section */}
      <h3 className="text-green-600 font-bold  text-4xl py-4">Our Benefits</h3>
      <h2 className="text-3xl md:text-4xl font-bold mt-2  dark:bg-gray-900 dark:text-white">
        By Joining LevelUp Academy, One Can Avail a Lot Of Benefits.
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Install our top-rated dropshipping app to your e-commerce site and get
        access to US Suppliers, AliExpress vendors, and the best.
      </p>

      {/* Cards Section */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="p-6 bg-white  rounded-lg shadow-xl hover:shadow-lg transition border border-gray-200"
          >
            <span className="text-green-600 font-bold text-xl">{benefit.id}</span>
            <h4 className="font-bold text-lg mt-2">{benefit.title}</h4>
            <p className="text-gray-600 mt-2">{benefit.description}</p>
            <a href="#" className="text-green-600 font-bold mt-4 inline-block">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
