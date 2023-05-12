import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import Cookies from "universal-cookie";
import "./sass/feeds/feeds.css";
import { Link } from "react-router-dom";

// news api = https://newsapi.org/v2/everything?q=Apple&from=2023-05-12&sortBy=popularity&apiKey=API_KEY

const getData = (token: string) => {
  return axios({
    url: "http://localhost:8080/user/",
    method: "GET",
    headers: {
      Authorization: `${token}`,
    },
  });
};

const getNews = () => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=e02be35174994b43b0d904ed3d5c504e`
  );
};
const Feeds = () => {
  const [data, setData] = useState([]);
  const [news, getNews] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("auth");

  const handleGet = () => {
    getData(token).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    handleGet();
  }, []);
  return (
    <Box className="feeds">
      <Box className="left-feed">
        
      </Box>
      <Box className="right-feed"></Box>
    </Box>
  );
};

export default Feeds;
