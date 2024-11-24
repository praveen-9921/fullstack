import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Update = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState({
        author: "",
        title: "",
        description: ""
    })

    const changeInput = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value })
        // console.log(blog);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.put(`http://localhost:5501/api/blog/update/${id}`, blog);
            if (result) {
                alert("Blog Updated Successfully")
                setBlog({
                    author: "",
                    title: "",
                    description: ""
                })
            }
        } catch (err) {

        }
    }

    const getBlogs = async()=>{
        try{
            const blogFetched = await axios.get(`http://localhost:5501/api/blog/${id}`);
            setBlog(blogFetched.data.blogs)
        }catch(err){

        }
    }

    useEffect(()=>{
        getBlogs()
    },[])
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Author:</label>
                <input type="text" name="author" value={blog.author} onChange={changeInput} />
                <br />
                <label>Title:</label>
                <input type="text" name="title" value={blog.title} onChange={changeInput} />
                <br />
                <label>description:</label>
                <input type='text' name="description" value={blog.description} onChange={changeInput} />

                <button type='submit'>Submit</button>

            </form>
        </>
    )
}

export default Update
