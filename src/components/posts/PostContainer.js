import { useState } from "react"
import { PostList } from "./PostList"
import { FilterAuthor } from "./FilterAuthor"
import { PostSearch } from "./PostSearch"
import "./Post.css"


export const PostContainer = () => {
    
    const [authorSelection, setAuthorSelection] = useState(0)
    const [searchTerms, setSearchTerms] = useState("")

    return (
        <>
            <FilterAuthor setAuthorSelection={setAuthorSelection} />
            <PostSearch setterFunction={setSearchTerms} />
            <PostList authorSelection={authorSelection}  searchTermState={searchTerms}/>    
        </>
    )
}

