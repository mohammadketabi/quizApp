import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import Field from "../../components/Field/Field";
import TextFieldComp from "../../components/TextField.js/TextFieldComp";
import useAxios from "../../hooks/useAxios";

const FirstScreen = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const history = useHistory();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/questions");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Field options={response.trivia_categories} label="Category" />
      <Field options={difficultyOptions} label="Difficulty" />
      <Field options={typeOptions} label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Start
        </Button>
      </Box>
    </form>
  );
};

export default FirstScreen;
