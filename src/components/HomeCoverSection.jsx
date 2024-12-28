import coverImg from '../assets/cover_image.jpg'

const HomeCoverSection = () => {
  return (
    <div id="main-container" className="relative text-white font-montserrat">
        <div className="flex relative flex-col justify-center items-center px-20 py-96 w-full text-center text-white min-h-[1000px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src={coverImg}
          alt="Photography showcase background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mb-0 ml-9 max-w-full w-[629px] max-md:mb-2.5">
          <div className="text-4xl tracking-[14.4px] max-md:max-w-full">
            where <span className='font-bold'>memories</span> meet <span className='font-bold'>masterpieces</span>
          </div>
          <a href="/booking" className='self-center'>
            <div className="self-center p-4 mt-8 max-w-full text-xl font-semibold rounded-xl bg-stone-500 bg-opacity-50 tracking-[2.8px] w-[200px] hover:scale-110 ease-in-out duration-200">
                book now →
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeCoverSection