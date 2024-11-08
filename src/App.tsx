
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AppLayout from './AppLayout'
import Explore from './Pages/Explore'
import SavedPost from './Pages/SavedPost'
import AllUsers from './Pages/AllUsers'
import CreatePost from './Pages/CreatePost'
import EditPost from './Pages/EditPost'
import PostDetails from './Pages/PostDetails'
import UserProfile from './Pages/UserProfile'
import UpdateUserProfile from './Pages/UpdateUserProfile'

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<SavedPost />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<UserProfile />} />
          <Route path="/update-profile/:id" element={<UpdateUserProfile />} />
        </Route>
      </Routes>
    </main>
  )
}
export default App
