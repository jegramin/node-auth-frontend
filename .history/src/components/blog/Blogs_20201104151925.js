import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Blog from './blog'

function Blogs() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/')
        .then(resp => setBlogs(resp.data))
        .catch(err => console.log(err))
    }, [])

    const blogComponent = blogs.map((blog, key) => <Blog blog={blog} key={key}/>)
    
    return (
        <div>
            {blogComponent}
        </div>
    )
}

export default Blogs