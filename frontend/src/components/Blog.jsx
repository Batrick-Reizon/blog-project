import { useCallback, useEffect, useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import axios from "axios"
import auth from "../config/firebase"
import { useNavigate } from "react-router-dom"

function Blog() {
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()
    const [admin, setAdmin] = useState(false)
    const API = import.meta.env.VITE_APP_API_URL
    const UID = import.meta.env.VITE_APP_UID

    const fetchblogs = useCallback(() => {
        axios.get(`${API}/blogs`).then((res) => {
            console.log(res.data)
            setBlogs(res.data)
        }).catch((error) => {
            console.log("Error in getting data", error)
        })
    }, [])

    useEffect(() => {
        fetchblogs()
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/blog")
                if (user.uid === UID) {
                    setAdmin(true)
                } else {
                    setAdmin(false)
                }
            } else {
                navigate("/login")
            }
        })
    }, [fetchblogs, navigate, UID])

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleChangeContent = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const date = new Date().toLocaleString()
        const likes = 0

        axios.post(`${API}/addblog`, { title, date, content, likes }).then(() => {
            fetchblogs()
        }).catch((error) => {
            console.log("Failed to add blog", error)
        })

        setTitle("")
        setContent("")
    }
    const handleLike = async (blog_id) => {
        try {
            const updateblog = await axios.patch(`${API}/likeblog/${blog_id}`)
            console.log(updateblog)
            setBlogs(prev => prev.map((blog => blog._id === blog_id ? updateblog.data : blog)))
        } catch (error) {
            console.log("Error in updating blog", error)
        }
    }
    const handleDelete = async (id) => {
        try {
            const deleteblog = await axios.delete(`${API}/deleteblog/${id}`)
            console.log(deleteblog)
            setBlogs(prev => prev.filter((blog => blog._id !== id)))
        } catch (error) {
            console.log("Error in deleting blog", error)
        }
    }

    return (<div>
        <Navbar></Navbar>
        <div className="flex flex-col p-5 sm:p-6 md:p-8 lg:p-10 justify-center items-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">Latest <span className="text-orange-500">Blogs📚</span></h1>
            {admin && <form onSubmit={handleSubmit} className="my-5 w-full sm:w-3/4">
                <input type="text" onChange={handleChangeTitle} value={title} placeholder="Blog Title" className="w-full my-3 border border-gray-400 p-1 outline-none" required />
                <textarea placeholder="Blog Content" value={content} onChange={handleChangeContent} className="w-full border border-gray-400 p-1 outline-none h-28" required></textarea>
                <button type="submit" className="my-2 bg-orange-400 cursor-pointer hover:bg-orange-600 text-black font-semibold w-full p-2 rounded">Add Blog</button>
            </form>}
        </div>
        <div className="flex flex-wrap justify-between items-center w-full gap-1">
            {
                blogs.map((blog, index) => {
                    return (
                        <div key={index} className="bg-gray-300 p-5 w-full sm:w-[47%] my-3 mx-1 sm:my-5 sm:mx-3 rounded shadow-lg shadow-black font-bold">
                            <h1 className="text-xl">{blog.title}</h1>
                            <h3>{blog.date}</h3>
                            <h3>{blog.content}</h3>
                            <button className="text-blue-500 cursor-pointer" onClick={() => handleLike(blog._id)}>Like</button> <span>{blog.likes} Likes</span> <br></br>
                            {admin && <button className="bg-red-500 text-white font-bold py-1 px-3 rounded cursor-pointer" onClick={() => handleDelete(blog._id)}>Delete</button>}
                        </div>
                    )
                })
            }
        </div>
        <Footer></Footer>
    </div>)
}

export default Blog