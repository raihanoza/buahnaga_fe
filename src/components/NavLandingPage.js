import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalMallIcon from "@mui/icons-material/LocalMall";
const NavLandingPage = () => {
  return (
    <div className="w-full py-2 flex-row flex h-[10%]">
      <div className="w-1/3 items-center flex">
        <div className="flex flex-row items-center text-sm gap-2 hover:bg-green-200 px-2 rounded-md">
          <WhatsAppIcon />
          <a href="http://wa.me/+6285290786090" rel="noreferrer" target="_blank">
            +62 85290786090
          </a>
        </div>
      </div>
      <div className="w-1/3 flex items-center">
        <a href="/" className="mx-auto">
          THE LAST CHUDAI
        </a>
      </div>
      <div className="w-1/3 flex justify-end items-center">
        <LocalMallIcon />
      </div>
    </div>
  );
};

export default NavLandingPage;
