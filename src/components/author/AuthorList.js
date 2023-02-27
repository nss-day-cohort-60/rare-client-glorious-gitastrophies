import { useState, useEffect } from "react"
import { getAuthors } from "../../managers/AuthorsManager"
import { Author } from "./Author"
import "./User.css"


export const AuthorList = () => {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        getAuthors().then(authorsData => setAuthors(authorsData))
    }, [])

    return (
        <div style={{ margin: "0rem 3rem" }}>
        <h1>Users</h1>

        <article className="users">
            {
            authors.map(author => {
                return <Author author={author}  key={`author--${author.id}`}/>
            })
        }
        </article>
    </div>
    )
}