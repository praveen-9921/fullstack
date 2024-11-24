import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()
    const getBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:5501/api/allblogs')
            // console.log(response.data.blogs);
            setBlogs(response.data.blogs)
        } catch (err) { }
    }

    useEffect(() => {
        getBlogs()
    }, [])

    const handleDelete = async (id)=>{
        try {
            const deleteBlog = await axios.delete(`http://localhost:5501/api/blog/remove/${id}`)
            if(deleteBlog){
                alert('Blog deleted successfully')
            }
        }catch(err){

        }
    }
    return (
        <>
            <h1>
                Blogs are here
            </h1>
            <div className="blog-container">
                {blogs.map((item) => (
                    <div className="blog-item" key={item.id}>
                        <h3 className="blog-author">{item.author}</h3>
                        <h2 className="blog-title">{item.title}</h2>
                        <p className="blog-description">{item.description}</p>
                        <div className="blog-buttons">
                            <button className="blog-button" onClick={() => navigate(`/update/${item._id}`)}>Update</button>
                            <button className="blog-button" onClick={() => handleDelete(item._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Blogs
