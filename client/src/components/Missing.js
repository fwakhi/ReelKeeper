import React from "react"
import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article style={{ padding: "100px" }}>
            <h1>Oops!</h1>
            <p>Page Not Found</p>
            <Link to="/" className='btn-pass'>Visit Our Homepage</Link>
        </article>
    )
}

export default Missing