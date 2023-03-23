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

import imagesvg from "../assets/signupimage.svg";

import "./sass/signup/signup.css";

import { useNavigate } from "react-router";
import axios, { AxiosPromise } from "axios";

interface signup {
  email: string;
  password: string;
  username: string;
}

const registerUser = (payload: signup) => {
  return axios.post("http://localhost:8080/auth/register", payload);
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
  // const isErrorUsername: boolean = user.username === "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    registerUser(user)
      .then((res) => {
        toast({
          status: "success",
          title: "Account created successfully",
          duration: 5000,
          isClosable: true,
        });
        navigate("/login");
        console.log(user);
      })
      .catch((err) => {
        toast({
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
        <Heading className="heading">Signup</Heading>
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
          <Text>
            Already have an account? <Link to="/login">Login</Link>
          </Text>
          <Button type="submit">Signup</Button>
        </form>
      </Box>
      <Box className="right">
        <Image src={imagesvg} />
      </Box>
    </Box>
  );
};

export default Signup;
