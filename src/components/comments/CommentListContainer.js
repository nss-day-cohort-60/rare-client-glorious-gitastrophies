import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../../managers/PostManger";
import { NewComment } from "./CommentForm";
import { CommentList } from "./CommentList";


export const CommentListContainer = () => {
    
    const [post, setPost] = useState({post_comment:[]})
    const {postId} = useParams()

    useEffect(()=>{
        getSinglePost(postId)
        .then(setPost)
    },[postId])

    return <article className="comment-list-container">
        <>
            <NewComment />
            <CommentList post = {post} />
        </>
    </article>
}