import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCommentsByPostId } from "../../managers/CommentManager";
import { deleteComment } from "../../managers/CommentManager";

export const CommentList = ({ token, comments, setComments }) => {
    const navigate = useNavigate()
    const { postId } = useParams()

const handleClick = (commentId) => {
    deleteComment(commentId).then(() => getCommentsByPostId(postId).then(commentData => setComments(commentData)))
}



useEffect(
    () => {
        getCommentsByPostId(postId).then(commentData => setComments(commentData))
    }, [])

    return (
    <>
    <h2 className="comment__header">Comments</h2>
        {
            comments.map(comment => {
                return <section className="comment">
                    <div className="comment__username">{comment?.user?.username}</div>
                    <div className="comment__post">{comment?.content}</div>
                        {
                            comment.author_id === parseInt(token)
                            ?
                            <button className="delete__button" onClick={
                                () =>
                                handleClick(comment.id)}>Delete Comment</button>
                            :
                            ""
                        }
                </section>
            })

        }
    </>

    )
}