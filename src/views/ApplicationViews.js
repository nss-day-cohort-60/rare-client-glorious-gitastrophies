import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { UserList } from "../components/user/UserList"
import { UserDetails } from "../components/user/UserDetails"
import { Authorized } from "./Authorized"
import { NewPost } from "../components/posts/NewPost"
import { EditPost } from "../components/posts/EditPost"
import { PostList } from "../components/posts/PostList"
import { PostDetails } from "../components/posts/PostDetails"
import { NewComment } from "../components/comments/CommentForm"
import { CategoryList } from "../components/categories/CategoryList"
import { PostContainer } from "../components/posts/PostContainer"
import { CommentList } from "../components/comments/CommentList"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />

      <Route element={<Authorized token={token} />}>
			
      <Route path="/" element={<PostContainer />} />

      <Route path="/users">
				<Route index element={<UserList />} />
				<Route path=":userId" element={<UserDetails />} />
			</Route>

			<Route path="/posts">
        <Route index element={<PostContainer token={token} />} />
				<Route path=":postId" element={<PostDetails token={token} />} />
        <Route path=":postId/comments" element={< CommentList />} />
        <Route path=":postId/comments/newComment" element={ < NewComment token={token}/> } />
        <Route path="editPost/:postId" element={< EditPost token={token}/>} />
			</Route>

      <Route path="/newPost" element={< NewPost token={token} />} />
			
      <Route path="/categories" element={<CategoryList />} />
            

      </Route>
      
    </Routes>
  </>
}
