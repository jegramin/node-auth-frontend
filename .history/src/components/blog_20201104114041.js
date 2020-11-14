import React from 'react'

function Blog(props) {

    return (
        <div className="blogContainer" key={props.key}>
            <h1>{props.blog.title}</h1>
            <p>{props.blog.body}</p>
        </div>
    )
}

export default Blog