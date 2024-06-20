import React from "react";

//image optimization
import Image from "next/image";

function FeaturesCard(props) {
  const { img, text } = props;
  return (
    <>
      <div className="shadow-xl hover:shadow-2xl py-4 px-2 md:px-3 md:py-3 rounded-[20px] h-full">
        <div className="w-[117px] md:w-[193px] h-[117px] md:h-[193px] object-cover overflow-hidden rounded-full mx-auto">
          <Image src={img} className="w-full h-full object-cover" />
        </div>
        <p className="text-[#00357B] text-[12px] md:text-[14px] font-[600] leading-[20px] w-32 mx-auto text-center">
          {text}
        </p>
      </div>
    </>
  );
}

export default FeaturesCard;
