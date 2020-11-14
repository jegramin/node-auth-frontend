import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Blog(props) {
    const [deleted, setDeleted] = useState(false)
    function handleDelete() {
        axios.delete(`http://localhost:3001/blog/${props.blog._id}`)
            .then(response => setDeleted(true))
            .catch(err => console.log(err))
    }
    
    return (
        <div className="blogContainer">
            <div>
                <Link to={{ pathname: `/blog-detail/${props.blog._id}`, params: props.blog._id }} >
                    <h1>{props.blog.title}</h1>
                </Link>
                <p>{props.blog.snippet}</p>
            </div>
            <div>
                <button>Edit</button>
                <button onClick={() => handleDelete()}>Delete</button>
            </div>
        </div>
    )
}

export default Blog