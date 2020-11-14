import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Blog(props) {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/blog', {
            id: props.blog._id
        })
        .then(resp => console.log(resp.data))
        .catch(err => console.log(err.response.status))
    }, [])
    
    return (
        // <div className="blogContainer" key={props.key}>
        //     <h1>{props.blog.title}</h1>
        //     <p>{props.blog.snippet}</p>
        //     <p>{props.blog.body}</p>
        // </div>
        <p>sdfd</p>
    )
}

export default Blog