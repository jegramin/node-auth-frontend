import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Blog from './blog'

function Blogs() {
    const [title, setTitle] = useState([])
    const [snippet, setSnippet] = useState([])
    const [body, setBody] = useState([])

    useEffect(() => {
        axios.post('http://localhost:3001/')
        .then(resp => setBlogs(resp.data))
        .catch(err => console.log(err.response.status))
    }, [])

    const blogComponent = blogs.map((blog, key) => <Blog blog={blog} key={key}/>)
    
    return (
        <div>
            <input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"/>
            <input type='text' value={snippet} onChange={e => setSnippet(e.target.value)} placeholder="Snippet"/>
            <input type='text' value={body} onChange={e => setBody(e.target.value)} placeholder="Body"/>
        </div>
    )
}

export default Blogs