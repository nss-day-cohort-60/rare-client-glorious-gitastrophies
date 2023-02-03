import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getSinglePost } from "../../managers/PostManger";
import { HumanDate } from "../utils/HumanDate";


export const PostDetails = ({ token}) => {
  const [post, setPost] = useState({})
  const [user, setUser] = useState({})
    const { userId } = useParams()


  const { postId } = useParams()

  useEffect(() => {
    getSinglePost(postId).then((data) => setPost(data[0]));
  }, [postId])

  return (
    <section className="post">
    <h3 className="post__title">Title: {post?.title}</h3>
    <div className="post__authors_name">Author: {post?.user?.first_name} {post?.user?.last_name}</div>
    <div className="post__username">Username: {post?.user?.username} </div> 
    <div className="post__publication_date">Date published: {post?.publication_date}</div>
    <div className="post__content">Post: {post?.content}</div>
    </section>
)
}
