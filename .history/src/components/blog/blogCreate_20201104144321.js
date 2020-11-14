import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Blog from './blog'

function Blogs() {
    const [title, setTitle] = useState([])
    const [snippet, setSnippet] = useState([])
    const [body, setBody] = useState([])

    function handleClick(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/blog/create')
        .then(resp => console.log(resp.data))
        .catch(err => console.log(err.response.status))
    }
    
    return (
        <div>
            <input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"/>
            <input type='text' value={snippet} onChange={e => setSnippet(e.target.value)} placeholder="Snippet"/>
            <input type='text' value={body} onChange={e => setBody(e.target.value)} placeholder="Body"/>
            <input type='submit' onClick={handleClick}/>
        </div>
    )
}

export default Blogs