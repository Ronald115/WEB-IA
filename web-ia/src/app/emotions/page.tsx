"use client";

import React, { useRef, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import "./Emotion.css";
import { useEmotion } from "../../shared/hooks/useEmotion";

const Emotion: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { emotion, captureAndDetectEmotion } = useEmotion(videoRef, canvasRef); // Usamos el hook

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
        <Typography
          variant="h6"
          sx={{ color: "#3f51b5", fontWeight: "bold", marginTop: "20px" }}
        >
          Detected Emotion: {emotion}
        </Typography>
      )}
    </div>
  );
};

export default Emotion;
