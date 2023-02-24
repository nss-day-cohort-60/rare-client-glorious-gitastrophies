export const getPosts = () => {
    return fetch("http://localhost:8000/posts", {
        headers: {
            "Authorization" : `Token ${localStorage.getItem('auth_token')}`
        }
    })
    .then((res) => res.json())
}
export const getSinglePost = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
        headers: {
            "Authorization" : `Token ${localStorage.getItem('auth_token')}`
        }
    })
    .then((res) => res.json())
}

export const getPostByUser = (id) => {
    return fetch(`http://localhost:8000/posts?user_id=${id}`, {
        headers: {
            "Authorization" : `Token ${localStorage.getItem('auth_token')}`
        }
    })
    .then((res) => res.json())
}

export const addPost = (post) => {
    return fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: {
            "Authorization" : `Token ${localStorage.getItem('auth_token')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
}
export const deletePosts = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, 
    {method: "DELETE"})
}

export const updatePost = (id, postBody) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
    method: "PUT",
    headers: {
        "Authorization" : `Token ${localStorage.getItem('auth_token')}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(postBody),
    });
};

