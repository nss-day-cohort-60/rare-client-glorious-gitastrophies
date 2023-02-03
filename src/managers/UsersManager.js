export const getUsers = () => {
    return fetch("http://localhost:8088/users")
        .then(res => res.json())
}

export const getUsersByUsername = (username) => {
    return fetch(`http://localhost:8088/users?username=${username}`)
        .then(res => res.json())
}

export const getUsersById = (id) => {
    return fetch(`http://localhost:8088/users/${id}`)
        .then(res => res.json())
}