import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { deletePosts, getSinglePost } from "../../managers/PostManger"
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import "./Post.css"

export const PostDetails = () => {
  const navigate = useNavigate()
  const [post, setPost] = useState({})
  const { postId } = useParams()

  useEffect(() => {
    getSinglePost(postId).then((data) => setPost(data));
  }, [postId])

  return (
    <Card className="post" sx={{ maxWidth: 800, padding: 5}}>
      <CardContent>
        <Stack spacing={2}>
          <Typography className="post__title">Title: {post?.title}</Typography>
          <Typography>Author: <Link className="post__authors_name" to={`/users/${post?.author?.id}`}> {post?.author?.full_name} </Link></Typography>
          <Typography className="post__category_id">Category: {post?.category?.label} </Typography> 
          <Typography className="post__publication_date">Date published: {post?.publication_date}</Typography>
          <Typography className="post__content"> {post?.content}</Typography>
          <Link className="post__comments" to={`/posts/${postId}/comments`}>Comments</Link>
          
          {
            post.is_author
            ?
            <>
              <Button className="button" variant="contained"  onClick={() => {
                navigate(`/posts/editPost/${post.id}`)
              }}>Edit</Button>
              <Button className="button" variant="contained" onClick={()=>{
                deletePosts(post.id)
                .then(()=>navigate('/'))
              }}>Delete</Button>
            </>
            :
            ""
          }
          
        </Stack>
      </CardContent>
    </Card>
)
}
