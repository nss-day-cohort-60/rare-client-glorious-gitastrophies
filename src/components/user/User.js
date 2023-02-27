import { Link } from "react-router-dom"

export const User = ({ user }) => (
    <article key={`user--${user.id}`} className="card user" style={{ width: `18rem` }}>
    <section className="card-body">

        <Link className="card-link"
        to={`/users/${user.id}`}>
        <h2 className="card-title">{user.full_name}</h2> </Link>
    </section>
    </article>
)
