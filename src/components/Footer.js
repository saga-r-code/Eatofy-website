import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (

    <div className="bg-black pt-10 pb-32 relative">
      <img src="/logo.svg" alt="logo" className="w-44 ml-5 mb-5" />
      <footer className="flex justify-center items-center gap-10 text-slate-200  text-center">
        <div className="flex justify-center flex-wrap gap-10 md:flex-nowrap">
          <div className="flex flex-col justify-center items-center xl:justify-center xl:items-center gap-4 w-full md:w-1/3 xl:w-1/3">
            <h1 className="font-bold text-lg">About Us</h1>
            <p className="w-1/2 md:w-full">
              We are dedicated to providing the best restaurant management
              solutions to streamline your operations and enhance your customer
              experience.
            </p>
            <ul className="flex justify-center items-center gap-5">
              <li>
                <ImFacebook2 size={30} />
              </li>
              <li>
                <FaSquareTwitter size={30} />
              </li>
              <li>
                <FaInstagramSquare size={30} />
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-5 w-full md:w-1/3 xl:w-1/3">
            <h1 className="font-bold text-lg">Service</h1>
            <ul className="flex flex-col justify-center items-center gap-3">
              <li>Order Management</li>
              <li>Inventory Management</li>
              <li>Video Marketing</li>
              <li>Staff Salary Management</li>
            </ul>
          </div>
          <div className="flex flex-col  items-center gap-5 w-full md:w-1/3 xl:w-1/3">
            <h1 className="font-bold text-lg">Conatact Us</h1>
            <ul className="flex flex-col justify-center items-center gap-3">
              <li>Email:support@eatofy.com</li>
              <li>Phone: +91 84199-99929</li>
              <li>Address: 123 123 Restaurant St, Food City, FC 12345</li>
            </ul>
          </div>
        </div>
      </footer>
      
            <p className="text-white  pt-20 absolute bottom-5 px-5 text-center md:px-0 md:right-1/3">
              © 2024 Eatofy. All rights reserved. Developed by Appniche
              Technologies
            </p>
  
  </div>
  );
};

export default Footer;
