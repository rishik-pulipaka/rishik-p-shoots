import Footer from "../components/Footer"
import Header from "../components/Header"
import HomeCoverSection from "../components/HomeCoverSection"
import HomeMain from "../components/HomeMain"

const Home = () => {
  return (
    <div className="bg-[#3B3B3B] w-full h-full">
      <Header />
      <HomeCoverSection />
      <HomeMain />
      <Footer />
    </div>
  )
}

export default Home