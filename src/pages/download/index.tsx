import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Barlow } from "next/font/google";

const barlow700 = Barlow({ subsets: ["latin"], weight: "700" });
const barlow300 = Barlow({ subsets: ["latin"], weight: "300" });

export default function Download() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="h-screen flex items-center">
        {/* Left Section */}
        <div className="ml-[114px] w-[430px] relative">
          <h3
            className="text-4xl mb-7 h-[40px]"
            style={{ fontFamily: barlow700.style.fontFamily }}
          >
            DOWNLOAD NOW
          </h3>
          <p
            className="text-xl w-[435px] h-6 mb-[78px]"
            style={{ fontFamily: barlow300.style.fontFamily }}
          >
            DOWNLOAD APP TO GET NEW MEMBER REWARDS
          </p>
          {/* App Store and Play Store Logo */}
          <div className="flex flex-nowrap h-16">
            {/* App Store Logo */}
            <div>
              <img
                src="https://www.tomoro-coffee.com/img/load2.68f9f673.png"
                alt="app-store-logo"
                height={65}
                width={198}
                className="mr-10 bg-contain bg-repeat"
              />
            </div>
            {/* Play Store Logo */}
            <div>
              <img
                src="https://www.tomoro-coffee.com/img/load3.7dd114cb.png"
                alt="play-store-logo"
                height={65}
                width={198}
                className="bg-contain bg-repeat"
              />
            </div>
          </div>
          {/* QR-Code Image */}
          <img
            src="https://static.tomoro-coffee.id/frontEnd/h5App/static/home_download_qr_230504.png"
            alt="qr-code"
            width={194}
            height={224}
            className="mt-8"
          />
        </div>

        {/* Right Section Image*/}
        <div className="inline-block  ml-[146px] bg-contain bg-no-repeat">
          <img
            src="https://static.tomoro-coffee.id/frontEnd/h5App/static/home_load1_230505_2.png"
            alt="download-image"
            width={591}
            height={528}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
