import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByPostId } from "../../managers/CommentManager";
import { NewComment } from "./CommentForm";
import { CommentList } from "./CommentList";


export const CommentListContainer = ({ token }) => {
    
    const [comments, setComments] = useState([])
    const { postId } = useParams()

    useEffect(()=>{
        getCommentsByPostId(postId)
    },[postId])

    return <article className="comment-list-container">
        <>
            <NewComment token={ token } setComments={ setComments } />
            <CommentList  token={ token } comments={comments} setComments={setComments} />
        </>
    </article>
}