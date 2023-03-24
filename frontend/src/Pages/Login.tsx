import React, { useState } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  useToast,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import imagesvg from "../assets/signupimage.svg";

import "./sass/login/login.css";

import { useNavigate } from "react-router";
import axios, { AxiosPromise } from "axios";

interface signup {
  email: string;
  password: string;
  username: string;
}

const loginUser = (payload: signup) => {
  return axios.post("http://localhost:8080/auth/login", payload);
};

const Signup = () => {
  const [user, setUser] = useState<signup>({
    email: "",
    password: "",
    username: "",
  });
  const navigate = useNavigate();
  const toast = useToast();
  const isErrorEmail: boolean = user.email === "";
  const isErrorPassword: boolean = user.password.length < 2;
  const cookies = new Cookies();
  // const isErrorUsername: boolean = user.username === "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginUser(user)
      .then((res) => {
        toast({
          status: "success",
          title: "Login Successfull",
          duration: 5000,
          isClosable: true,
        });
        let token = res.data.token;
        cookies.set("auth", token);
        navigate("/");

        console.log(res.data);
      })
      .catch((err) => {
        return toast({
          status: "error",
          title: "Something went wrong",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box className="signup_container">
      <Box className="left">
        <Heading className="heading">Login</Heading>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={user.username}
              name="username"
              placeholder="Enter Username"
              onChange={(e) => handleChange(e)}
            />
            {/* {!isErrorUsername && (
          <FormHelperText>Enter a valid email.</FormHelperText>
        )} */}
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={user.email}
              name="email"
              placeholder="Enter email"
              onChange={(e) => handleChange(e)}
            />
            {!isErrorPassword && (
              <FormHelperText>Enter a valid password.</FormHelperText>
            )}
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>

            <Input
              type="password"
              value={user.password}
              name="password"
              placeholder="Enter password"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <Text className="below">
            Already have an account? <Link to="/signup">Signup</Link>
          </Text>
          <Button type="submit">Login</Button>
        </form>
      </Box>
      <Box className="right">
        <Image src={imagesvg} />
      </Box>
    </Box>
  );
};

export default Signup;
