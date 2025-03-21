"use client"

import Title from "@/app/components/Title";
import { portraitItems } from "@/app/data/portraits";
import Image from "next/image";

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
      <ul className="flex flex-wrap gap-[7px]">
          {portraitItems.map((item, i) => (
            <li key={i} className="flex-grow h-[40vh]">
              <Image
                src={item.image}
                alt={item.title}
                layout="responsive"
                loading="lazy"
                className="max-h-full min-w-full object-cover align-bottom"
              />
            </li>
          ))}

          <li className="flex-grow-[1000] h-[40vh]"></li>
      </ul>
    </div>

    </div>
  );
}
  