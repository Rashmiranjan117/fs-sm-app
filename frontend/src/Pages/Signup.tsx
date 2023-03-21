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
} from "@chakra-ui/react";

import { useNavigate } from "react-router";

interface signup {
  email: string;
  password: string;
  username: string;
}

const Signup = () => {
  const [user, setUser] = useState<signup>({
    email: "",
    password: "",
    username: "",
  });
  const navigate = useNavigate();
  const toast = useToast();
  const isErrorEmail: boolean = user.email === "";
  const isErrorPassword: boolean = user.password.length < 8;
  const isErrorUsername: boolean = user.username === "";

  return (
    <Box>
      <FormControl
        isInvalid={isErrorEmail || isErrorPassword || isErrorUsername}
      >
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={user.username}
          name="username"
          placeholder="Enter Username"
        />
        {!isErrorUsername && (
          <FormHelperText>Enter a valid email.</FormHelperText>
        )}
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={user.email}
          name="email"
          placeholder="Enter email"
        />
        {!isErrorPassword && (
          <FormHelperText>Enter a valid password.</FormHelperText>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>

        <Input
          type="password"
          value={user.password}
          name="password"
          placeholder="Enter password"
        />
      </FormControl>
    </Box>
  );
};

export default Signup;
