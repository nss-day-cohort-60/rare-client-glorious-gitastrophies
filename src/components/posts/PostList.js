import { useEffect, useState } from "react"
import { Post } from "./Post";
import { getPosts } from "../../managers/PostManger"
import * as React from 'react'
import "./Post.css"

export const PostList = ( {token, authorSelection, searchTermState }) => {
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])


    useEffect(
        () => {
            getPosts().then(postData => setPosts(postData))
            setFilteredPosts(posts)
        }, [])


    useEffect(
        () => {
            if (authorSelection === 0) {
                setFilteredPosts(posts) }
            else {
                const filteredCopy = posts.filter(post => post.author.id === parseInt(authorSelection))
                setFilteredPosts(filteredCopy)
            }
        },
        [posts, authorSelection]
        )

        useEffect(
            () => {
                const searchedPosts = posts.filter(post => {
                    return post?.title?.toLowerCase().startsWith(searchTermState.toLowerCase())
                })
                setFilteredPosts(searchedPosts)
            },
            [ posts, searchTermState ]
        )

    return (
    <>
        <article className="post-list-container">
            {
                filteredPosts.map((post) => {
                    return <Post post={post} key={`post--${post.id}`} token={token} />
                })
            }
            </article>
    </>
    )
}
