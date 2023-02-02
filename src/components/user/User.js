import { Link } from "react-router-dom"

export const User = ({ user }) => (
    <article key={`user--${user.id}`} className="card user" style={{ width: `18rem` }}>
    <section className="card-body">

        <Link className="card-link"
        to={`/users/${user.id}`}>
        <h2 className="card-title">{user.username}</h2> </Link>
        <div className="card-name">{user.first_name} {user.last_name}</div>
        <div className="card-email">{user.email}</div>

    </section>
    </article>
)
