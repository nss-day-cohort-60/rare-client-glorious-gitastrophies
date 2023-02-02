import { useState, useEffect } from "react"
import { getUsers } from "../../managers/UsersManager"
import { User } from "./User"
import "./User.css"


export const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(usersData => setUsers(usersData))
    }, [])

    return (
        <div style={{ margin: "0rem 3rem" }}>
        <h1>Users</h1>

        <article className="users">
            {
            users.map(user => {
                return <User user={user}  key={`user--${user.id}`}/>
            })
        }
        </article>
    </div>
    )
}