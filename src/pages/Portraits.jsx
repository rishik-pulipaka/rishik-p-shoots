import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Portraits = () => {
  const images = import.meta.glob('/src/assets/images/portraits/*.{jpg,png,jpeg,webp}');
  const imagePaths = Object.keys(images);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openLightbox = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsZoomed(false); // Reset zoom when closing lightbox
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <div className="bg-[#3B3B3B] w-full min-h-screen">
        <Header />
        <div id="title-container" className="flex justify-center items-center p-6 mt-6">
            <h1 className="font-montserrat text-[80px] text-white font-semibold">Portraits</h1>
        </div>
        <div id="images-container" className="p-5">
            <ul className="flex flex-wrap gap-[20px]">
                {imagePaths.map((imagePath, index) => (
                    <li 
                        key={index}
                        className="flex-grow h-[40vh]"
                        onClick={() => openLightbox(imagePath)}
                    >
                        <img
                            src={imagePath}
                            alt={`Image ${index + 1}`}
                            className="max-h-full min-w-full object-cover align-bottom cursor-pointer"
                        />
                    </li>
                ))}

                <li className="flex-grow-[1000] h-[40vh]"></li>
            </ul>
        </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeLightbox}
        >
          <div
            className={`relative max-w-xl w-full h-full flex justify-center items-center transition-transform duration-300 ${
              isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              toggleZoom();
            }}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className={`rounded shadow-lg object-contain transition-transform duration-300 ${
                isZoomed ? "scale-150" : "scale-100"
              }`}
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Portraits;