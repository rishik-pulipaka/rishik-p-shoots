import Title from "@/app/components/Title";
import Image from "next/image";
import { actionItems } from "@/app/data/action";

export default function ActionGallery() {
  return (
    <div>
      <Title text="action"/>
      <div id="photos-container" className="p-5">
        <ul className="flex flex-wrap gap-[7px]">
            {actionItems.map((item, i) => (
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