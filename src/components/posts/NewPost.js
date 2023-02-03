import { useState, useEffect } from "react"
import { useNavigate ,useParams } from "react-router-dom"


export const NewPost = ({token}) => {

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



    const handleSubmit = (event) => {
        console.log(post)

        event.preventDefault();

        if (post.title === "") {
            alert("better add a title")
        } else if (post.content === "") {
            alert("you have no body")
        } else { 
            var body = {
                user_id: token,
                category_id: post.category_id,
                title: post.title,
                publication_date: new Date(),
                image_url: post.image_url,
                content: post.content,
                approved : 1
            }
            console.log(body)
            fetch("http://localhost:8088/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
                })
                .then((res) => res.json())
                .then(() => {
                    navigate('/')
                });
        }
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
                defaultValue={post.title}
                onChange={handleInputChange}
            />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="title">Category: </label>
            <input type="text" name="title" id="title" required autoFocus className="form-control"
                placeholder="Category"
                defaultValue={post.category_id}
                onChange={handleInputChange}
            />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="content">Post Content: </label>
            <textarea type="textbox" id="content" rows="5" cols="30" name="content" required autoFocus className="form-control" placeholder="Post Content" 
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
