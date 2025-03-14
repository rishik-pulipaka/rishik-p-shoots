import { Montserrat } from "next/font/google";

type props = {
    text: string;
}

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

export default function Title({ text }: props) {
    return (
        <div className={`flex w-full items-start justify-center tracking-[6px] pt-32 pb-10 mb-3 ${montserratFont.className} `}>
            <div className="text-4xl text-white">
                {text}
            </div>
        </div>
    )
}