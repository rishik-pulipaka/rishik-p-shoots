import Car1 from "../../public/images/cars/918_back.png";
import Car2 from "../../public/images/cars/918_badge.png";
import Car3 from "../../public/images/cars/918_side.png";
import Car4 from "../../public/images/cars/carrera_gt_back.png";
import Car5 from "../../public/images/cars/carrera_gt_front.png";
import Car6 from "../../public/images/cars/ferrari_badge.png";
import Car7 from "../../public/images/cars/ferrari_side_slice.png";
import Car8 from "../../public/images/cars/gt3_back.png";
import Car9 from "../../public/images/cars/gt3rs_side_logo.png";
import Car10 from "../../public/images/cars/gt4_steering_wheel.png";
import Car11 from "../../public/images/cars/m8_back.png";
import Car12 from "../../public/images/cars/mclaren_exploded_back.png";
import Car13 from "../../public/images/cars/mclaren_front_cut.png";
import Car14 from "../../public/images/cars/mercedes_black_series.png";
import Car15 from "../../public/images/cars/mercedes_black_series_badge.png";
import Car16 from "../../public/images/cars/multi_car_underground.png";
import Car17 from "../../public/images/cars/old_m3_back.png";
import Car18 from "../../public/images/cars/porsche_open_top_steering_wheel.png";
import Car19 from "../../public/images/cars/rohit_2_gt4.png";
import Car20 from "../../public/images/cars/rolls_royce_badge.png";
import Car21 from "../../public/images/cars/scion_back.png";
import Car22 from "../../public/images/cars/sf90_front_cut.png";
import Car23 from "../../public/images/cars/supra_back.png";

import { StaticImageData } from "next/image";

type CarItem = {
    image: StaticImageData;
    title: string;
};

const carItems: CarItem[] = [
    { image: Car3 , title: "Car Image 1" },
    { image: Car6 , title: "Car Image 1" },
    { image: Car17 , title: "Car Image 1" },
    { image: Car4 , title: "Car Image 1" },
    { image: Car13 , title: "Car Image 1" },
    { image: Car5 , title: "Car Image 1" },
    { image: Car11 , title: "Car Image 1" },
    { image: Car12 , title: "Car Image 1" },
    { image: Car8 , title: "Car Image 1" },
    { image: Car10 , title: "Car Image 1" },
    { image: Car15 , title: "Car Image 1" },
    { image: Car9 , title: "Car Image 1" },
    { image: Car16 , title: "Car Image 1" },
    { image: Car2 , title: "Car Image 1" },
    { image: Car14 , title: "Car Image 1" },
    { image: Car23 , title: "Car Image 1" },
    { image: Car18 , title: "Car Image 1" },
    { image: Car1 , title: "Car Image 1" },
    { image: Car19 , title: "Car Image 1" },
    { image: Car7 , title: "Car Image 1" },
    { image: Car21 , title: "Car Image 1" },
    { image: Car22 , title: "Car Image 1" },
    { image: Car20 , title: "Car Image 1" },
];


export { carItems };
export type { CarItem };

