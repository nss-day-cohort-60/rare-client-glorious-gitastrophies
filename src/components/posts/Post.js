import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import "./Post.css"
import Link from '@mui/material/Link'

export const Post = ({ post } ) => (
    <Card key ={`post--${post.id}`} className="post" sx={{ maxWidth: 500 }}>
            <CardContent>
                <Stack spacing={2}>
                    <Link className="card-link"
                    href={`/posts/${post.id}`}>
                        <Typography variant="h6">{post.title}</Typography></Link>
                        <CardMedia sx={{ height: 240 }} image={post.image_url} className="image" />
                    <Typography> {post?.content} </Typography>
                    <Typography paragraph color="text.primary"> Author: {post.author.full_name}</Typography> 
                    <Typography paragraph color="text.secondary"> Category: {post.category.label}</Typography>
                </Stack>
            </CardContent>
    </Card>
)

