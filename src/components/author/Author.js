import { Link } from "react-router-dom"

export const Author = ({ author }) => (
    <article key={`author--${author.id}`} className="card author" style={{ width: `18rem` }}>
    <section className="card-body">

        <Link className="card-link"
        to={`/users/${author.id}`}>
        <h2 className="card-title">{author.full_name}</h2> </Link>
    </section>
    </article>
)
