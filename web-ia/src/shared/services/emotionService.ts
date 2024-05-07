import axios from "axios";

export const detectEmotion = async (image: Blob) => {
  const formData = new FormData();
  formData.append("Image", image, "image.jpg"); // Adjuntar el Blob al objeto FormData

  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };

  try {
    const response = await axios.post("http://localhost:5000/api/feeling", formData, config);
    return response.data[0].dominant_emotion;
  } catch (error) {
    console.error("Error al detectar la emoción", error);
    return null;
  }
};
