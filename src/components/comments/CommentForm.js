import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const CommentForm = ({ token }) => {
    const [comments, setComments] = useState({
        body: ""
    })

const navigate = useNavigate()

}