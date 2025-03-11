import Image from "next/image";
import pfp from "../../public/blank_profile_picture.webp"
import { Montserrat } from "next/font/google"

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export default function AboutPage() {
    return (
      <div id="page-container" className="flex justify-evenly items-center mt-[150px]">
        <div id="img-container" className="relative size-[500px]">
          <Image 
            loading="lazy"
            src={pfp}
            alt="profile img"
            className="object-cover absolute inset-0 size-full"
          />
        </div>
        <div id="text-container" className="text-left items-center w-[550px] h-[500px]">
          <h1 className={`text-white font-montserrat text-[2.5rem] mb-[50px] ${montserratFont.className}`}>   
            {"Hey, I'm Rishik!"}
          </h1>
          <p className={`text-white font-montserrat text-[15px] leading-9 ${montserratFont.className}`}>
            {`I am a Los Angeles-based photographer with a passion for capturing the beauty in everyday moments. What started as a personal journey to document my life and preserve lasting memories has grown into a creative profession where I get to tell stories through my lens. Whether it's the candid joy of a celebration or the quiet elegance of a portrait, my goal is to create images that resonate and leave a lasting impact.`}
          </p>
        </div>
      </div>
    );
  }
  