import React from "react";

import HeroImage from "assets/images/hero.png";
import Product from "./Product";
import NavLandingPage from "components/NavLandingPage";
const LandingPage = () => {
  return (
    <div className="bg-white text-black font-extrabold px-20">
      <div className="h-screen flex flex-col">
        <NavLandingPage />
        <div className="flex flex-row px-10 bg-gradient-to-r from-[#ff686b] via-[#d90429] to-[#d90429] h-[90%]">
          <div className="w-1/2 content-center">
            <p className="text-2xl text-white">
              Tingkatkan Kesehatan Anda dengan{" "}
              <span className="text-[#ba181b] underline font-extrabold text-4xl">Buah Naga</span>{" "}
              Segar Berkualitas! 🌟
              <br /> Nikmati Manfaat Alami dari Setiap Gigitan. <br />
              Pesan Sekarang dan Rasakan Kesegarannya!
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-end transition-transform duration-300 ease-in-out hover:rotate-[-5deg]">
            <img src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default LandingPage;
