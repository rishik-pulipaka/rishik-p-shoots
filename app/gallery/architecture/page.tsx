"use client";

import { useEffect } from "react";
import Title from "@/app/components/Title";
import Image from "next/image";
import { architectureItems } from "@/app/data/architecture";

import Masonry from "react-masonry-css";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function ActionGallery() {
  useEffect(() => {
    const disableContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  return (
    <div>
      <Title text="architecture" />
      <div id="photos-container" className="p-5">
        <LightGallery
          onInit={() => console.log("LightGallery initialized")}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          selector=".lightgallery-item"
          download={false}
        >
          <Masonry
            breakpointCols={{
              default: 4,
              1100: 3,
              768: 2,
              500: 1,
            }}
            className="flex gap-2"
            columnClassName=""
          >
            {architectureItems.map((item, i) => (
              <a
                key={i}
                href={item.image.src}
                data-src={item.image.src}
                data-sub-html=""
                className="lightgallery-item block my-2"
              >
                <Image
                  src={item.image}
                  alt=""
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow"
                  loading="lazy"
                />
              </a>
            ))}
          </Masonry>
        </LightGallery>
      </div>
    </div>
  );
}
