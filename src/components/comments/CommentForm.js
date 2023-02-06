import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const NewComment = ({ token }) => {
    const [comment, setComment] = useState({
        post_id: 0,
        body: "",
        author_id: "",
        content: ""
    })

    const navigate = useNavigate()
    const postId = useParams()

    const HandleInputChange = (event) => {
        const copyOfComment = { ...comment }
        copyOfComment[event.target.id] = event.target.value
        setPost(copyOfComment)
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        if (comment.content === "") {
            alert("Cannot be empty.")
        } else {
            let body = {
                post
            }
        }
    }

}