import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { getSinglePost } from "../../managers/PostManger"
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import "./Post.css"




export const PostDetails = ({ token }) => {
  const [post, setPost] = useState({})

  const navigate = useNavigate()
  const { postId } = useParams()

  useEffect(() => {
    getSinglePost(postId).then((data) => setPost(data[0]));
  }, [postId])

  return (
    <Card className="post" sx={{ maxWidth: 800, padding: 5}}>
      <CardContent>
        <Stack spacing={2}>
          <Typography className="post__title">Title: {post?.title}</Typography>
          <Typography>Author: <Link className="post__authors_name" to={`/users/${token}`}> {post?.user?.first_name} {post?.user?.last_name} </Link></Typography>
          <Typography className="post__category_id">Category: {post?.category?.label} </Typography> 
          <Typography className="post__publication_date">Date published: {post?.publication_date}</Typography>
          <Typography className="post__content"> {post?.content}</Typography>
          <Link className="post__comments" to={`/posts/${postId}/comments`}>Comments</Link>
          
          {
            parseInt(token) === post.user_id
            ?
            <Button className="button" variant="contained"  onClick={() => {
              navigate(`/posts/editPost/${postId}`)
            }}>Edit</Button>
            :
            ""
          }
          
          {
            parseInt(token) === post.user_id
            ?
            <Button className="button" variant="contained">Delete</Button>
            :
            ""
          }
          
        </Stack>
      </CardContent>
    </Card>
)
}
