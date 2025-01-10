import React from "react";

export default function page() {
  return (
    <section className="w-[60%] mx-auto mt-12 text-center">
      <h1 className="text-4xl font-bold text-[#8a6d16] mb-4">Contact Me</h1>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        I’d love to hear from you! Feel free to reach out using the form below
        or connect with me through my social profiles.
      </p>
      <form className="flex flex-col space-y-4 items-center">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-md p-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-md p-2"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full border border-gray-300 rounded-md p-2"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-[#8a6d16] text-white rounded-md shadow-md hover:bg-[#714e0b] transition"
        >
          Send Message
        </button>
      </form>
      <hr className=" w-[20%] mx-auto border-[#FFC107] text-[#FFC107] mt-4 w-[550px] " />
    </section>
  );
}
