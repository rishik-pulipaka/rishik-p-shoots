"use client"

import Title from "@/app/components/Title";
import Image from "next/image";
import { actionItems } from "@/app/data/action";
import Masonry from "react-masonry-css";

export default function ActionGallery() {
  return (
    <div>
      <Title text="action"/>
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
          {actionItems.map((item, i) => (
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