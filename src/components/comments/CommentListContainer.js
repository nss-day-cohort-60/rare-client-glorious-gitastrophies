import { useState } from "react";
import { NewComment } from "./CommentForm";
import { CommentList } from "./CommentList";


export const CommentListContainer = ({ token }) => {

    return <>
        <CommentList  token={token} />
        <NewComment token={token} />
    </>
}