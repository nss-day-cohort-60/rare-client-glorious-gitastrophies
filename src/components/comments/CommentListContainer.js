import { useState, useEffect } from "react";
import { NewComment } from "./CommentForm";
import { CommentList } from "./CommentList";
import { getSinglePost } from "../../managers/PostManger";
import { useParams } from "react-router-dom";

export const CommentListContainer = () => {
    
    const [post, setPost] = useState({post_comment:[]})

    const { postId } = useParams()

    useEffect(() => {
        getSinglePost(postId).then((data) => setPost(data));
    }, [postId])

    return <article className="comment-list-container">
        <>
            <NewComment postId={postId} setPost = {setPost} />
            <CommentList  post = {post} setPost = {setPost} postId = {postId}/>
        </>
    </article>
}