import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./AlgorithmCard.css";

interface AlgorithmCardProps {
  title: string;
  description: string;
}

const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ title, description }) => {
  return (
    <Card className="algorithm-card">
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default AlgorithmCard;