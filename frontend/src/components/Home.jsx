import Navbar from "./Navbar"
import my from "../asset/images/Batrick Reizon.jpg"
import html5 from "../asset/images/html.png"
import css3 from "../asset/images/css3.png"
import tailwindcss from "../asset/images/tailwindcss.png"
import js from "../asset/images/js.png"
import react from "../asset/images/react.png"
import node from "../asset/images/nodejs.png"
import express from "../asset/images/express.png"
import mongodb from "../asset/images/mongodb.jpg"
import mysql from "../asset/images/mysql.png"
import git from "../asset/images/git.png"
import Resume from "../Resume/Batrick Reizon Resume .pdf"
import login from "../asset/images/login.png"
import todolist from "../asset/images/todolist.png"
import food from "../asset/images/food.png"
import home from "../asset/images/home.png"
import portfolio from "../asset/images/portfolio.png"
import nostra from "../asset/images/nostra.png"
import blog from "../asset/images/blogimage.png"
import { Link } from "react-router-dom"
import Footer from "./Footer"
import { useEffect } from "react"
import auth from "../config/firebase"
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                navigate("/home")
            } else {
                navigate("/login")
            }
        })
    }, [navigate])

    return (<div>
        <Navbar></Navbar>
        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-10">
            <div className="my-5 sm:my-10 md:my-14 lg:my-20 w-10/12 sm:w-1/2 text-center sm:text-left">
                <h3 className="text-3xl font-bold">Hey! I Am</h3>
                <h1 className="text-4xl sm:text-5xl text-orange-500 font-bold">Batrick Reizon</h1>
                <p className="font-semibold">I can create stunning website for your company. Do check my works. I won't disappoint you. Try me for 7 Days before you decide anything.</p>
                <button className="inline-block mt-5 bg-amber-400 hover:bg-amber-600 text-white font-semibold px-2 py-1 rounded shadow shadow-black cursor-pointer">Hire Me</button>
            </div>
            <div>
                <img src={my} alt="My-Image" style={{ width: "250px", height: "250px", borderRadius: "10px", boxShadow: "0px 3px 0px 5px " }} />
            </div>
        </div>

        <div className="flex flex-wrap justify-around items-center gap-5 sm:gap-10 my-10 sm:my-5">
            <div>
                <img src={html5} alt="html5-image" style={{ width: "50px", height: "50px" }} />
            </div>
            <div>
                <img src={css3} alt="css3-image" style={{ width: "50px", height: "50px" }} />
            </div>
            <div>
                <img src={tailwindcss} alt="tailwindcss-image" style={{ width: "50px", height: "50px" }} />
            </div>
            <div>
                <img src={js} alt="javascript-image" style={{ width: "50px", height: "50px" }} />
            </div>
            <div>
                <img src={react} alt="reactjs-image" style={{ width: "50px", height: "50px" }} />
            </div>
            <div>
                <img src={node} alt="nodejs-image" style={{ width: "50px", height: "50px" }} />
            </div>
            <div>
                <img src={express} alt="express-image" style={{ width: "50px", height: "50px" }} />
            </div>
            <div>
                <img src={mongodb} alt="mongodb-image" style={{ width: "50px", height: "50px" }} />
            </div>
            <div>
                <img src={mysql} alt="mysql-image" style={{ width: "50px", height: "50px" }} />
            </div>
            <div>
                <img src={git} alt="git-image" style={{ width: "50px", height: "50px" }} />
            </div>
        </div>

        <div className="flex flex-wrap justify-evenly items-center px-3 py-5 sm:px-5 md:p-8  lg:p-10 gap-10">
            <div className="text-center">
                <div style={{ boxShadow: "0px 5px 0px 5px darkviolet", borderRadius: "5px" }} className="p-5 mt-5">
                    <h4 className="bg-violet-800 inline-block text-center rounded-3xl px-10 text-white font-semibold py-3">20+</h4>
                    <p className="font-semibold my-1">Project Completed</p>
                </div>
                <div style={{ boxShadow: "0px 5px 0px 5px darkgreen", borderRadius: "5px" }} className="p-5 my-5">
                    <h4 className="bg-green-800 inline-block text-center rounded-3xl px-10 text-white font-semibold py-3">4</h4>
                    <p className="font-semibold my-1">Months of Experience</p>
                </div>
            </div>
            <div className="text-center w-full sm:w-1/2 sm:pl-10 md:pl-16 lg:pl-28">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">My Awesome <span className="text-orange-600">Services</span></h1>
                <p className="font-semibold">I have attached my resume for your reference</p>
                <a href={Resume} className="bg-linear-to-tr from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-400 px-3 py-1 text-xl my-1 inline-block rounded text-white font-semibold shadow shadow-black" target="_blank">Download CV</a>
            </div>
        </div>

        <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">Checkout My Live <span className="text-orange-600">Projects</span> Here</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 sm:mt-5 my-10 bg- p-5 bg-black">
                <div className="flex justify-center items-center">
                    <a href="https://login-firebase-lilac.vercel.app/" target="_blank"><img src={login} alt="login-image" className="w-80 h-40 rounded opacity-50 hover:opacity-100" /></a>
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://todo-fe-be-db.vercel.app/" target="_blank"><img src={todolist} alt="todolist-image" className="w-80 h-40 rounded opacity-50 hover:opacity-100" /></a>
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://foodie-vite.vercel.app/" target="_blank"><img src={food} alt="food-image" className="w-80 h-40 rounded opacity-50 hover:opacity-100" /></a>
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://home-vite.vercel.app/" target="_blank"><img src={home} alt="food-image" className="w-80 h-40 rounded opacity-50 hover:opacity-100" /></a>
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://portfolio-vite-iota-jet.vercel.app/" target="_blank"><img src={portfolio} alt="food-image" className="w-80 h-40 rounded opacity-50 hover:opacity-100" /></a>
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://batrick-reizon.github.io/nostra-e-commerce-website/" target="_blank"><img src={nostra} alt="food-image" className="w-80 h-40 rounded opacity-50 hover:opacity-100" /></a>
                </div>
            </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-10 my-5 sm:my-0">
            <div className="w-11/12 sm:w-1/4 flex justify-center items-center">
                <img src={blog} alt="Blog-Image" className="w-96 h-80" />
            </div>
            <div className="text-center flex flex-col justify-center items-center w-11/12 sm:w-2/3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">I like to write</h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500">Blogs about tech</h1>
                <p className="my-1 font-semibold">You can Know better about me by reading my blogs here. I share my expertise here.</p>
                <Link to={"/blog"} className="inline-block bg-linear-to-tr from-yellow-400 to-yellow-600 hover:from-orange-400 hover:to-orange-600 py-1 px-3 rounded shadow shadow-black">Read my Blogs</Link>
            </div>
        </div>

        <Footer></Footer>
    </div>)
}

export default Home