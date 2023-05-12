import React from "react";
import "./sass/navbar/navbar.css";

import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Button,
  background,
  Heading,
  Hide,
  useToast,
} from "@chakra-ui/react";
import Cookies from "universal-cookie";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { AiOutlineSetting } from "react-icons/ai";

interface linkType {
  path: string;
  title: string;
}

const links: linkType[] = [
  {
    path: "/",
    title: "Feeds",
  },
  {
    path: "/userposts",
    title: "User",
  },
];

const Navbar = () => {
  const cookies = new Cookies();
  const token = cookies.get("auth");
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    try {
      cookies.remove("auth");
      toast({
        status: "success",
        duration: 5000,
        isClosable: true,
        title: "Logout successfull.",
        description: "Redirecting you to Login section.",
      });
      navigate("/login");
    } catch (err) {
      toast({
        status: "error",
        duration: 5000,
        isClosable: true,
        title: "Something went wrong",
        description: `${err}`,
      });
    }
  };
  return (
    <Box className="nav">
      <Box className="left">
        <Heading
          as="h2"
          size="lg"
          _hover={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <span className="black">My</span>
          <span className="white">Net</span>
        </Heading>
      </Box>
      <Box className="right">
        {token &&
          links.map((el, i) => (
            <Link to={el.path} key={i}>
              {el.title}
            </Link>
          ))}
        <Menu>
          <MenuButton
            as={Button}
            className="profile-btn"
            colorScheme="#6A19D6"
            variant="outline"
            leftIcon={<FaRegUserCircle />}
            transition="0.3s"
            _hover={{ backgroundColor: "white", color: "#6A19D6" }}
          >
            <Hide below="md">
              <span>Profile</span>
            </Hide>
          </MenuButton>
          <MenuList>
            <MenuItem
              bgColor="#6A19D6"
              icon={<AiOutlineSetting />}
              _hover={{ bgColor: "white", color: "#6A19D6" }}
            >
              Account Options
            </MenuItem>
            <MenuItem
              bgColor="red"
              icon={<CiLogout />}
              _hover={{ bgColor: "white", color: "red" }}
              onClick={handleLogout}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
