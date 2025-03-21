import Title from "../components/Title";
import Link from "next/link";
import Image from "next/image";
import portraitsImg from "../../public/images/portraits/portraits_image_result.webp"
import actionImg from "../../public/images/action/action_image_result.webp"
import { Montserrat } from "next/font/google";

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: "400",  
})

export default function GalleryPage() {
    return (
      <div className={`${montserratFont.className}`}>
        <Title text="gallery"/>
        <div className={`w-full max-md:max-w-full text-white flex items-center mt-[100px] justify-evenly`}>
          <div id="portraits-container" className="bg-white relative w-[750px] h-[550px] hover:opacity-55 ease-in-out duration-300">
            <Link href="/gallery/portraits">
              <Image 
                loading="lazy"
                src={portraitsImg}
                alt="portraits img"
                className="object-cover absolute inset-0 size-full"
              />
              <h1 className="absolute inset-0 self-center items-center justify-center text-center font-montserrat tracking-[5px] font-bold text-2xl">portraits</h1>
            </Link>
          </div>
          <div id="action-container" className="bg-white relative w-[750px] h-[550px] hover:opacity-55 ease-in-out duration-300">
            <Link href="/gallery/action">
              <Image 
                loading="lazy"
                src={actionImg}
                alt="portraits img"
                className="object-cover absolute inset-0 size-full"
              />
              <h1 className="absolute inset-0 self-center items-center justify-center text-center font-montserrat tracking-[5px] font-bold text-2xl">action</h1>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  