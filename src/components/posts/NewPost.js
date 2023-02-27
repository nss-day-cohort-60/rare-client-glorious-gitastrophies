import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCategories } from "../../managers/CategoriesManager"
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/base/TextareaAutosize'
import "./Post.css"
import { addPost } from "../../managers/PostManger"


export const NewPost = () => {

    const navigate = useNavigate()
    const [categoryDropdown, setCategoryDropDown] = useState([])

    const [post, setPost] = useState({
        title: "",
        category_id: 0,
        image_url : "",
        content: ""
    })

    useEffect(() => {
        getCategories().then((data) => setCategoryDropDown(data))
    }, [])   

    const handleInputChange = (event) => {
        const copyOfPost = { ...post };
        copyOfPost[event.target.id] = event.target.value;
        setPost(copyOfPost);
    };



    const handleSubmit = (event) => {

        event.preventDefault();

        if (post.title === "") {
            alert("better add a title")
        } else if (post.content === "") {
            alert("you have no body")
        } else { 
            addPost(post)
            .then(() => {
                navigate('/')
            });
        }
    }

    return (
        <article className="create-post-list-container">
        <Card className="postForm" sx={{ maxWidth: 800, padding: 5}}>
        <CardContent>
        <Stack spacing={2}>
            <Typography variant="h5">Create a Post</Typography>

                <TextField type="text" name="title" id="title" required autoFocus className="form-control"
                    placeholder="Title of Post"
                    defaultValue={post.title}
                    onChange={handleInputChange}
                />

                <select name="category_id" id="category_id" onChange={(handleInputChange)} >
                    <option value="0"  className="form-control">Select Category</option>
                        {categoryDropdown.map(category => (
                            <option key={`category--${category.id}`} value={category.id}>
                                {category.label} 
                            </option>
                        ))}
                </select>

                <TextareaAutosize style={{ width: 690, height: 100}} id="content" name="content" required autoFocus className="form-control" placeholder="Post Content" 
                onChange={handleInputChange} 
                />

                <TextField
                    required
                    id="image_url"
                    type="text"
                    className="form-control"
                    placeholder="Image URL here"
                    onChange={handleInputChange}
                />

                <Button variant="contained" type="submit"
                    onClick={handleSubmit}
                    className="button">Submit Post
                </Button>
            </Stack>
        </CardContent>
        </Card>
        </article>
    )
}
