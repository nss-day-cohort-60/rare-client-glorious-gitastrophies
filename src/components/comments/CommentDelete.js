import { deleteComment } from "../../managers/CommentManager"
import { useState } from "react"

const handleClick = (comment) => {
    const [comments, setComments] = useState([])
    deleteComment(comment.id).then(commentData => setComments(commentData))
}