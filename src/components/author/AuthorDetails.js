import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getAuthorsById } from "../../managers/AuthorsManager"
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import "./User.css"
import { AutoFixHighRounded } from "@mui/icons-material"
import CardMedia from '@mui/material/CardMedia'

export const AuthorDetails = ({token}) => {
    const [author, setAuthor] = useState({})
    const { userId } = useParams()

    useEffect(() => {
        getAuthorsById(userId).then(setAuthor)
    }, [userId])

    return (
        <Card sx={{ maxWidth: 500, padding: 5}}>
            <CardContent>
            <Stack spacing={2}>
            <CardMedia sx={{ height: 120 }} image={author.profile_image_url} className="image" />
                <Typography>Username: {author.username}</Typography>
                <Typography>Full name: {author.full_name}</Typography>
                <Typography>Bio: {author.bio}</Typography>
                <Typography>Joined on: {author.date_joined}</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

