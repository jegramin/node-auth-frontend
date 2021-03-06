import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Blog from './blog'
import {Link} from 'react-router-dom'

function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [isUpdated, setIsUpdate] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/')
        .then(resp => setBlogs(resp.data))
        .catch(err => console.log(err))
    }, [isUpdated])

    function blogsUpdated() {
        setIsUpdate(!isUpdated)
    }

    const blogComponent = blogs.map((blog, key) => <Blog blog={blog} key={key} blogsUpdated={blogsUpdated}/>)
    
    return (
        <div>
            <Link to='/new-blog'>
                <button>Add</button>
            </Link>
            {blogComponent}
        </div>
    )
}

export default Blogs