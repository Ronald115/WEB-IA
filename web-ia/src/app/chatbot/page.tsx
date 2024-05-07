"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Mic } from "@mui/icons-material";
import SmallCard from "./components/smallCards";
import "./Chatbot.css";
import { useModel } from "../../shared/hooks/useModel";

const cardNames = [
  "cirrhosis",
  "bitcoin",
  "wine",
  "cerebral_stroke",
  "phone_company_churn",
  "covid",
  "bmi",
  "car",
  "avocato",
  "hepatitis",
];

const cardDescriptions: { [key: string]: string } = {
  cirrhosis: "Classify the type of cirrhosis",
  bitcoin: "Predict the price of bitcoin",
  wine: "Classify the quality of wine",
  cerebral_stroke: "Classify if a patient will have a stroke",
  phone_company_churn: "Classify if a customer is going to switch cell companies",
  covid: "Predict the number of COVID-19 cases",
  bmi: "Predict a patient's body mass index",
  car: "Predict the price of a car",
  avocato: "Predict the price of avocado",
  hepatitis: "Classify what type of hepatitis a patient has",
};


const Chatbot: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const { model, setModel, submitModel } = useModel();

  useEffect(() => {
    if (model && model.result) {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        `Model result: ${model.result}`,
      ]);
    }
  }, [model]);

  const handleCardClick = (cardName: string) => {
    setSelectedCard(cardName);
    setModel({ name: cardName, parameters: {} });
  };

  const handleDialogClose = () => {
    setSelectedCard(null);
  };

  const handleDialogSubmit = () => {
    submitModel();
    setSelectedCard(null);
  };

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    setModel({
      ...model,
      parameters: {
        ...model.parameters,
        [event.target.name]: Number(event.target.value),
      },
    });
  };

  const handleChatInputChange = (event: {
    key: string;
    target: { value: string };
  }) => {
    if (event.key === "Enter") {
      const message = event.target.value;
      setChatMessages((prevMessages) => [...prevMessages, message]);
      if (message.toLowerCase().includes("bitcoin")) {
        setSelectedCard("bitcoin");
        setModel({ name: "bitcoin", parameters: {} });
      }
      event.target.value = "";
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-section">
        <div className="cards-container">
          {cardNames.slice(0, 5).map((cardName, index) => (
            <SmallCard
              title={cardName}
              description={cardDescriptions[cardName]}
              key={index}
              onClick={() => handleCardClick(cardName)}
            />
          ))}
        </div>
        <div className="chat-window">
          {chatMessages.map((message, index) => (
            <Typography style={{ color: "black" }} key={index}>
              {message}
            </Typography>
          ))}
          <div className="chat-input">
            <TextField
              fullWidth
              placeholder="Type your message here"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  const message = (event.target as HTMLInputElement).value;
                  handleChatInputChange({
                    key: event.key,
                    target: { value: message },
                  });
                }
              }}
            />
            <IconButton>
              <Mic />
            </IconButton>
          </div>
        </div>
        <div className="cards-container">
          {cardNames.slice(5).map((cardName, index) => (
            <SmallCard
              title={cardName}
              description={cardDescriptions[cardName]}
              key={index}
              onClick={() => handleCardClick(cardName)}
            />
          ))}
        </div>
      </div>
      <Dialog open={selectedCard !== null} onClose={handleDialogClose}>
        <DialogTitle>Enter model parameters for {selectedCard}</DialogTitle>
        <DialogContent>
          {selectedCard === "bitcoin" && (
            <>
              <TextField
                name="volume"
                label="Volume"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
              />
              <TextField
                name="market_cap"
                label="Market Cap"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
              />
            </>
          )}
          {/* Aquí irían los campos de entrada para los parámetros de otros modelos */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleDialogSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Chatbot;
