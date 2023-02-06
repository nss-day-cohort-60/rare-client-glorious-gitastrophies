import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { getPostByUser } from "../../managers/PostManger";
import { Post } from "./Post";

export const UserPosts = ({ token }) => {
    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    useEffect(
        () => {
            getPostByUser(token).then(postData => setPosts(postData))
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
}