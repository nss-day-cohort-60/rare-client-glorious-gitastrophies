import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCommentsByPostId } from "../../managers/CommentManager"
import * as React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import "./Comment.css"


export const NewComment = ({ token, setComments }) => {

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
    <Card sx={{ maxWidth: 300, padding: 5}}>
        <Stack spacing={2}>
        <Typography variant="h6" color="text.primary">Add a Comment: </Typography>
            <TextField variant="outlined" type="text" name="comment" id="comment" required autoFocus className="form-control"
                placeholder="What are your thoughts?"
                value={comment.content}
                onChange={
                    (evt) => {
                        const copy = {...comment}
                        copy.content = evt.target.value
                        setComment(copy)
                    }
                }
            />
        <Button variant="contained" type="submit"
            onClick={handleSubmit}
            className="btn btn-primary">
                Submit Comment
        </Button >
        </Stack>
    </Card>
    )
}
