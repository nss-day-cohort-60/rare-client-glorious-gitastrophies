import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getCommentsByPostId } from "../../managers/CommentManager";
import { NewComment } from "./CommentForm";
import { CommentList } from "./CommentList";
import { getSinglePost } from "../../managers/PostManger";

export const CommentListContainer = () => {
    
    const [post, setPost] = useState({post_comment:[]})
    const [comments, setComments] = useState([])

    const { postId } = useParams()
    
    useEffect(()=>{
        getSinglePost(postId).then((data) => setPost(data));
        getCommentsByPostId(postId).then(setComments)
    },[postId])

    return <article className="comment-list-container">
        <>
            <NewComment postId={postId} setPost = {setPost} setComments={setComments} />
            <CommentList  post = {post} setPost = {setPost} postId = {postId} comments = {comments} setComments = {setComments}/>
        </>
    </article>
}