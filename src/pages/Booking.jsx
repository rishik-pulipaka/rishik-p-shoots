import Footer from "../components/Footer"
import Header from "../components/Header"
import BookingForm from "../components/BookingForm"

const Booking = () => {
  return (
    <div className="bg-[#3B3B3B] w-full h-full">
      <Header />
      
      <div className="flex justify-center">
        <BookingForm />
      </div>
      
      <Footer />
    </div>
  )
}

export default Booking