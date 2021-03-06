import React from 'react'
import {Link} from 'react-router-dom'

function Blog(props) {
    
    return (
        <div className="blogContainer">
            <Link to={{ pathname: `/blog-detail/${props.blog.id}` }} >
                <h1>{props.blog.title}</h1>
            </Link>
            <p>{props.blog.snippet}</p>
        </div>
    )
}

export default Blog