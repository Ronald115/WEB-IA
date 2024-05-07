import axios from "axios";

export const submitModel = async (model: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log(
    "Sending the following data to the API:",
    JSON.stringify(model.parameters)
  ); // Agregamos un console.log

  try {
    const response = await axios.post(
      `http://localhost:5000/api/model/${model.name}`,
      JSON.stringify(model.parameters),
      config
    );
    return response.data.prediction;
  } catch (error) {
    console.error("Error al enviar el modelo", error);
    return null;
  }
};
