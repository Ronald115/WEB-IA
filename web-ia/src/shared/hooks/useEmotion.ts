import { RefObject, useState } from "react";
import { detectEmotion } from "../../shared/services/emotionService";

export const useEmotion = (videoRef: RefObject<HTMLVideoElement>, canvasRef: RefObject<HTMLCanvasElement>) => {
  const [emotion, setEmotion] = useState<string | null>(null);

  const captureAndDetectEmotion = async () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      context?.drawImage(videoRef.current, 0, 0, 640, 480);
      canvasRef.current.toBlob(async (blob) => {
        const detectedEmotion = await detectEmotion(blob as Blob);
        console.log("Dominant emotion received from API: ", detectedEmotion);
        setEmotion(detectedEmotion);
      }, "image/jpeg");
    }
  };

  return { emotion, captureAndDetectEmotion };
};
