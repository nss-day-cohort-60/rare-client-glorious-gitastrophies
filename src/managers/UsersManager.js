export const getUsers = () => {
    return fetch("http://localhost:8000/authors", {
        headers: {
            "Authorization" : `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}

export const getUsersByUsername = (username) => {
    return fetch(`http://localhost:8000/users?username=${username}`,{
        headers: {
            "Authorization" : `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}

export const getUsersById = (id) => {
    return fetch(`http://localhost:8000/authors/${id}`,{
        headers: {
            "Authorization" : `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}