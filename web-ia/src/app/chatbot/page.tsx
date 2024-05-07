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
import { Mic, MicOff } from "@mui/icons-material";
import SmallCard from "./components/smallCards";
import "./Chatbot.css";
import { useModel } from "../../shared/hooks/useModel";
import { useSpeechToText } from "../../shared/hooks/useSpeechToText";
import ModelParametersModal from "./components/ModelParametersModal";

const cardNames = [
  "cirrhosis",
  "bitcoin",
  "wine",
  "stroke",
  "phone_company_churn",
  "covid",
  "bmi",
  "car_price",
  "avocado_price",
  "hepatitis",
];

const cardDescriptions: { [key: string]: string } = {
  cirrhosis: "Classify the type of cirrhosis",
  bitcoin: "Predict the price of bitcoin",
  wine: "Classify the quality of wine",
  stroke: "Classify if a patient will have a stroke",
  phone_company_churn:
    "Classify if a customer is going to switch cell companies",
  covid: "Predict the number of COVID-19 cases",
  bmi: "Predict a patient's body mass index",
  car_price: "Predict the price of a car",
  avocado_price: "Predict the price of avocado",
  hepatitis: "Classify what type of hepatitis a patient has",
};

const modelParameters: { [key: string]: string[] } = {
  bitcoin: ["volume", "market_cap"],
  cirrhosis: [
    "cholesterol",
    "albumin",
    "copper",
    "alk_phos",
    "tryglicerides",
    "platelets",
    "prothrombin",
  ],
  wine: [
    "fixed_acidity",
    "volatile_acidity",
    "citric_acid",
    "residual_sugar",
    "chlorides",
    "free_sulfur_dioxide",
    "total_sulfur_dioxide",
    "density",
    "pH",
    "sulphates",
    "alcohol",
  ],
  stroke: [
    "age",
    "hypertension",
    "heart_disease",
    "avg_glucose_level",
    "bmi",
    "gender_Male",
    "gender_Other",
    "ever_married_Yes",
    "work_type_Never_worked",
    "work_type_Private",
    "work_type_Self-employed",
    "work_type_children",
    "Residence_type_Urban",
    "smoking_status_formerly_smoked",
    "smoking_status_never_smoked",
    "smoking_status_smokes",
  ],
  phone_company_churn: [
    "gender",
    "SeniorCitizen",
    "Partner",
    "Dependents",
    "tenure",
    "PhoneService",
    "MultipleLines",
    "InternetService",
    "OnlineSecurity",
    "OnlineBackup",
    "DeviceProtection",
    "TechSupport",
    "StreamingTV",
    "StreamingMovies",
    "Contract",
    "PaperlessBilling",
    "PaymentMethod",
    "MonthlyCharges",
    "TotalCharges",
  ],
  covid: [
    "SNo",
    "ObservationDate",
    "Province/State",
    "Country/Region",
    "Last Update",
    "Confirmed",
    "Deaths"
  ],
  bmi: [
    "density",
    "Percent_body_fat",
    "age",
    "weight",
    "height",
    "neck",
    "chest",
    "abdomen",
    "hip",
    "thigh",
    "knee",
    "ankle",
    "biceps",
    "forearm",
    "wrist"
  ],
  car_price: [
    "year",
    "selling_price",
    "kms_driven",
    "fuel_type",
    "seller_type",
    "transmission",
    "owner"
  ], 
  avocado_price: [
    "total_volume",
    "4046",
    "4225",
    "4770",
    "total_bags",
    "small_bags",
    "large_bags",
    "xlarge_bags",
    "type",
    "year",
    "month",
    "spring",
    "summer",
    "fall"
  ],
  hepatitis: [
    "AST",
    "BIL",
    "GGT"
  ],
};

const Chatbot: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const { model, setModel, submitModel } = useModel();
  const { isRecording, transcript, toggleRecording } = useSpeechToText();

  useEffect(() => {
    if (model && model.result) {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        `Model result: ${model.result}`,
      ]);
    }
  }, [model]);

  useEffect(() => {
    if (transcript) {
      handleChatInputChange({
        key: "Enter",
        target: { value: transcript },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript]);

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
      } else if (message.toLowerCase().includes("cirrhosis")) {
        setSelectedCard("cirrhosis");
        setModel({ name: "cirrhosis", parameters: {} });
      } else if (message.toLowerCase().includes("wine")) {
        setSelectedCard("wine");
        setModel({ name: "wine", parameters: {} });
      } else if (message.toLowerCase().includes("stroke")) {
        setSelectedCard("stroke");
        setModel({ name: "stroke", parameters: {} });
      } else if (message.toLowerCase().includes("phone_company_churn")) {
        setSelectedCard("phone_company_churn");
        setModel({ name: "phone_company_churn", parameters: {} });
      }else if (message.toLowerCase().includes("covid")) {
        setSelectedCard("covid");
        setModel({ name: "covid", parameters: {} });
      }else if (message.toLowerCase().includes("bmi")) {
        setSelectedCard("bmi");
        setModel({ name: "bmi", parameters: {} });
      }else if (message.toLowerCase().includes("car_price")) {
        setSelectedCard("car_price");
        setModel({ name: "car_price", parameters: {} });
      }else if (message.toLowerCase().includes("avocato_price")) {
        setSelectedCard("avocato_price");
        setModel({ name: "avocato_price", parameters: {} });
      }else if (message.toLowerCase().includes("hepatitis")) {
        setSelectedCard("hepatitis");
        setModel({ name: "hepatitis", parameters: {} });
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
            <IconButton onClick={toggleRecording}>
              {isRecording ? <MicOff /> : <Mic />}
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
      <ModelParametersModal
        open={selectedCard !== null}
        onClose={handleDialogClose}
        onSubmit={handleDialogSubmit}
        model={selectedCard || ""}
        parameters={modelParameters[selectedCard || ""] || []}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default Chatbot;
