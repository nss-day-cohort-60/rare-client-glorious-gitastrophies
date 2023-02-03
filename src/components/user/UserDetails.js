import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getUsersById } from "../../managers/UsersManager"
import "./User.css"

export const UserDetails = ({token}) => {
    const [user, setUser] = useState({})
    const { userId } = useParams()

    useEffect(() => {
        getUsersById(userId).then(setUser)
    }, [userId])

    return (
        <section className="user">
        <h3 className="user__username">{user.username}</h3>
        <div className="user__first_name">Full name: {user.first_name} {user.last_name}</div>
        <div className="user__bio">Bio: {user.bio}</div>
        <div className="user__created_on">Joined on: {user.created_on}</div>
        </section>
    )
}

