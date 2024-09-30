import React from "react";

const Home = () => {
  return (
    <div className="w-[80%] mx-auto">
      {/* body */}
      <div className="flex flex-col gap-10 lg:flex-row justify-center items-center mt-10 md:my-10">
        <div className="flex justify-center items-center gap-4 flex-col">
          <h1 className="text-[#ef4444] text-center text-4xl xl:text-6xl font-semibold  md:w-10/12">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="md:text-xl  text-center ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            nostrum!
          </p>
          <p className="text-center">
            Already have a store?{" "}
            <a href="/" className="underline">
              Log in to set up eatofy POS
            </a>
          </p>
          <div className="w-36 h-12 flex justify-center items-center cursor-pointer text-lg rounded-full font-bold text-white bg-[#ef4444]">
            Get Started
          </div>
        </div>
        <div>
          <img src="./banner.png" alt="banner" width={500} className="hidden md:inline-block" />
        </div>
      </div>

      {/* restarunats */}
      <div className="flex justify-center items-center text-red-700 text-xl my-5 text-center md:text-4xl md:my-14">Trusted by 75,000+ restaurants</div>
      <div className="grid grid-cols-2 gap-x-5  place-content-center sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 w-[80%] mx-auto">
        <img src="/gianis.webp" alt="" width={150} />
        <img src="/pizza.webp" alt="" width={150} />
        <img src="/gianis.webp" alt="" width={150} />
        <img src="/pizza.webp" alt="" width={150} />
        <img src="/gianis.webp" alt="" width={150} className="hidden lg:block" />
        <img src="/pizza.webp" alt="" width={150} />
        <img src="/pizza.webp" alt="" width={150} className="hidden lg:block"/>
        <img src="/gianis.webp" alt="" width={150} className="hidden md:block"/>
        <img src="/pizza.webp" alt="" width={150} className="hidden md:block"/>
        <img src="/gianis.webp" alt="" width={150} className="hidden md:block"/>
        <img src="/pizza.webp" alt="" width={150} className="hidden md:block"/>
        <img src="/gianis.webp" alt="" width={150} className="hidden md:block"/>
      </div>
    </div>
  );
};

export default Home;
