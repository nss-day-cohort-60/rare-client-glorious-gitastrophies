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


export const EditPost = ({token}) => {



    const [post, setPost] = useState({
        title: "",
        image_url : "",
        content: ""
    })
    const navigate = useNavigate()
    const { postId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/${postId}`)
                .then(response => response.json())
                .then((data) => {
                    setPost(data[0])
                })

        },
        [] 
    )

    const handleInputChange = (event) => {
        const copyOfPost = { ...post };
        copyOfPost[event.target.id] = event.target.value;
        setPost(copyOfPost);
    };

    

    const handleSubmit = (event) => {
        console.log(post)

        event.preventDefault();


        fetch(`http://localhost:8088/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
            })
            .then((res) => {
                res.json()
            })
            .then(() => {
                navigate(`/posts/${postId}`)
            });
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
                        <input type="text" name="title" id="title" required autoFocus className="form-control"
                            
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
                                id="image_url"
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