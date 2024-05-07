// speechToTextService.ts
import axios from "axios";

export const speechToText = async (audioBlob: Blob) => {
  const formData = new FormData();
  formData.append("Audio", audioBlob, "audio.wav");

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  try {
    const response = await axios.post(
      "http://localhost:5000/api/speech-to-text",
      formData,
      config
    );
    console.log("Respuesta del servidor:", response.data); 
    return response.data.speech_to_text;
  } catch (error) {
    console.error("Error al convertir el audio a texto", error);
    return null;
  }
};
