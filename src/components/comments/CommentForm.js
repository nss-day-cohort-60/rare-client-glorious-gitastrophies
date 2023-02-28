import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
// import { getCommentsByPostId } from "../../managers/CommentManager"
import * as React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import "./Comment.css"
import { addComment } from "../../managers/CommentManager"
import { getSinglePost } from "../../managers/PostManger"

export const NewComment = ({ postId, setPost }) => {

    const navigate = useNavigate()
    
    const [comment, setComment] = useState({
        body: ""
    })

    const handleInputChange = (event) => {
        const copyOfComment = { ...comment }
        copyOfComment[event.target.id] = event.target.value
        setComment(copyOfComment)
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        if (comment.body === "") {
            alert("Cannot be empty.")
        } else {
        
            const copy = { ...comment }
            addComment(postId, copy).then(() => { 
                getSinglePost(postId).then((data) => setPost(data))})
        }
    }
    

return (
    <Card sx={{ maxWidth: 300, padding: 5}}>
        <Stack spacing={2}>
        <Typography variant="h6" color="text.primary">Add a Comment: </Typography>
            <TextField variant="outlined" type="text" name="comment" id="comment" required autoFocus className="form-control"
                placeholder="What are your thoughts?"
                value={comment.body}
                onChange={
                    (evt) => {
                        const copy = {...comment}
                        copy.body = evt.target.value
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
