'use client'

import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import { Mic } from "@mui/icons-material";
import SmallCard from "./components/smallCards";
import "./Chatbot.css";

const cards = Array.from({ length: 10 }, (_, i) => ({
  title: `Card${i + 1}`,
  description: `Description for Card${i + 1}`,
}));

const Chatbot: React.FC = () => {
  return (
    <div className="chatbot">
      <div className="chat-section">
        <div className="cards-container">
          {cards.slice(0, 5).map((card, index) => (
            <SmallCard
              title={card.title}
              description={card.description}
              key={index}
            />
          ))}
        </div>
        <div className="chat-window">
          {/* Aquí iría el código para el chat */}
          <div className="chat-input">
            <TextField fullWidth placeholder="Type your message here" />
            <IconButton>
              <Mic />
            </IconButton>
          </div>
        </div>
        <div className="cards-container">
          {cards.slice(5).map((card, index) => (
            <SmallCard
              title={card.title}
              description={card.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
