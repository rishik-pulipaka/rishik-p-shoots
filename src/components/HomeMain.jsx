import portraitsImg from '../assets/images/portraits/portraits_image.jpg'
import actionImg from '../assets/images/action/action_image.jpg'

export const HomeMain = () => {
  return (
    <div className="w-full max-md:max-w-full">
        <div className="flex gap-0 max-md:flex-col">
            {/* Portraits Image */}
            <a href="/gallery/portraits" className='w-full'>
              <div className="
              flex
              relative
              flex-col
              justify-center
              items-center
              px-20
              py-96 
              w-full 
              text-center 
              text-white 
              min-h-[1000px] 
              max-md:px-5 
              max-md:py-24 
              max-md:max-w-full 
              hover:opacity-65 
              ease-in-out 
              duration-300">
                <img
                  loading="lazy"
                  src={portraitsImg}
                  alt="portraits img"
                  className="object-cover absolute inset-0 size-full"
                />
                <h1 className='absolute inset-0 self-center items-center justify-center text-center font-montserrat tracking-[5px] font-bold text-2xl'>portraits</h1>
              </div>
            </a>

            {/* Action Image */}
            <a href="/gallery/action" className='w-full'>
              <div className="
              flex 
              relative 
              flex-col 
              justify-center 
              items-center 
              px-20 
              py-96 
              w-full 
              text-center 
              text-white 
              min-h-[1000px] 
              max-md:px-5 
              max-md:py-24 
              max-md:max-w-full 
              hover:opacity-65 
              ease-in-out 
              duration-300">
                <img
                  loading="lazy"
                  src={actionImg}
                  alt="action img"
                  className="object-cover absolute inset-0 size-full"
                />
                <h1 className='absolute inset-0 self-center items-center justify-center text-center font-montserrat tracking-[5px] font-bold text-2xl'>action</h1>
              </div>
            </a>
        </div>

        
      </div>
  )
}

export default HomeMain