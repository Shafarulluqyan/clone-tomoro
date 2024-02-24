import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <Navbar />

      {/* <!-- Body --> */}
      <div className="flex h-screen items-center justify-center">
        {/* <!-- font --> */}
        <div className="font-barlow-bold ml-[150px]">
          <div>
            <img
              src="data:image/png;base64,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"
              alt="icon"
              width="67"
              height="65"
              className="-left-44 -top-48"
            />
            <h3 className="text-3xl font-bold">HEY</h3>
            <h3 className="mb-6 text-3xl font-bold">ENJOY YOUR COFFEE TIME</h3>
            <p className="">100% ARABICA COFFEE</p>
            <p className="">FRESHLY ROASTED & BREWED</p>
            <h3 className="mt-6 text-4xl font-bold">@TOMORO</h3>
          </div>
        </div>
        {/* <!-- Image --> */}
        <div className="mr-8">
          <img
            src="https://www.tomoro-coffee.com/img/icon1.10800737.png"
            alt="main-coffee"
          />
        </div>
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
