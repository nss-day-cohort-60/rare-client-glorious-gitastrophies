import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getUsersById } from "../../managers/UsersManager"
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import "./User.css"

export const UserDetails = ({token}) => {
    const [user, setUser] = useState({})
    const { userId } = useParams()

    useEffect(() => {
        getUsersById(userId).then(setUser)
    }, [userId])

    return (
        <Card sx={{ maxWidth: 500, padding: 5}}>
            <CardContent>
            <Stack spacing={2}>
                <Typography>Username: {user.username}</Typography>
                <Typography>Full name: {user.first_name} {user.last_name}</Typography>
                <Typography>Bio: {user.bio}</Typography>
                <Typography>Joined on: {user.created_on}</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

