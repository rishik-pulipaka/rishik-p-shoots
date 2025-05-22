import Action1 from "../../public/images/action/IMG_8714_result.webp"
import Action2 from "../../public/images/action/IMG_8751_result.webp"
import Action3 from "../../public/images/action/IMG_8792_result.webp"
import Action4 from "../../public/images/action/IMG_8827_result.webp"
import Action5 from "../../public/images/action/IMG_8862_result.webp"
import Action6 from "../../public/images/action/IMG_8878-2_result.webp"
import Action7 from "../../public/images/action/IMG_8907_result.webp"
import Action8 from "../../public/images/action/IMG_8990_result.webp"
import Action9 from "../../public/images/action/IMG_9019_result.webp"
import Action10 from "../../public/images/action/IMG_9029_result.webp"
import Action11 from "../../public/images/action/IMG_9039_result.webp"
import Action12 from "../../public/images/action/IMG_9059_result.webp"
import Action13 from "../../public/images/action/IMG_9121_result.webp"
import Action14 from "../../public/images/action/IMG_9135_result.webp"
import Action15 from "../../public/images/action/IMG_9160_result.webp"
import Action16 from "../../public/images/action/IMG_9170_result.webp"
import Action17 from "../../public/images/action/IMG_9183_result.webp"
import Action18 from "../../public/images/action/IMG_9232_result.webp"
import Action19 from "../../public/images/action/IMG_9615_result.webp"
import Action20 from "../../public/images/action/IMG_9663_result.webp"
import Action21 from "../../public/images/action/IMG_9756_result.webp"
import Action22 from "../../public/images/action/action_image_2_result.webp"
import Action23 from "../../public/images/action/action_image_result.webp"

import { StaticImageData } from "next/image";

type ActionItem = {
    image: StaticImageData;
    title: string;
};

const actionItems: ActionItem[] = [
  { image: Action11, title: "Action Image 11" },
  { image: Action20, title: "Action Image 20" },
  { image: Action4, title: "Action Image 4" },
  { image: Action7, title: "Action Image 7" },
  { image: Action14, title: "Action Image 14" },
  { image: Action9, title: "Action Image 9" },
  { image: Action23, title: "Action Image 23" },
  { image: Action1, title: "Action Image 1" },
  { image: Action15, title: "Action Image 15" },
  { image: Action22, title: "Action Image 22" },
  { image: Action17, title: "Action Image 17" },
  { image: Action5, title: "Action Image 5" },
  { image: Action18, title: "Action Image 18" },
  { image: Action3, title: "Action Image 3" },
  { image: Action2, title: "Action Image 2" },
  { image: Action13, title: "Action Image 13" },
  { image: Action6, title: "Action Image 6" },
  { image: Action8, title: "Action Image 8" },
  { image: Action10, title: "Action Image 10" },
  { image: Action12, title: "Action Image 12" },
  { image: Action19, title: "Action Image 19" },
  { image: Action21, title: "Action Image 21" },
  { image: Action16, title: "Action Image 16" },
];


export { actionItems };
export type { ActionItem };

