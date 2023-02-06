import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCommentsByPostId } from "../../managers/CommentManager"


export const NewComment = ({ token, setComments }) => {
    // const [comments, setComments] = useState([])
    const navigate = useNavigate()
    const { postId } = useParams()
    const [comment, setComment] = useState({
        post_id: parseInt(postId),
        author_id: parseInt(token),
        content: ""
    })

    

    const handleInputChange = (event) => {
        const copyOfComment = { ...comment }
        copyOfComment[event.target.id] = event.target.value
        setComment(copyOfComment)
    }

    const handleSubmit = (event) => {


        event.preventDefault();

        if (comment.content === "") {
            alert("Cannot be empty.")
        } else {
            let body = {
                post_id: parseInt(postId),
                author_id: parseInt(token),
                content: comment.content
            }

            fetch(`http://localhost:8088/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })
            .then((res) => res.json()).then(() => getCommentsByPostId(postId ).then(commentData => setComments(commentData)))
        }
    }
    

return (
    <section>
        <form className="commentForm">
        <h2>Add a Comment</h2>
        <fieldset>
            <div className="form-group">
            <label htmlFor="comment">Comment: </label>
            <input type="text" name="comment" id="comment" required autoFocus className="form-control"
                placeholder="What are your thought?"
                value={comment.content}
                onChange={
                    (evt) => {
                        const copy = {...comment}
                        copy.content = evt.target.value
                        setComment(copy)
                    }
                }
            />
            </div>
        </fieldset>
        <button type="submit"
            onClick={handleSubmit}
            className="btn btn-primary">
                Submit Comment
        </button>
        </form>
    </section>
    )
}