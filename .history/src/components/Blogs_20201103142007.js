import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Blogs() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/about-sus')
        .then(resp => console.log(resp.data))
        .catch(err => console.log(err.response.status))
    }, [])

    return (
        <div>
            {blogs.map(blog => ( 
                <div className="blogContainer">
                    <h1>{blog.title}</h1>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Blogs