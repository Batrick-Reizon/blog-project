import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import auth from "../config/firebase"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState("")

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                navigate("/home")
            } else {
                navigate("/login")
            }
        })
    }, [navigate])

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        try {
            signInWithEmailAndPassword(auth, email, password).then(() => {
                navigate("/home")
            }).catch((error) => {
                setError("Can't login. Please try again", error)
            })
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                alert("Incorrect email or password. Please try again.")
            } else {
                alert("Login failed. Please try again.")
            }
            console.log("Login failed", error.code, error.message)
        }
    }

    return (<div className="w-full h-full">
        <Navbar></Navbar>
        <div className="bg-gray-300 p-5 sm:p-10 md:p-15 lg:p-20 my-3 sm:my-5 md:my-8 lg:my-10 flex justify-center items-center">
            <div className="bg-white rounded p-3 sm:p-5 md:p-8 lg:p-10 w-full md:w-10/12 shadow-lg shadow-black">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold mb-5">Login</h1>
                    <label className="my-1 font-black">Email:</label>
                    <input type="email" value={email} onChange={handleChangeEmail} placeholder="Enter email" className="w-full border border-gray-300 p-2 mb-5 outline-none rounded" required />
                    <label className="my-1 font-black">Password:</label>
                    <input type="password" value={password} onChange={handleChangePassword} placeholder="Enter password" className="w-full border border-gray-300 p-2 outline-none rounded" required />
                    {error && <p className="text-red-500 font-semibold">{error}</p>}
                    <div className="my-3">
                        <h3>New User? <Link to={"/signup"} className="text-blue-600 font-semibold">Register Here</Link></h3>
                    </div>
                    <button type="submit" className="bg-orange-500 rounded text-white font-semibold px-3 py-1 cursor-pointer">Login</button>
                </form>
            </div>
        </div>
    </div>)
}

export default Login