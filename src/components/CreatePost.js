import { useState, useEffect } from "react"


export const CreatePost = () => {

    const [post, setPost] = useState({
        approved : 1,
        publication_date: new Date(),
        title: "",
        image_url : "",
        content: ""
    })


    const handleInputChange = (event) => {
        const copyOfPost = { ...post };
        copyOfPost[event.target.id] = event.target.value;
        setPost(copyOfPost);
      };
    // const navigate = useNavigate()


    // const constructPost = () => {
    //     const locationId = parseInt(post.)
    
    //     if (locationId === 0 || isNaN(locationId)) {
    //       window.alert("Please select a location")
    //     } else {
    //       if (postId) {
    //         // PUT
    //         updatePost({
    //           id: post.id,
    //           user_id: post.user_id,
    //           title: post.title,
    //           publication_date: post.publication_date,
    //           image_url: post.image_url,
    //           content: post.content,
    //           approved: post.approved
    //         })
    //           .then(() => navigate("/posts"))
    //       } else {
    //         // POST
    //         addPost({
    //             id: post.id,
    //             user_id: post.user_id,
    //             title: post.title,
    //             publication_date: post.publication_date,
    //             image_url: post.image_url,
    //             content: post.content,
    //             approved: post.approved
    //         })
    //           .then(() => navigate("/posts"))
    //       }
    //     }
    //   }

    const handleSubmit = () => {
        console.log(post)
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
                // value={userChoices.image_url}
                onChange={handleInputChange}
                />
            </div>
        </fieldset>
        <button type="submit"
            onClick={evt => {
                evt.preventDefault()
                // constructPost()
                handleSubmit()
            }}
            className="btn btn-primary">
        </button>
        </form>
    </section>
  )
}
