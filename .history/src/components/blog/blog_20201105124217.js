import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Blog(props) {
    function handleDelete() {
        axios.delete(`/blog/${props.blog._id}`)
            .then(response => console.log(response))
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
                <button onChange={() => handleDelete()}>Delete</button>
            </div>
        </div>
    )
}

export default Blog