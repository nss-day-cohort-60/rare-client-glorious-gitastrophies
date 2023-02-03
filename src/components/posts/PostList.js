import { useEffect, useState } from "react"
import { Post } from "./Post";
import { getPosts } from "../../managers/PostManger"

import "./Post.css"

export const PostList = () => {
    const [posts, setPosts] = useState([]);


    useEffect(
        () => {
            getPosts().then(postData => setPosts(postData))
        }, [])

    return (
        <div style={{ margin: "0rem 3rem" }}>
        <h1>Post</h1>

            {/* <p>{""}</p>
            <section key={posts.id} className="post"> */}
            {/* <h2>{post.title}</h2>


                {post.map(a => <div key={`post--${a.id}`}>{a.title} ({a.publication_date}) ({a.content})</div>)} */}
        <section>
            {
                posts.map(post => {
                    return <Post post={post} />
                })
            }
        </section>
        </div>

    );
};
