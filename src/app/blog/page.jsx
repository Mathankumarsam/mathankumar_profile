import React from "react";

export default function Blog() {
  const posts = [
    {
      title: "Post One",
      date: "Jan 10, 2025",
      summary: "Summary of the first blog post.",
    },
    {
      title: "Post Two",
      date: "Dec 20, 2024",
      summary: "Summary of the second blog post.",
    },
  ];

  return (
    <section className="w-[60%] mx-auto mt-12">
      <h1 className="text-4xl font-bold text-[#8a6d16] mb-6">Blog</h1>
      <ul>
        {posts.map((post, idx) => (
          <li key={idx} className="mb-6">
            <h2 className="text-2xl font-semibold text-[#8a6d16]">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm">{post.date}</p>
            <p className="text-gray-700 mt-2">{post.summary}</p>
          </li>
        ))}
      </ul>
      <hr className=" w-[60%] mx-auto border-[#FFC107] text-[#FFC107] mt-14 w-[550px] " />
    </section>
  );
}
