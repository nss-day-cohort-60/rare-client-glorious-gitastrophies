export const getPosts = () => {
    return fetch("http://localhost:8088/posts")
    .then((res) => res.json())
}
export const getSinglePost = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
    .then((res) => res.json())
}

export const getPostByUser = (id) => {
    return fetch(`http://localhost:8088/posts?user_id=${id}`)
    .then((res) => res.json())
}

export const getPostsByTitle = (title) => {
    return fetch(`http://localhost:8088/posts/${title}`)
    .then((res) => res.json())
}
export const addPost = (post) => {
    return fetch("http://localhost:8088/posts", {
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

export const updatePost = (id, postBody) => {
    return fetch(`http://localhost:8088/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    });
  };

 