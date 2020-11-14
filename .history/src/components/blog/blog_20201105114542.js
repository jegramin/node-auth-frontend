import React from 'react'
import {Link} from 'react-router-dom'

function Blog(props) {
    
    return (
        <div className="blogContainer">
            <div>
                <Link to={{ pathname: `/blog-detail/${props.blog._id}`, params: props.blog._id }} >
                    <h1>{props.blog.title}</h1>
                </Link>
                <p>{props.blog.snippet}</p>
            </div>
            <button>Delete</button>
        </div>
    )
}

export default Blog