import React from "react";

export default function page() {
  return (
    <section className="w-[80%] mx-auto mt-12 text-center">
      {/* Introduction Section */}
      <div className=" p-8 rounded-lg">
        <h1 className="text-5xl font-thin text-[#8a6d16] mb-4">About Me</h1>
        <p className="text-xl leading-relaxed text-gray-700 font-thin ">
          Hello! I'm <span className="font-semibold">Mathan Kumar</span>, a
          passionate software engineer with expertise in web development, UI/UX
          design, and building seamless user experiences. My mission is to
          transform ideas into functional, beautiful digital solutions.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <h2 className="text-4xl font-thin text-[#8a6d16] mb-6">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { skill: "UI/UX Design", icon: "🎨" },
            { skill: "Web Development", icon: "💻" },
            { skill: "React & Next.js", icon: "🌐" },
            { skill: "Python", icon: "🐍" },
            { skill: "Django", icon: "🌱" },
            { skill: "JavaScript/Typecript", icon: "⚡" },
            { skill: "Version Control (Git)", icon: "🔧" },
            { skill: "SEO Optimization", icon: "📈" },
            { skill: "Problem Solving", icon: "🧠" },
          ].map((item, idx) => (
            <div
              key={idx}
              className=" p-4 rounded-lg  flex flex-col items-center"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-xl font-thin">{item.skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
