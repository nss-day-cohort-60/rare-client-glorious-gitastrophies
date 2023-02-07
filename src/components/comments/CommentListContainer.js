import { useState } from "react";
import { NewComment } from "./CommentForm";
import { CommentList } from "./CommentList";


export const CommentListContainer = ({ token }) => {
    
    const [comments, setComments] = useState([])

    return <article className="comment-list-container">
        <>
            <NewComment token={ token } setComments={ setComments } />
            <CommentList  token={ token } comments={comments} setComments={setComments} />
        </>
    </article>
}