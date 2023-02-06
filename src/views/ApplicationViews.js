import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { UserList } from "../components/user/UserList"
import { UserDetails } from "../components/user/UserDetails"
import { Authorized } from "./Authorized"
import { NewPost } from "../components/posts/NewPost"
import { PostList } from "../components/posts/PostList"
import { PostDetails } from "../components/posts/PostDetails"
import { NewComment } from "../components/comments/CommentForm"
import { CategoryList } from "../components/categories/CategoryList"
import { CommentList } from "../components/comments/CommentList"
import { CommentListContainer } from "../components/comments/CommentListContainer"
import { UserPosts } from "../components/posts/UserPosts"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />

      <Route element={<Authorized token={token} />}>
			
      <Route path="/users">
				<Route index element={<UserList />} />
				<Route path=":userId" element={<UserDetails />} />
			</Route>

			<Route path="/posts">
				<Route index element={<PostList />} />
				<Route path=":postId" element={<PostDetails />} />
			</Route>

			<Route path="/categories" element={<CategoryList />} />
            
        <Route path="/newPost" element={< NewPost token={token} />} />
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:postId/comments" element={< CommentListContainer token={token} />} />
        <Route path="/userPosts" element={< UserPosts token={token}/>} />
      </Route>
      
    </Routes>
  </>
}
