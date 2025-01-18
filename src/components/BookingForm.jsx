import { useState } from "react"

const BookingForm = () => {

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    photoshoot_type: "",
    date_time: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:1800/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Booking submitted successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          photoshoot_type: "",
          date_time: "",
          comments: "",
        });
      } else {
        console.error("Server response error:", data);
        alert(`Error submitting booking: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Failed to submit booking. Please try again.");
    }
  };



  return (
    <form className="flex flex-col gap-7 items-center px-20 py-[4.5rem] mt-8 w-full shadow-lg bg-neutral-600 max-w-[1050px] rounded-[49px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full" onSubmit={(e) => e.preventDefault()}>

      <div className="max-w-full w-[860px]">
        <div id="name-container" className="flex gap-7 max-md:flex-col">
          <div id="first-name-container" className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <label htmlFor="first-name" className="self-start ml-8 text-base font-bold text-white tracking-[2.85px] max-md:ml-2.5">
              first name:
            </label>
            <input
              id="first-name"
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              label="first-name"
              className="flex shrink-0 mt-2.5 bg-[#5C5C5C] rounded-[34px] w-[400px] h-[50px] text-wrap pl-10 text-left text-white font-montserrat text-xl"
            />
          </div>

          <div id="last-name-container" className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <label htmlFor="last-name" className="self-start ml-8 text-base font-bold text-white tracking-[2.85px] max-md:ml-2.5">
              last name:
            </label>
            <input
              id="last-name"
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              label="last-name"
              className="flex shrink-0 mt-2.5 bg-[#5C5C5C] rounded-[34px] w-[400px] h-[50px] text-wrap pl-10 text-left text-white font-montserrat text-xl" />
          </div>

        </div>

      </div>

      <div id="email-container" className="flex flex-col">
        <label htmlFor="email" className="self-start ml-8 text-base font-bold text-white tracking-[2.85px] max-md:ml-2.5">
            email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="flex shrink-0 mt-2.5 bg-[#5C5C5C] rounded-[34px] h-[50px] w-[860px] text-wrap pl-10 text-left text-white font-montserrat text-xl"
        />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="email" className="self-start ml-8 text-base font-bold text-white tracking-[2.85px] max-md:ml-2.5 pr-5">
          photoshoot type:
        </label>
        <select
          id="photoshoot-type"
          name="photoshoot_type"
          value={formData.photoshoot_type}
          onChange={handleChange}
          className="appearance-none outline-none flex shrink-0 mt-2.5 bg-[#5C5C5C] rounded-[34px] h-[50px] w-[860px] text-wrap pl-10 text-left text-white font-montserrat text-xl"
        >
          <option value="choose_one" selected disabled>Choose one</option>
          <option value="modeling">Modeling</option>
          <option value="headshots">Headshots</option>
          <option value="event">Event</option>
          <option value="sports">Sports</option>
          <option value="car">Car</option>
          <option value="product">Product</option>
        </select>
      </div>

      <div id="date-and-time-container" className="flex flex-col">
        <label htmlFor="day-and-time" className="self-start ml-8 text-base font-bold text-white tracking-[2.85px] max-md:ml-2.5">
            day and time:
        </label>
        <input
          id="date-time"
          type="datetime-local"
          name="date_time"
          value={formData.date_time}
          onChange={handleChange}
          className="flex shrink-0 mt-2.5 bg-[#5C5C5C] rounded-[34px] h-[50px] w-[860px] text-wrap pl-10 text-left text-white font-montserrat text-xl"
        />
      </div>

      <div id="comments-container" className="flex flex-col">
        <label htmlFor="comments" className="self-start ml-8 text-base font-bold text-white tracking-[2.85px] max-md:ml-2.5">
            comments:
        </label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="flex shrink-0 mt-2.5 bg-[#5C5C5C] rounded-[34px] h-[340px] w-[860px] text-wrap p-10 text-left text-white font-montserrat text-xl"
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="bg-[#5C5C5C] text-white font-montserrat text-xl font-bold rounded-[34px] px-10 py-2.5 mt-10"
      >
        Submit
      </button>
    </form>
  )
}

export default BookingForm