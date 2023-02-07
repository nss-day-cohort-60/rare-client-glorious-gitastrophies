import { Link } from "react-router-dom";
import "./Post.css"

export const Post = ({ post } ) => (

    <article key ={`post--${post.id}`} className="card user" style={{width: `18rem`}}>
        <section className="card-body">
            <Link className="card-link"
            to={`/posts/${post.id}`}>
                <h1 className="card-title">{post.title}</h1></Link>
                <img className="image" src={post.image_url} />
            <div> Category: {post?.category?.label}</div>
            <h2> {post?.content} </h2>
            <div> Author: {post?.user?.first_name} {post?.user?.last_name}</div> 
        </section>
    </article>
)

