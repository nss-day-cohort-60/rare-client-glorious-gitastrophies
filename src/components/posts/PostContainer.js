import { useState } from "react"
import { PostList } from "./PostsList"
import { PostSearch } from "./PostSearch"

export const PostContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <PostSearch setterFunction={setSearchTerms}/>
        <PostList searchTermState={searchTerms}/>    
    </>
}