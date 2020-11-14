import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Blogs() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(resp => setBlogs(resp.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="blogWrapper">
            {blogs.map(blog => ( 
                <div>
                    <h1>{blog.title}</h1>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Blogs