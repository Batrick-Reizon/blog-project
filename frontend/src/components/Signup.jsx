import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "../config/firebase"

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/home")
            } else {
                navigate("/signup")
            }
        })
    }, [navigate])

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (password !== confirmpassword) {
            setError("Password does not match")
            return
        }
        try {
            createUserWithEmailAndPassword(auth, email, password).then((res) => {
                console.log(res.user.email)
                auth.signOut().then(() => {
                    navigate("/login")
                }).catch(() => {
                    navigate("/signup")
                })
            })
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Email already in use. Please create another new username")
            } else if (error.code === "auth/weak-password") {
                alert("Password should be at least 6 characters")
            } else if (error.code === "auth/invalid-email") {
                alert("Invalid email name. Please try again with new email name")
            } else {
                alert("Signin failed. Please try again")
            }
            console.log("Can't created account", error.code, error.message)
        }
    }

    return (<div className="w-full h-full">
        <Navbar></Navbar>
        <div className="bg-gray-300 p-5 sm:p-10 md:p-15 lg:p-20 my-3 sm:my-5 md:my-8 lg:my-10 flex justify-center items-center">
            <div className="bg-white rounded p-3 sm:p-5 md:p-8 lg:p-10 w-full md:w-10/12 shadow-lg shadow-black">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold mb-5">Signup</h1>
                    <label className="my-1 font-black">Email:</label>
                    <input type="email" value={email} onChange={handleChangeEmail} placeholder="Enter email" className="border border-gray-300 p-2 rounded outline-none w-full mb-5" required />
                    <label className="my-1 font-black">Password:</label>
                    <input type="password" value={password} onChange={handleChangePassword} placeholder="Enter password" className="border border-gray-300 p-2 rounded outline-none w-full mb-5" required />
                    <label className="my-1 font-black">Confirm Password:</label>
                    <input type="password" value={confirmpassword} onChange={handleChangeConfirmPassword} placeholder="Enter confirm password" className="border border-gray-300 p-2 rounded outline-none w-full" required />
                    {error && <p className="text-red-500 font-semibold my-3">{error}</p>}
                    <div className="my-3">
                        <h3>Already have an account? <Link to={"/login"} className="text-blue-600 font-semibold">Login Here</Link></h3>
                    </div>
                    <button type="submit" className="bg-orange-500 rounded text-white font-semibold px-3 py-1 cursor-pointer">Register</button>
                </form>
            </div>
        </div>
    </div>)
}

export default Signup