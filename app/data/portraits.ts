import Portrait1 from "../../public/images/portraits/DSC_0005_result.webp"
import Portrait2 from "../../public/images/portraits/DSC_0245_result.webp"
import Portrait3 from "../../public/images/portraits/DSC_0260_result.webp"
import Portrait4 from "../../public/images/portraits/DSC_0275_result.webp"
import Portrait5 from "../../public/images/portraits/DSC_0336_result.webp"
import Portrait6 from "../../public/images/portraits/DSC_0388_result.webp"
import Portrait7 from "../../public/images/portraits/DSC_0454_result.webp"
import Portrait8 from "../../public/images/portraits/DSC_0471_result.webp"
import Portrait9 from "../../public/images/portraits/DSC_0479_result.webp"
import Portrait10 from "../../public/images/portraits/DSC_0480_result.webp"
import Portrait11 from "../../public/images/portraits/DSC_0502_result.webp"
import Portrait12 from "../../public/images/portraits/DSC_0512_result.webp"
import Portrait13 from "../../public/images/portraits/DSC_0518_result.webp"
import Portrait14 from "../../public/images/portraits/DSC_0560_result.webp"
import Portrait15 from "../../public/images/portraits/DSC_0597_result.webp"
import Portrait16 from "../../public/images/portraits/DSC_0614_result.webp"
import Portrait17 from "../../public/images/portraits/DSC_0623_result.webp"
import Portrait18 from "../../public/images/portraits/DSC_0640_result.webp"
import Portrait19 from "../../public/images/portraits/DSC_0677_result.webp"
import Portrait20 from "../../public/images/portraits/DSC_0731_result.webp"
import Portrait21 from "../../public/images/portraits/DSC_0773_result.webp"
import Portrait22 from "../../public/images/portraits/DSC_0777_result.webp"
import Portrait23 from "../../public/images/portraits/DSC_0782_result.webp"
import Portrait24 from "../../public/images/portraits/DSC_0790_result.webp"
import Portrait25 from "../../public/images/portraits/DSC_0850_result.webp"
import Portrait26 from "../../public/images/portraits/DSC_0996_result.webp"
import Portrait27 from "../../public/images/portraits/IMG_8762_result.webp"
import Portrait28 from "../../public/images/portraits/IMG_8819_result.webp"
import Portrait29 from "../../public/images/portraits/IMG_9183_result.webp"
import Portrait30 from "../../public/images/portraits/IMG_9569_result.webp"
import Portrait31 from "../../public/images/portraits/cover_image_result.webp"
import Portrait32 from "../../public/images/portraits/portraits_image_2.1_result.webp"
import Portrait33 from "../../public/images/portraits/portraits_image_2.2_result.webp"
import Portrait34 from "../../public/images/portraits/portraits_image_result.webp"

import { StaticImageData } from "next/image";

type PortraitItem = {
    image: StaticImageData;
    title: string;
};

const portraitItems: PortraitItem[] = [
    { image: Portrait30 , title: "Portrait Image 30" },
    { image: Portrait4 , title: "Portrait Image 4" },
    { image: Portrait1 , title: "Portrait Image 1" },
    { image: Portrait25 , title: "Portrait Image 25" },
    { image: Portrait22 , title: "Portrait Image 22" },
    { image: Portrait18 , title: "Portrait Image 18" },
    { image: Portrait5 , title: "Portrait Image 5" },
    { image: Portrait12 , title: "Portrait Image 12" },
    { image: Portrait7 , title: "Portrait Image 7" },
    { image: Portrait29 , title: "Portrait Image 29" },
    { image: Portrait14 , title: "Portrait Image 14" },
    { image: Portrait31 , title: "Portrait Image 31" },
    { image: Portrait20 , title: "Portrait Image 20" },
    { image: Portrait9 , title: "Portrait Image 9" },
    { image: Portrait27 , title: "Portrait Image 27" },
    { image: Portrait8 , title: "Portrait Image 8" },
    { image: Portrait11 , title: "Portrait Image 11" },
    { image: Portrait34 , title: "Portrait Image 34" },
    { image: Portrait6 , title: "Portrait Image 6" },
    { image: Portrait15 , title: "Portrait Image 15" },
    { image: Portrait24 , title: "Portrait Image 24" },
    { image: Portrait2 , title: "Portrait Image 2" },
    { image: Portrait10 , title: "Portrait Image 10" },
    { image: Portrait23 , title: "Portrait Image 23" },
    { image: Portrait19 , title: "Portrait Image 19" },
    { image: Portrait32 , title: "Portrait Image 32" },
    { image: Portrait21 , title: "Portrait Image 21" },
    { image: Portrait33 , title: "Portrait Image 33" },
    { image: Portrait26 , title: "Portrait Image 26" },
    { image: Portrait17 , title: "Portrait Image 17" },
    { image: Portrait3 , title: "Portrait Image 3" },
    { image: Portrait28 , title: "Portrait Image 28" },
    { image: Portrait13 , title: "Portrait Image 13" },
    { image: Portrait16 , title: "Portrait Image 16" },
];


export { portraitItems }
export type { PortraitItem }