"use client";
import React, { useRef } from "react";

//next features/optimization
import Image from "next/image";
//font
import { oswald } from "@/app/layout";

//logos
import harbourLogo from "../../public/logo/harbourLightsLogo.png";

//constants utilitits
import { features } from "@/app/constants/features";
import { characterstics } from "@/app/constants/characterstics";

//components
import FeaturesCard from "@/components/FeaturesCard";
import ImageGallery from "@/components/ImageGallery";

//animation gsap things
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Navbar from "@/components/Navbar";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const animationRef = useRef();

  useGSAP(() => {
    gsap.from(animationRef.current, {
      opacity: "0",
      y: 100,
      duration: 1,
    });
    gsap.from("#text-animation", {
      opacity: "0",
      y: 50,
      duration: 1,
    });
    gsap.from("#character-animation", {
      opacity: "0",
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#character-animation",
        scroller: "body",
        start: "top 50%",
      },
    });
    gsap.from("#feature-animation", {
      opacity: "0",
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#feature-animation",
        scroller: "body",
        start: "top 50%",
      },
    });
    gsap.from("#bigimage-animation", {
      opacity: "0",
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#bigimage-animation",
        scroller: "body",
        start: "top 50%",
      },
    });
    gsap.from("#smallimage-animation", {
      opacity: "0",
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#smallimage-animation",
        scroller: "body",
        start: "top 80%",
      },
    });
  });

  return (
    <main>
      <div className="h-[100vh] bg-[url('../../public/images/bg-img.jpg')] bg-cover bg-center text-white">
        <div className="h-[100vh] bg-gradient-to-b lg:bg-gradient-to-r from-[#062349dc] to-[#3c424785]">
          <div className="max-w-[1121px] mx-auto px-2 xl:px-0">
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-28">
              <div id="text-animation">
                <h2
                  id="text-animation"
                  className={`text-[37px] lg:text-[48px] leading-[40px] md:leading-[50px] ${oswald.variable} font-oswald`}
                >
                  HARBOUR LIGHTS DE{" "}
                  <span className="text-primary-blue">GRESOGONO</span>
                </h2>
                <p
                  id="text-animation"
                  className="text-[14px] lg:text-[25px] font-[700] mt-2 mb-10"
                >
                  1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
                </p>
                <div>
                  <p className="text-[12px] md:text-[14px] font-[400] bg-[#00000042] w-full sm:w-[305px] px-3 md:px-5 py-1 md:py-2 border-l-4 border-primary-blue">
                    Rental Returns of{" "}
                    <span className="font-[600] text-[14px] md:text-[16px]">
                      UPTO 11%**
                    </span>
                  </p>
                  <p className="text-[12px] md:text-[14px] font-[400] bg-[#00000042] w-full sm:w-[305px] mt-3 px-3 md:px-5 py-1 md:py-2 border-l-4 border-primary-blue">
                    Capital Appreciation of{" "}
                    <span className="font-[600] text-[14px] md:text-[16px]">
                      UPTO 32%**
                    </span>
                  </p>
                </div>
              </div>
              <div className="lg:justify-self-end">
                <div
                  ref={animationRef}
                  className="w-full sm:w-[303.08px] backdrop-blur-md rounded-[14px] mt-5 md:mt-0"
                >
                  <div className="px-5 py-7">
                    <p className="text-[13px]">PRICING STARTS FROM</p>
                    <div className={`${oswald.variable} font-oswald`}>
                      <h1 className="text-[48px] font-[500]">$ 425,000</h1>
                      <p>AED 1.3 Million</p>
                    </div>
                    <button className="text-[13px] bg-primary-blue hover:bg-sky-400 w-full mt-5 py-3 rounded-[5px]">
                      GET A PRESENTATION
                    </button>
                  </div>
                  <div className="text-[13px] font-[400] leading-[17px] px-5 pt-3 pb-5 border-t-2 border-black">
                    Get an Expert’s Presentation of Real Estate in Dubai for
                    Life and investment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F9FF] py-10">
        <div className="max-w-[1121px] mx-auto grid grid-cols-2 gap-8 lg:grid-cols-4">
          {characterstics.map((character, i) => (
            <div
              key={i}
              id="character-animation"
              className="text-[#00357B] text-center"
            >
              <Image
                src={character.logo}
                alt="logo-images"
                className="mx-auto"
              />
              <p className="text-[12px] lg:text-[16px] font-[400] mt-2">
                {character.text}
              </p>
              <p
                className={`text-[25px] lg:text-[30px] font-[500] leading-5 ${oswald.variable} font-oswald`}
              >
                {character.title}
              </p>
              <div className="w-[73px] h-[5px] bg-[#d7e1ef] rounded-[13px] mt-3 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1121px] mx-auto px-2 xl:px-0">
        <Image
          id="feature-animation"
          src={harbourLogo}
          className="mx-auto mt-10"
        />
        <h1
          id="feature-animation"
          className={`text-[31px] lg:text-[36px] font-[500] text-[#00357B] text-center mt-5 mb-2 ${oswald.variable} font-oswald`}
        >
          FEATURES & AMENTIES
        </h1>
        <p
          id="feature-animation"
          className="text-[16px] font-[400] text-[#343434] text-center lg:w-[777px] lg:mx-auto"
        >
          Harbour Lights beautifully honours maritime voyages while embracing an
          opulent seafront lifestyle. Its maritime-inspired amenities provide an
          unmatched seaside experience, offering a life of tranquility and
          bliss.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 mt-10 mb-5">
          {features.map((feature, i) => (
            <div id="feature-animation" key={i}>
              <FeaturesCard img={feature.img} text={feature.text} />
            </div>
          ))}
        </div>
        <p className="text-[#686868] text-[10px] font-[300] text-center lg:text-end">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. Source 1 | Source 2
        </p>
        <div className="flex gap-3 justify-center lg:justify-end text-[13px] font-[700] mt-10 mb-5">
          <button
            id="bigimage-animation"
            className="bg-[#00357B] text-white rounded-[5px] px-10 py-3"
          >
            EXTERIORS
          </button>
          <button
            id="bigimage-animation"
            className="border-2 border-[#00357B] text-[#00357B] rounded-[5px] px-10 py-3"
          >
            INTERIORS
          </button>
        </div>

        {/* this is external component for image crasoul start*/}
        <ImageGallery />
        {/* image gallery carasoul end */}
      </div>
      <div className="bg-[#091D41] py-10 text-center text-white mt-16 lg:mt-20">
        <p className="text-[14px] font-[400]">
          © DAMAC Copyright 2024 All rights reserved.
        </p>
      </div>
    </main>
  );
}
