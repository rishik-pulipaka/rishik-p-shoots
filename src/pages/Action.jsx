import Footer from "../components/Footer"
import Header from "../components/Header"



const Action = () => {
    
    // Dynamically import all images from the folder
    const images = import.meta.glob('/src/assets/images/action/*.{jpg,png,jpeg,webp}');

    // Convert the images object to an array of paths
    const imagePaths = Object.keys(images);

    return (
        <div className="bg-[#3B3B3B] w-screen h-full">
            <Header />
            <div id="images-container" className="p-5">
                <ul className="flex flex-wrap gap-[20px]">
                    {imagePaths.map((imagePath, index) => (
                        <li key={index} className="flex-grow h-[40vh]">
                            <img
                                src={imagePath}
                                alt={`Image ${index + 1}`}
                                className="max-h-full min-w-full object-cover align-bottom"
                            />
                        </li>
                    ))}

                    <li className="flex-grow-[1000] h-[40vh]"></li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default Action