import { useState, useRef } from "react";
import { speechToText } from "../services/speechToTextService";

export const useSpeechToText = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const toggleRecording = () => {
    if (!isRecording) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.start();

        setIsRecording(true);
      });
    } else {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.addEventListener(
          "dataavailable",
          async (event) => {
            const audioBlob = event.data;
            const text = await speechToText(audioBlob);
            setTranscript(text);
          }
        );

        mediaRecorderRef.current.stop();
        setIsRecording(false);
      }
    }
  };

  return { isRecording, transcript, toggleRecording };
};
