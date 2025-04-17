"use client"

import Title from "@/app/components/Title";
import { portraitItems } from "@/app/data/portraits";
import Image from "next/image";

import Masonry from "react-masonry-css";

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Img1 from "@/public/images/portraits/DSC_0005_result.webp";
import Img2 from "@/public/images/portraits/DSC_0245_result.webp";

export default function PortraitGallery() {
  return (
    <div>
      <Title text="portraits" />
      <div id="photos-container" className="p-5">
        <Masonry
          breakpointCols={{
            default: 4,
            1100: 3,
            768: 2,
            500: 1
          }} 
          className="flex gap-2"
          columnClassName=""
        >
          {portraitItems.map((item, i) => (
            <Image 
              key={i}
              src={item.image}
              alt={item.title}
              className="my-2"
              layout="responsive"
              loading="lazy"
            />
          ))}
        </Masonry>

        <LightGallery
          onInit={() => console.log("initialized")}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
              <Image alt="img1" src={Img1} />
              <Image alt="img2" src={Img2} />
        </LightGallery>

      </div>

    </div>
  );
}
  