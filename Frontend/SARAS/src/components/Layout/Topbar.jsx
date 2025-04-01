import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";

const Topbar = () => {
  return (
    <div className="bg-rabit-red text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="md:flex items-center space-x-4  hidden">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <BsTwitterX className="h-4 w-5" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>
        <div className="text-sm md:block hidden">
          <a href="tel:+1234567890" className="hover:text-gray-300">
            +1 {234} 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
