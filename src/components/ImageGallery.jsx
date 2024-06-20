import React, { useState } from "react";

//images
import building1 from "../../public/images/building-1.jpg";
import bathImg from "../../public/images/bath-img.jpg";
import outdoor from "../../public/images/outdoor-img.jpg";
import roomImg from "../../public/images/room-img.jpg";
import seaFace from "../../public/images/sea-face.jpg";

//react icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

//image optimization
import Image from "next/image";

function ImageGallery() {
  const allImages = [building1, bathImg, outdoor, roomImg, seaFace];

  const [currentImg, setCurrentImg] = useState(0);

  function nextImg() {
    setCurrentImg((prev) =>
      currentImg === allImages.length - 1 ? 0 : prev + 1
    );
  }
  function prevImg() {
    setCurrentImg((prev) =>
      currentImg === 0 ? allImages.length - 1 : prev - 1
    );
  }

  return (
    <>
      <div className="w-full h-auto lg:h-[494px] object-cover relative">
        {allImages.map((img, idx) => {
          return (
            <Image
              id="bigimage-animation"
              src={img}
              className={`w-full h-full object-cover rounded-[14px] ${
                currentImg === idx ? "block" : "hidden"
              }`}
            />
          );
        })}

        <FiChevronLeft
          id="bigimage-animation"
          className="bg-white absolute top-[50%] left-2 md:left-5 text-[#00357B] w-5 md:w-8 h-5 md:h-8 rounded-full cursor-pointer"
          size={30}
          onClick={prevImg}
        />
        <FiChevronRight
          id="bigimage-animation"
          className="bg-white absolute top-[50%] right-2 md:right-5 text-[#00357B] w-5 md:w-8 h-5 md:h-8 rounded-full cursor-pointer"
          size={30}
          onClick={nextImg}
        />
      </div>
      <div className="flex gap-1 lg:gap-2 justify-between mt-1 lg:mt-5">
        {allImages.slice(0, 4).map((img) => {
          return (
            <div className="w-full h-auto lg:h-[168px] object-cover">
              <Image
                id="smallimage-animation"
                src={img}
                className={`w-full h-full rounded-[5px] lg:rounded-[14px]`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ImageGallery;
