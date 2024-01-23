
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const RootLayout = () => {
  return (
    <div className="w-full h-full">
      <Navbar />

      <section className="">
        <Outlet />
      </section>
    </div>
  )
}

export default RootLayout