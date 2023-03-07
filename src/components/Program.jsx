import React, { useEffect } from "react";
import { Box } from "@mui/material";

type ProgramProps = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: number;
  vote_average: number;
  vote_count: number;
}

const Program = ({program}: ProgramProps) => {

  useEffect(() => {
    console.log(program);
  }, [program]);

  return <Box>
    TODO: make program component return the poster for the program
    </Box>;
};

export default Program;
