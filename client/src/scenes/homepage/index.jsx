import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Login from "scenes/login";
import NavBar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import state from "state";

function HomePage() {
  const isnonmobile = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <NavBar />
      <Box
        width="100%"
        padding="2rem 0rem"
        display={isnonmobile ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isnonmobile ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isnonmobile ? "42%" : undefined}
          mt={isnonmobile ? undefined : "2rem"}
        >
          {/* <MyPostWidget picturePath={picturePath} /> */}
        </Box>
        {isnonmobile && <Box flexBasis="26%"></Box>}
      </Box>
    </Box>
  );
}

export default HomePage;
