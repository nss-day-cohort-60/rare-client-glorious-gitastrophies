import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPostsById } from "../../managers/PostManger";
import { getUsersById } from "../../managers/UsersManager";
import { HumanDate } from "../utils/HumanDate";


export const PostDetails = ({ token}) => {
  const [post, setPost] = useState({})
  const [user, setUser] = useState({})
  const { userId } = useParams()

  const { postId } = useParams()

  useEffect(() => {
    getPostsById(postId).then(setPost);
  }, [postId])

  useEffect(() => {
    getUsersById(postId).then(setUser)
}, [postId])

  return (
    <section className="post">
    <h3 className="post__title">{post.title}</h3>
    <div className="post__authors_name">Author: {user.first_name} {user.last_name}</div>
    <div className="post__username">Username: <Link className="post__username-link" to={`/users/${user.id}`}> {user.username}</Link> </div> 
    <div className="post__publication_date">Date published: {post.publication_date}</div>
    <div className="post__content">Post: {post.content}</div>
    </section>
)
}


  

  

