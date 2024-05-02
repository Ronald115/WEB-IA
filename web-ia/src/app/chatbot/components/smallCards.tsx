import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./SmallCard.css";

interface SmallCardProps {
  title: string;
  description: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ title, description }) => {
  return (
    <Card className="small-card">
      <CardContent>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default SmallCard;
