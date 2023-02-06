import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getSinglePost } from "../../managers/PostManger";
import { HumanDate } from "../utils/HumanDate";



export const PostDetails = ({ token }) => {
  const [post, setPost] = useState({})
  const [user, setUser] = useState({})
  const { userId } = useParams()

  const navigate = useNavigate()
  const { postId } = useParams()





  useEffect(() => {
    getSinglePost(postId).then((data) => setPost(data[0]));
  }, [postId])

  return (
    <section className="post">
    <h1 className="post__title">Title: {post?.title}</h1>
    <div className="post__authors_name">Author: {post?.user?.first_name} {post?.user?.last_name}</div>
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
    
    
    </section>
)
}
