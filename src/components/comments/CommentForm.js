import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const NewComment = ({ token }) => {
    const [comments, setComments] = useState({
        body: ""
    })

const navigate = useNavigate()

}