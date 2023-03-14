import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "../Pages/Account";
import Feeds from "../Pages/Feeds";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import UserPosts from "../Pages/UserPosts";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Feeds />} />
      <Route path="/userposts" element={<UserPosts />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default AllRoutes;
