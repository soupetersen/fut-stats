import axios from "axios";

export const findChampionships = async () => {
  const response = await axios
    .get("http://localhost:3333/api/v1/footstats-data/championships")
    .then((response) => response.data)
    .catch((error) => {
      return error;
    });

  return response;
};
