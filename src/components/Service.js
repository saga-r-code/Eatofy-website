import React from "react";

const Service = () => {
  return (
    <div className="my-28 w-[80%] mx-auto">
      <div className="heading flex justify-center items-center md:justify-end md:items-end flex-col gap-2">
        <h1 className="text-4xl 2xl:text-5xl  font-bold text-[#ef4444] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-slate-400 lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error
          qui dicta! Fugiat, cumque tempore.
        </p>
      </div>
      {/* heading close */}
      {/* service start */}
      <div className="service my-16">
        <div className="service-1 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20 mb-5 md:mb-8">
          <img src="/s2.png" alt="" className="lg:order-2 lg:w-1/2  xl:w-full" />
          <div className="details flex items-center flex-col gap-5">
            <h2 className="text-[#ef4444] text-center font-semibold lg:text-xl text-3xl 2xl:text-4xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h2>
            <p className="text-slate-400 text-center xl:text-lg 2xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              saepe! Expedita fuga repellendus ea optio animi necessitatibus
              distinctio, ullam earum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Provident iste ab obcaecati sit earum
              perspiciatis cumque distinctio nam, maxime animi.
            </p>
            <button className="px-5 py-2 my-5 rounded-full text-white font-bold bg-[#ef4444] 2xl:px-8 2xl:py-3 2xl:text-xl">
              Explore &rarr;
            </button>
          </div>
        </div>
        <div className="service-2 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20 mb-5">
          <img src="/s6.png" alt="" className="lg:w-1/2  xl:w-full" />
          <div className="details flex items-center flex-col gap-5">
            <h2 className="text-[#ef4444] text-center font-semibold lg:text-xl text-3xl 2xl:text-4xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h2>
            <p className="text-slate-400 text-center xl:text-lg 2xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              saepe! Expedita fuga repellendus ea optio animi necessitatibus
              distinctio, ullam earum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Provident iste ab obcaecati sit earum
              perspiciatis cumque distinctio nam, maxime animi.
            </p>
            <button className="px-5 py-2 my-5 rounded-full text-white font-bold bg-[#ef4444] 2xl:px-8 2xl:py-3 2xl:text-xl">
              Explore &rarr;
            </button>
          </div>
        </div>
        <div className="service-3 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20 mb-5">
          <img src="/s4.png" alt="" className="lg:order-2 lg:w-1/2  xl:w-full"  />
          <div className="details flex items-center flex-col gap-5">
            <h2 className="text-[#ef4444] text-center font-semibold lg:text-xl text-3xl 2xl:text-4xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h2>
            <p className="text-slate-400 text-center xl:text-lg 2xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              saepe! Expedita fuga repellendus ea optio animi necessitatibus
              distinctio, ullam earum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Provident iste ab obcaecati sit earum
              perspiciatis cumque distinctio nam, maxime animi.
            </p>
            <button className="px-5 py-2 my-5 rounded-full text-white font-bold bg-[#ef4444] 2xl:px-8 2xl:py-3 2xl:text-xl">
              Explore &rarr;
            </button>
          </div>
        </div>
        <div className="service-4 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20 mb-5">
          <img src="/s5.png" alt="" className=" lg:w-1/2  xl:w-full" />
          <div className="details flex items-center flex-col gap-5">
            <h2 className="text-[#ef4444] text-center font-semibold lg:text-xl text-3xl 2xl:text-4xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h2>
            <p className="text-slate-400 text-center xl:text-lg 2xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              saepe! Expedita fuga repellendus ea optio animi necessitatibus
              distinctio, ullam earum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Provident iste ab obcaecati sit earum
              perspiciatis cumque distinctio nam, maxime animi.
            </p>
            <button className="px-5 py-2 my-5 rounded-full text-white font-bold bg-[#ef4444] 2xl:px-8 2xl:py-3 2xl:text-xl">
              Explore &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
