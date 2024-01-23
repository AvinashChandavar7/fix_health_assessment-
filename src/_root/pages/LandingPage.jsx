import { BookingForm, HeroSection, Testimonials } from "../../components"


const LandingPage = () => {
  return (
    <div className="w-full h-full">
      <div id="home" className="w-full ">
        <HeroSection />
      </div>

      <div id="book_form" className="w-full h-screen flex flex-col items-center justify-center my-10">
        <BookingForm />
      </div>

      <div id="testimonials" className=" ">
        <Testimonials />
      </div>
    </div>
  )
}

export default LandingPage