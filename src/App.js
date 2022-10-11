import { Box, Container, Typography } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstScreen from "./pages/FirstScreen/FirstScreen";
import QuestionsScreen from "./pages/QuestionsScreen/QuestionsScreen";
import ResultScreen from "./pages/ResultScreen/ResultScreen";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box mt={5} textAlign="center">
          <Switch>
            <Route path="/" exact>
              <Typography variant="h2" fontWeight="bold">
                Quiz App
              </Typography>
              <FirstScreen />
            </Route>
            <Route path="/questions">
              <QuestionsScreen />
            </Route>
            <Route path="/result">
              <ResultScreen />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
