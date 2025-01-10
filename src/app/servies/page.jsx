import React from "react";

export default function page() {
  const services = [
    { title: "Web Development", description: "Building responsive websites." },
    {
      title: "UI/UX Design",
      description: "Crafting user-friendly interfaces.",
    },
    {
      title: "SEO Optimization",
      description: "Improving search engine rankings.",
    },
  ];

  return (
    <section className="w-[60%] mx-auto mt-12">
      <h1 className="text-4xl font-bold text-[#8a6d16] mb-6">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold text-[#8a6d16]">
              {service.title}
            </h2>
            <p className="text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
      <hr className=" w-[60%] mx-auto border-[#FFC107] text-[#FFC107] mt-4 w-[550px] " />
    </section>
  );
}
