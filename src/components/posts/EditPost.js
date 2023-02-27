import { useState, useEffect } from "react"
import { useNavigate ,useParams } from "react-router-dom"
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/base/TextareaAutosize'
import "./Post.css"
import { getSinglePost , updatePost } from "../../managers/PostManger"


export const EditPost = () => {
    const navigate = useNavigate()
    const { postId } = useParams()
    const [post, setPost] = useState({
        title: "",
        image_url : "",
        content: ""
    })

    useEffect(
        () => {getSinglePost(postId).then(setPost)},[] 
    )

    const handleInputChange = (event) => {
        const copyOfPost = { ...post }
        copyOfPost[event.target.name] = event.target.value
        setPost(copyOfPost)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        updatePost(postId, post)
        .then(()=>navigate('/'))
    }


    return (
        <article className="create-post-list-container">
            <Card className="postForm" sx={{ maxWidth: 800, padding: 5}}>
                <CardContent>
                    <Stack spacing={2}>

                        <Typography variant="h5">Edit Post</Typography>

                        <fieldset>
                        <div className="form-group">
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" required autoFocus className="form-control"
                            
                            defaultValue={post.title}
                            onChange={handleInputChange}
                        />
                        </div>
                        </fieldset>

                            <Typography htmlFor="content">Post Content: </Typography>
                            <TextareaAutosize style={{ width: 690, height: 100}} type="textbox" id="content" name="content" required autoFocus className="form-control"
                            defaultValue={post.content}
                            onChange={handleInputChange} 
                            />

                        <fieldset>
                            <div className="form-group">
                            <label htmlFor="image_url">Add an Image:</label>
                                <input
                                required
                                name="image_url"
                                type="text"
                                className="form-control"
                                defaultValue={post.image_url}
                                onChange={handleInputChange}
                                />
                            </div>
                        </fieldset>

                        <Button variant="contained"  type="submit"
                            onClick={handleSubmit}
                            className="button">
                        Submit Edit
                        </Button>

                    </Stack>
                </CardContent>
            </Card>
        </article>
    )
}