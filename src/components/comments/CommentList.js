import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCommentsByPostId } from "../../managers/CommentManager"
import { deleteComment } from "../../managers/CommentManager"
import { Link } from "react-router-dom"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material'
import Stack from '@mui/material/Stack'
import "./Comment.css"
import { getSinglePost } from "../../managers/PostManger"


export const CommentList = ({ post }) => {


    return  <article className="comment-list-container">
    <>
        <Stack spacing={2}>
            <Typography variant="h5" color="text.primary">Comments</Typography>
                {
                    post.post_comment.map(comment => {
                        return <Card className="comment" sx={{ maxWidth: 300 }}  key={`comments--${comment.id}`}>
                            <CardContent>

                            <Typography variant="h6" className="comment__username">
                                    <Link className="card-link" to={`/users/${comment?.author_id}`}> {comment.body}</Link>
                                </Typography>

                            <Typography paragraph color="text.secondary" className="comment__content"> {comment.content} </Typography>
                                {/* {
                                    comment.author_id === parseInt(token)
                                    ?
                                    <CardActions>
                                        <DeleteForeverIcon className="delete__DeleteForeverIcon" onClick={
                                        () =>
                                        handleClick(comment.id)}>Delete Comment</DeleteForeverIcon>
                                    </CardActions>
                                    :
                                    ""
                                } */}
                            </CardContent>
                        </Card>
                    })
                }
                
        </Stack>
    </>
    </article>
}
