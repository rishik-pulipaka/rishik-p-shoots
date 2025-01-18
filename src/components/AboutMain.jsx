import pfp from "../assets/profile_pic.jpg"

const AboutMain = () => {
    return (
        <div id="page-container" className="flex justify-evenly items-center mt-[150px]">
            <div id="image-container" className="">
                <div className="relative border-0 border-red-500 size-[500px]">
                    <img
                        loading="lazy"
                        src={pfp}
                        alt="portraits img"
                        className="object-cover absolute inset-0 size-full"
                    />
                </div>
            </div>
            <div id="text-container" className="text-left items-center border-0 border-green-500 w-[550px] h-[500px]">
                <h1 className="text-white font-montserrat text-[2.5rem] mb-[50px]">{"Hey, I'm Rishik!"}</h1>
                <p className="text-white font-montserrat text-[15px] leading-9">
                    {`I am a Los Angeles-based photographer with a passion for capturing the beauty in everyday moments. What started as a personal journey to document my life and preserve lasting memories has grown into a creative profession where I get to tell stories through my lens. Whether it's the candid joy of a celebration or the quiet elegance of a portrait, my goal is to create images that resonate and leave a lasting impact.`}
                </p>
            </div>
        </div>
    )
}

export default AboutMain