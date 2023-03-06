import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { API_KEY } from "../keys.js";
import Program from './Program';

const TrendingWeekly = () => {

  const [weekly, setWeekly] = useState({})

  const getTrendingWeekly = () => {
    var config = {
      method: "get",
      url: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
      headers: {},
      // data: data,
    };

    axios(config)
      .then(function (response) {
        setWeekly(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    try {
      getTrendingWeekly();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <Box>
    {weekly.results.map((program) => {
      console.log(Object.keys(program))

      return (
        <Program program={program} />
      )
    })}
  </Box>;
};

export default TrendingWeekly;
