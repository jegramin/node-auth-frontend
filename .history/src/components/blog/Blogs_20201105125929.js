import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Blog from './blog'

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
            {blogComponent}
        </div>
    )
}

export default Blogs