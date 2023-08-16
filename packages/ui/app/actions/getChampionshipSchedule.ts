import axios from "axios";

export const getChampionshipSchedule = async (championshipId?: string) => {
  if (!championshipId) return;

  const response = await axios
    .get(`http://localhost:3333/api/v1/calendar/${championshipId}`)
    .then((response) => response.data)
    .catch((error) => {
      return error;
    });

  return response;
};
