import { Link } from "react-router-dom";
import { User } from "../user/User";
import "./Post.css"

export const Post = ({ post }) => (

    <article key ={`post--${post.id}`} className="card user" style={{width: `18rem`}}>
        <section className="card-body">
            <Link className="card-link"
            to={`/posts/${post.id}`}>
                <h2 className="card-title">{post.title}</h2></Link>
            <div className="card-name">{User.first_name} {User.last_name}</div>
        </section>
    </article>
)






