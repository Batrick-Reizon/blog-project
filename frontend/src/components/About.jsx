import { useEffect } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import auth from "../config/firebase"

function About() {
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                navigate("/about")
            } else {
                navigate("/login")
            }
        })
    }, [navigate])

    return (<div>
        <Navbar></Navbar>
        <div>
            <div className="text-center p-5 sm:p-10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">About This Blog</h1>
                <p className="my-1">Sharing Knowledge, ideas, creativity</p>
                <p className="my-3">Welcome to my blog! This platform is created to share Knowledge, Experiences, and ideas related to web development, programming, and technology. Wheather you're beginner or an experenced developer, you'll find usefull content here.</p>
            </div>
            <div className="bg-gray-300 p-5 sm:p-10 shadow shadow-black max-w-3xl mx-auto my-5">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold pb-3">🎯 My Mission</h1>
                    <p>My goal is to simplify complex concepts and make learning ease for everyone. I believe in learning by building real-world projects.</p>
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold py-3">⚙️ Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>React.js (Frontend)</li>
                        <li>Tailwind CSS (Styling)</li>
                        <li>Firebase (Authentication and Database)</li>
                        <li>Github (Deployment)</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold py-3">👨‍💻 About Me </h2>
                    <p>I am a passionate web dedveloper who enjoys building modern, responsive web applications. I love to exploring new technologies and improving my skills every day. I can regularly write a blogs on <span className="text-blue-500 font-semibold">web development, React principles.</span> and design</p>
                    <p className="my-2">You can check me here: <Link to={"/blog"} className="bg-black text-orange-500 hover:text-white font-bold py-1 px-3 rounded">My Blogs</Link></p>
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold pt-3">📬 Contact</h2>
                    <p className="py-2">If you want to send any feedback or any queries about my blogs, Feel free to connect with me anytime.</p>
                    <p className="font-bold">Email: batrickreizon@gmail.com</p>
                    <p className="font-bold">LinkedIn: Batrick Reizon</p>
                    <p className="font-bold">Github: Batrick-Reizon</p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    </div>)
}

export default About