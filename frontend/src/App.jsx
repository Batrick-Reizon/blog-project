import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Blog from "./components/Blog"
import About from "./components/About"
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {
  return (<div className="bg-black px-5 py-10 sm:px-10 sm:py-20">
    <div className="bg-white px-3 sm:5 py-5 sm:py-7 rounded">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  </div>)
}

export default App