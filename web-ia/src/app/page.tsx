import React from "react";
import { Container, Grid } from "@mui/material";
import AlgorithmCard from "./components/algorithmCard";
import "./App.css";

const algorithms = [
  {
    title: "Algorithm 1",
    description: "Description for Algorithm 1",
  },
  {
    title: "Algorithm 2",
    description: "Description for Algorithm 2",
  },
  // Add more algorithms here...
];

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {algorithms.map((algorithm, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AlgorithmCard
              title={algorithm.title}
              description={algorithm.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;