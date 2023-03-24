import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "../Pages/Account";
import Feeds from "../Pages/Feeds";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import UserPosts from "../Pages/UserPosts";
import { ProtectedRoute } from "./ProtectedRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Feeds />
          </ProtectedRoute>
        }
      />
      <Route
        path="/userposts"
        element={
          <ProtectedRoute>
            <UserPosts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
