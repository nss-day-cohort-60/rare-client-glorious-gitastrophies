export const getCommentsByPostId = (id) => {
    return fetch(`http://localhost:8000/comments?post_id=${id}`, {
        headers: {
            "Authorization" : `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
  }

export const addComment = (postId, body) => {
    return fetch(`http://localhost:8000/posts/${postId}/comment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(body)
    })
}

export const deleteComment = (id) => {
    return fetch(`http://localhost:8000/posts/${id}/delete_comment`, {
        method: "DELETE",
        headers: {
            "Authorization" : `Token ${localStorage.getItem('auth_token')}`
        },
})
}