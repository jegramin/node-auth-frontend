import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Blog from './blog'
import {Link} from 'react-router-dom'

function Blogs(props) {
    const [blogs, setBlogs] = useState([])
    const [isUpdated, setIsUpdate] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/', {withCredentials: true})
        .then(resp => setBlogs(resp.data))
        .catch(err => {
            if (err.response.data.redirect) {
                props.history.push("/login")
            }
        })
    }, [isUpdated, props])

    function blogsUpdated() {
        setIsUpdate(!isUpdated)
    }

    const blogComponent = blogs.map((blog, key) => <Blog blog={blog} key={key} blogsUpdated={blogsUpdated}/>)
    
    return (
        <div className="blogsWrapper">
            <Link to='/new-blog'>
                <button className="addBtn">Add</button>
            </Link>
            {blogComponent}
        </div>
    )
}

export default Blogs