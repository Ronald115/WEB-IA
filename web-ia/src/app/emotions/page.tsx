"use client";

import React, { useRef, useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import "./Emotion.css";

const Emotion: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [emotion, setEmotion] = useState<string | null>(null);

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const captureAndDetectEmotion = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      context?.drawImage(videoRef.current, 0, 0, 640, 480);
      // Aquí puedes guardar la imagen capturada
      // Aquí iría el código para detectar la emoción
      setEmotion("Happy"); // Esto es solo un valor ficticio
    }
  };

  return (
    <div className="emotion">
      <video ref={videoRef} autoPlay></video>
      <canvas ref={canvasRef} width="640" height="480"></canvas>
      <Button
        className="capture-button"
        variant="contained"
        color="primary"
        onClick={captureAndDetectEmotion}
      >
        Detect Emotion
      </Button>
      {emotion && (
        <Typography variant="h6">Detected Emotion: {emotion}</Typography>
      )}
    </div>
  );
};

export default Emotion;
