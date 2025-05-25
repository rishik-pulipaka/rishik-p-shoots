import Wildlife1 from "../../public/images/wildlife/DSC_0643.jpg"
import Wildlife2 from "../../public/images/wildlife/DSC_0650.jpg"
import Wildlife3 from "../../public/images/wildlife/DSC_0695.jpg"
import Wildlife4 from "../../public/images/wildlife/DSC_0699.jpg"
import Wildlife5 from "../../public/images/wildlife/DSC_0751.jpg"
import Wildlife6 from "../../public/images/wildlife/DSC_0815.jpg"
import Wildlife7 from "../../public/images/wildlife/DSC_0900.jpg"
import Wildlife8 from "../../public/images/wildlife/DSC_0925.jpg"

import { StaticImageData } from "next/image";

type WildlifeItem = {
    image: StaticImageData;
    title: string;
};

const wildlifeItems: WildlifeItem[] = [
    { image: Wildlife3 , title: "Wildlife Image 3" },
    { image: Wildlife7 , title: "Wildlife Image 7" },
    { image: Wildlife5 , title: "Wildlife Image 5" },
    { image: Wildlife2 , title: "Wildlife Image 2" },
    { image: Wildlife4 , title: "Wildlife Image 4" },
    { image: Wildlife6 , title: "Wildlife Image 6" },
    { image: Wildlife8 , title: "Wildlife Image 8" },
    { image: Wildlife1 , title: "Wildlife Image 1" },
];


export { wildlifeItems };
export type { WildlifeItem };

