"use client"

import Title from "@/app/components/Title";
import { portraitItems } from "@/app/data/portraits";
import Image from "next/image";

import Masonry from "react-masonry-css";

// import LightGallery from 'lightgallery/react';
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';

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
      </div>

    </div>
  );
}
  