export const getCommentsByPostId = (id) => {
    return fetch(`http://localhost:8088/comments?post_id=${id}`)
        .then(res => res.json())
  }

export const addComment = (post) => {
    return fetch("http://localhost:8088/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
}

export const deletePosts = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`, 
    {method: "DELETE"})
} 