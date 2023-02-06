import { useState } from "react";
import { NewComment } from "./CommentForm";
import { CommentList } from "./CommentList";


export const CommentListContainer = ({ token }) => {
    const [comments, setComments] = useState([])
    return <>
        <CommentList  token={ token } comments={comments} setComments={setComments} />
        <NewComment token={ token } setComments={ setComments } />
    </>
}