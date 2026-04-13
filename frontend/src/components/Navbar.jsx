import { Link, useNavigate } from "react-router-dom"
import { FaBars, FaX } from "react-icons/fa6"
import { useEffect, useState } from "react"
import auth from "../config/firebase"
import { signOut } from "firebase/auth"

function Navbar() {
    const [menu, setMenu] = useState(false)
    const navigate = useNavigate()
    const [log, setLog] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("User logged in")
                setLog(true)
            } else {
                console.log("User logged out")
                setLog(false)
            }
        })
    }, [])

    const handleLogin = () => {
        navigate("/login")
    }
    const handleLogout = () => {
        signOut(auth)
    }

    return (<div className="flex items-center justify-between">
        <Link to={"/"} className="text-2xl font-black">Personal</Link>
        <div className="hidden sm:flex justify-center items-center gap-10">
            <Link to={"/home"} className="text-lg font-semibold hover:underline underline-offset-2">Home</Link>
            <Link to={"/blog"} className="text-lg font-semibold hover:underline underline-offset-2">Blogs</Link>
            <Link to={"/about"} className="text-lg font-semibold hover:underline underline-offset-2">About</Link>
            { log ? <button className="bg-linear-to-tr from-amber-300 to-amber-500 text-white font-semibold px-3 py-1 rounded cursor-pointer text-lg" onClick={handleLogout}>Logout</button> : <button className="bg-linear-to-tr from-amber-300 to-amber-500 text-white font-semibold px-3 py-1 rounded cursor-pointer text-lg" onClick={handleLogin}>Login</button> }
        </div>
        <FaBars className="text-lg cursor-pointer flex sm:hidden justify-center items-center" onClick={() => setMenu(true)}></FaBars>

        <div className="flex flex-col fixed top-0 right-0 bg-white w-1/2 h-full z-10 p-5 transform transition-all ease-in-out duration-1000" style={{ right: menu ? "0%" : "-50%" }}>
            <div className="flex justify-end">
                <FaX className="" onClick={() => setMenu(false)}></FaX>
            </div>
            <div className="flex flex-col justify-center items-center gap-10 my-10">
                <Link to={"/home"} className="text-lg font-semibold hover:underline underline-offset-2">Home</Link>
                <Link to={"/blog"} className="text-lg font-semibold hover:underline underline-offset-2">Blog</Link>
                <Link to={"/about"} className="text-lg font-semibold hover:underline underline-offset-2">About</Link>
                { log ? <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded cursor-pointer text-lg" onClick={handleLogout}>Logout</button> : <button className="bg-green-600 text-white font-semibold px-3 py-1 rounded cursor-pointer text-lg" onClick={handleLogin}>Login</button> }                
            </div>
        </div>

    </div>)
}

export default Navbar