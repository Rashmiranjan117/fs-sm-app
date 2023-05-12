import React, { ReactNode } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useToast } from "@chakra-ui/react";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const cookie = new Cookies();
  const toast = useToast();
  const navigate = useNavigate()
  const token = cookie.get("auth");
  // console.log(token)
  if (!token) {
    // navigate('/login')
    toast({
      status:"warning",
      isClosable:true,
      duration:5000,
      title:"Login First!"
    })
    return <Navigate to='/login' />
  }
  else{
    return  <>{children}</>;
  }
};


