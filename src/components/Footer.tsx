import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: "300" });




export default function Footer() {
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer className="bottom-0 flex items-center justify-center bg-[#F8F8F8] px-2 py-6" style={{ fontFamily: barlow.style.fontFamily }}>
        <p>
          ©️2022 TOMORO COFFEE. All rights reserved. Contact us
          hitomoro@tomoro-coffee.com
        </p>
      </footer>
    </div>
  );
}
