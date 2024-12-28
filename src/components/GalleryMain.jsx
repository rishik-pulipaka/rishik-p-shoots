import portraitsImg from '../assets/portraits_image_2.1.jpg'
import actionImg from '../assets/action_image_2.jpg'

const GalleryMain = () => {
  return (
    <div id="main-container" className="w-full max-md:max-w-full text-white flex items-center mt-[100px] justify-evenly">
        
            <div id="portraits-container" className="bg-white relative w-[750px] h-[550px] hover:opacity-55 ease-in-out duration-300">
                <a href="/gallery/portraits">
                    <img
                        loading="lazy"
                        src={portraitsImg}
                        alt="portraits img"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <h1 className='absolute inset-0 self-center items-center justify-center text-center font-montserrat tracking-[5px] font-bold text-2xl'>portraits</h1>
                </a>
            </div>
            <div id="action-container" className="bg-white relative w-[750px] h-[550px] hover:opacity-55 ease-in-out duration-300">
                <a href="/gallery/action">
                    <img
                        loading="lazy"
                        src={actionImg}
                        alt="action img"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <h1 className='absolute inset-0 self-center items-center justify-center text-center font-montserrat tracking-[5px] font-bold text-2xl'>action</h1>
                </a>
            </div>
    </div>
  )
}

export default GalleryMain