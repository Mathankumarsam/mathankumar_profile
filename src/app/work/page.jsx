import React from "react";

export default function Page() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of the first project.",
      image: "/images/project1.jpg",
    },
    {
      title: "Project Two",
      description: "A brief description of the second project.",
      image: "/images/project2.jpg",
    },
  ];

  return (
    <section className="w-[60%] mx-auto mt-12">
      <h1 className="text-4xl font-bold text-[#8a6d16] mb-6">My Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img src={project.image} alt={project.title} className="w-full" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-[#8a6d16]">
                {project.title}
              </h2>
              <p className="text-gray-700 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className=" w-[60%] mx-auto border-[#FFC107] text-[#FFC107] mt-4 w-[550px] " />
    </section>
  );
}
