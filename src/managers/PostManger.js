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
    const newPost = {
        title: post.title,
        category: parseInt(post.category_id),
        image_url: post.image_url,
        content: post.content,
        approved : 1
    }
    return fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: {
            "Authorization" : `Token ${localStorage.getItem('auth_token')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    })
}
export const deletePosts = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization" : `Token ${localStorage.getItem('auth_token')}`,
            "Content-Type": "application/json"
    }
    })
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

