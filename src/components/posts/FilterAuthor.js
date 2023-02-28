import { useEffect, useState } from "react"
import { getAuthors } from "../../managers/AuthorsManager";
import "./Post.css"

export const FilterAuthor = ({ setAuthorSelection }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAuthors().then((userData) => setUsers(userData))
    }, [])

    return (
        <><section className="posts__dropdown">
            <label htmlFor="users">Search By Author</label><br></br>
            <select onChange={(event) => {setAuthorSelection(parseInt(event.target.value))}}>
                <option value="0" name="user_id" className="form-control">View All</option>
                {users.map(user => (
                    <option key={`user--${user.id}`} value={user.id}>
                        {user.username}
                    </option>
                ))}
            </select>
            <br></br>
        </section>
        </>
    )
}
