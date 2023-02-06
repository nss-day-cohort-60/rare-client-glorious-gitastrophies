import { useState, useEffect } from "react"
import { useNavigate ,useParams } from "react-router-dom"

export const EditPost = ({token}) => {



    const [post, setPost] = useState({
        title: "",
        image_url : "",
        content: ""
    })

    const handleInputChange = (event) => {
        const copyOfPost = { ...post };
        copyOfPost[event.target.id] = event.target.value;
        setPost(copyOfPost);
    };
    const navigate = useNavigate()
    const { postId } = useParams();

    const handleSubmit = (event) => {
        console.log(post)

        event.preventDefault();


        return fetch(`http://localhost:8088/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
            })
            .then((res) => res.json())
            .then(() => {
                navigate(`/post/${post.id}`)
            });
    }


    return (
        <section>
            <form className="postForm">
            <h2>Create a Post</h2>
            <fieldset>
                <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" required autoFocus className="form-control"
                    placeholder="Title of Post"
                    defaultValue={postId.title}
                    onChange={handleInputChange}
                />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label htmlFor="content">Post Content: </label>
                <textarea type="textbox" id="content" rows="5" cols="30" name="content" required autoFocus className="form-control" placeholder="Post Content" 
                defaultValue={postId.content}
                onChange={handleInputChange} 
                />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label htmlFor="image_url">Add an Image:</label>
                    <input
                    required
                    id="image_url"
                    type="text"
                    className="form-control"
                    placeholder="Image URL here"
                    onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={handleSubmit}
                className="btn btn-primary">
            </button>
            </form>
        </section>
    )
}