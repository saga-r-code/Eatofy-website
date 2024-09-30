import React from "react";

const Contact = () => {
  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:py-5">
      <h1 className="text-4xl font-bold text-[#ef4444] mb-3">Contact Us</h1>
      <span className="text-slate-400 ">
        Get in touch with our team to clarify your queries
      </span>

      <form className="flex flex-col space-y-5 py-8">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-lg text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            required
            className="p-2 pl-10 text-sm text-gray-700 rounded-full border-red-400 border-[1px]"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="number" className="text-lg text-gray-700">
            Phone Number:
          </label>
          <input
            type="tel"
            name="number"
            required
            className="p-2 pl-10 text-sm text-gray-700 rounded-full border-red-400 border-[1px]"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-lg text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            required
            className="p-2 pl-10 text-sm text-gray-700 rounded-full border-red-400 border-[1px]"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="city" className="text-lg text-gray-700">
            City:
          </label>
          <input
            type="text"
            name="city"
            required
            className="p-2 pl-10 text-sm text-gray-700 rounded-full border-red-400 border-[1px]"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="restaurant" className="text-lg text-gray-700">
            Restaurant Name:
          </label>
          <input
            type="text"
            name="restaurant"
            required
            className="p-2 pl-10 text-sm text-gray-700 rounded-full border-red-400 border-[1px]"
          />
        </div>

        <div className="py-5">
          <button
            type="submit"
            className="bg-[#ef4444] hover:bg-[#ff5252] text-white font-bold py-2 px-10  rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
