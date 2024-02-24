import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Barlow } from "next/font/google";

const barlow600 = Barlow({ subsets: ["latin"], weight: "600" });
const barlow300 = Barlow({ subsets: ["latin"], weight: "300" });

export default function About() {
  return (
    <>
      {/* // Navbar */}
      <Navbar />
      {/* // Main */}
      <div
        className="flex  mr-auto ml-auto"
        style={{ height: "854px", width: "1440px" }}
      >
        <div className="flex" style={{ marginLeft: "121px" }}>
          {/* Image */}
          <div className="" style={{ marginTop: "134px" }}>
            <img
              src="https://www.tomoro-coffee.com/img/about1.71f95995.png"
              alt="about-image"
              width={423}
              height={564}
            />
          </div>
          {/* About section */}
          <div
            style={{
              width: "621px",
              height: "564px",
              marginLeft: "147px",
              marginTop: "102px",
            }}
          >
            <h1
              className="font-barlow-bold text-4xl mt-6 mb-10"
              style={{
                fontFamily: barlow600.style.fontFamily,
                width: "184px",
                height: "40px",
              }}
            >
              OUR STORY
            </h1>
            <div style={{ fontFamily: barlow300.style.fontFamily }} className="space-y-7 text-xl whitespace-normal my-8 leading-8">
              <p className="mb-8">
                The founder of TOMORO has travelled across the world for years
                and has been to over 30 countries including Southeast Asia,
                South Asia, the Middle East, North Africa, and the Americas.
                This enabled him to deeply feel people’s passion for coffee
                culture from different countries, races, and occupations.{" "}
              </p>
              <p>
                The founder strives to pursue the ultimate passion for coffee
                and quality living by creating unique coffee humanities for
                TOMORO, ultimately introducing the ‘coffee culture’ to every
                corner of the world, and letting every customer enjoys a worthy
                cup of good coffee.{" "}
              </p>
              <p>
                TOMORO refers to “tomorrow“ and it means “embrace the goodness
                and yearn for tomorrow”. This is the original aspiration of
                TOMORO, strive to make every good cup of coffee with heart and
                encourage everyone to follow their heart bravely, feel the life
                with heart while yearning for tomorrow.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* // Footer */}
      <Footer />
    </>
  );
}
