import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Blog(props) {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/blog', {
            id: props.location.query.id
        })
        .then(resp => console.log(resp.data))
        .catch(err => console.log(err.response.status))
    }, [])
    
    return (
        <div className="blogContainer" key={props.key}>
            <h1>{blog.title}</h1>
            <p>{blog.snippet}</p>
            <p>{blog.body}</p>
        </div>
    )
}

export default Blog