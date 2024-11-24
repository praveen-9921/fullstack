import React, { useState } from 'react'
import axios from 'axios'
import './create.css'

const Create = () => {
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
            const result = await axios.post('http://localhost:5501/api/create', blog);
            if (result) {
                alert("Blog saved Successfully")
                setBlog({
                    author: "",
                    title: "",
                    description: ""
                })
            }
        } catch (err) {

        }
    }
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

export default Create
