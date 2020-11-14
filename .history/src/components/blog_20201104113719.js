import React from 'react'

function Blog(props) {

    return (
        <div>
            {props.blogs.map((blog, key) => ( 
                <div className="blogContainer" key={key}>
                    <h1>{blog.title}</h1>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Blog