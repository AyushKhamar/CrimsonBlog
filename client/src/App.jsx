import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import PostList from "./pages/PostList.jsx";
import Register from "./pages/Register.jsx";
import Write from "./pages/Write.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
function App() {
  return (
    <>
      <Routes>
        <Route
          // todo if user is authenticated, then redirect him to this callback page. And the redirect url is added here

          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signUpForceRedirectUrl={"/auth-callback"}
            />
          }
        ></Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/posts" element={<PostList />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/:slug" element={<SinglePost />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
