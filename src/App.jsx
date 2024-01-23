import { Routes, Route } from "react-router-dom";

import RootLayout from "./_root/RootLayout"
import LandingPage from "./_root/pages/LandingPage"

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        <Route element={<RootLayout />} >
          <Route path='/' element={<LandingPage />} />
        </Route>
      </Routes>

    </main>
  )
}

export default App