'use client'

import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import AlgorithmCard from "./components/algorithmCard";
import "./App.css";

const algorithms = [
  {
    title: "Chatbot",
    description: "Talk to a chatbot",
    link: "/chatbot"
  },
  {
    title: "Emotions",
    description: "Detect emotions through your camera",
    link: "/emotions"
  },
];

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h2" component="div" gutterBottom>
        Proyecto IA
      </Typography>
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          {algorithms.map((algorithm, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AlgorithmCard
                title={algorithm.title}
                description={algorithm.description}
                link={algorithm.link}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Typography variant="body1" component="div" align="right" style={{ marginTop: 'auto' }}>
        Ronald Arce, Sebastian Castro, Mayckel Porras
      </Typography>
    </div>
  );
};

export default App;

