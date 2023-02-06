import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCommentsByPostId } from "../../managers/CommentManager";

export const CommentList = ({ token }) => {
    const [comments, setComments] = useState([])
    const navigate = useNavigate()
    const { postId } = useParams()

useEffect(
    () => {
        getCommentsByPostId(postId).then(commentData => setComments(commentData))
    }, [postId])

    return (<>
    <h2 className="comment__header">Comments</h2>
        {
            comments.map(comment => {
                return <section className="comment">
                    <div className="comment__username">{comment?.user?.username}</div>
                    <div className="comment__post">{comment?.content}</div>
                </section>
            })
        }
    </>

    )
}