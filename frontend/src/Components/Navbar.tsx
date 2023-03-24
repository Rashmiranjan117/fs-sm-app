import React from "react";
import "./sass/navbar/navbar.css";

import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

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
  {
    path: "/account",
    title: "Account",
  },
];

const Navbar = () => {
  return (
    <Box className="nav">
      {links.map((el, i) => (
        <Link to={el.path} key={i}>
          {el.title}
        </Link>
      ))}
    </Box>
  );
};

export default Navbar;
