import React from "react";

//react icons
import { IoReorderThreeOutline } from "react-icons/io5";

//image optimization
import Image from "next/image";

// logo
import logo from "../../public/images/Logo.png";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center py-5">
        <Image
          id="text-animation"
          src={logo}
          alt="logo-img"
          className="w-[120px] md:w-auto"
        />
        <button
          id="text-animation"
          className="border-2 border-primary-blue text-primary-blue hover:bg-sky-400 hover:text-white rounded-[5px] text-[13px] font-[700] px-10 py-3 hidden lg:block"
        >
          ENQUIRE NOW
        </button>
        <div className="block lg:hidden">
          <IoReorderThreeOutline className="cursor-pointer" size={30} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
