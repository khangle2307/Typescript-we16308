import { NavLink, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Aboutpage from "./pages/Aboutpage"
import Homepage from "./pages/Homepage"
import Productpage from "./pages/Productpage"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="product" element={<Productpage/>}/>
            <Route path="about" element={<Aboutpage/>}/>
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
