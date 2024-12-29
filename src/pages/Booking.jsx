import Footer from "../components/Footer"
import Header from "../components/Header"
import BookingForm from "../components/BookingForm"

const Booking = () => {
  return (
    <div className="bg-[#3B3B3B] w-full h-full">
      <Header />

      <div id="title-container" className="flex justify-center items-center p-6 mt-6">
            <h1 className="font-montserrat text-[80px] text-white font-semibold">Booking</h1>
      </div>
      
      <div className="flex justify-center">
        <BookingForm />
      </div>
      
      <Footer />
    </div>
  )
}

export default Booking