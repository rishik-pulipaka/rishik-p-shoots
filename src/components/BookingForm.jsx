import FormInput from "./FormInput"

const BookingForm = () => {
  return (
    <form className="flex flex-col gap-[70px] items-center px-20 py-36 mt-48 w-full shadow-lg bg-neutral-600 max-w-[1050px] rounded-[49px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <div className="max-w-full w-[860px]">
        <div id="name-container" className="flex gap-5 max-md:flex-col">
          <div id="first-name-container" className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <FormInput label="first name" width="w-[400px]" />
          </div>
          <div id="last-name-container" className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <FormInput label="last name"  width="w-[400px]" />
          </div>
        </div>
      </div>
      <FormInput type="email" label="email" width="w-[860px]" />
      <FormInput type="text" label="photoshoot type" width="w-[860px]" />
      <FormInput type="datetime-local" label="day and time" width="w-[860px]" />
      <div id="comments-container" className="flex flex-col">
        <label htmlFor="comments" className="self-start ml-8 text-base font-bold text-white tracking-[2.85px] max-md:ml-2.5">
            comments:
        </label>
        <textarea id="comments" className="flex shrink-0 mt-2.5 bg-[#5C5C5C] rounded-[34px] h-[340px] w-[860px] text-wrap p-10 text-left text-white font-montserrat text-xl" />
      </div>
      <input type="submit" value="submit" className="bg-[#5C5C5C] text-white font-montserrat text-xl font-bold rounded-[34px] px-10 py-2.5" />
    </form>
  )
}

export default BookingForm