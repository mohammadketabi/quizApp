import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../../redux/actions";

const ResultScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { score } = useSelector((state) => state);

  const handleBackToFirst = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    history.push("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight={"bold"}>
        Final Score {score}
      </Typography>
      <Button variant="outlined" onClick={handleBackToFirst}>
        Back To First Page!
      </Button>
    </Box>
  );
};

export default ResultScreen;
