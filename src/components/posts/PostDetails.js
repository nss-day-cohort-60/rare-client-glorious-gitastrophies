import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getSinglePost } from "../../managers/PostManger";


export const PostDetails = ({ token }) => {
  const [post, setPost] = useState({})

  const navigate = useNavigate()
  const { postId } = useParams()

  useEffect(() => {
    getSinglePost(postId).then((data) => setPost(data[0]));
  }, [postId])

  return (
    <section className="post">
    <h1 className="post__title">Title: {post?.title}</h1>
    <div>Author: <Link className="post__authors_name" to={`/users/${token}`}> {post?.user?.first_name} {post?.user?.last_name} </Link></div>
    <div className="post__category_id">Category: {post?.category?.label} </div> 
    <div className="post__publication_date">Date published: {post?.publication_date}</div>
    <h2 className="post__content"> {post?.content}</h2>
    <Link className="post__comments" to={`/posts/${postId}/comments`}>Comments</Link>
    
    {
      parseInt(token) === post.user_id
      ?
      <button onClick={() => {
        navigate(`/posts/editPost/${postId}`)
      }}>Edit</button>
      :
      ""
    }
    
    <button>Delete</button>
    
    </section>
)
}
