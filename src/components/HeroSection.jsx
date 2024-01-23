
const HeroSection = () => {
  return (
    <div className="w-full  h-screen  flex flex-col items-center justify-center text-8xl lg:flex-row ">
      <div className=" w-full h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl lg:text-5xl font-bold mb-4">Welcome to Fix Health</h1>
          <p className="text-lg mb-8">Your Partner in Wellness</p>

          <p className="text-xl">Book a Consultation and Start Your Journey to Better Health</p>
        </div>  </div>
      <div className="w-full h-full rounded-md  ">
        <img src="/assets/hero1.jpeg" alt="hero" className="object-contain rounded-full scale-75" />
      </div>
    </div>
  )
}

export default HeroSection

