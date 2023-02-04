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
        <section>
            {
                posts.map(post => {
                    return <Post post={post} key={`post--${post.id}`} />
                })
            }
        </section>
        </div>

    );
};
