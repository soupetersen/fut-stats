import axios from "axios";

export const getMatchInsights = async (
  championshipId?: string,
  matchId?: string,
) => {
  if (!championshipId || !matchId) return;

  const response = await axios
    .get(`http://localhost:3333/api/v1/match/${championshipId}/${matchId}`)
    .then((response) => response.data)
    .catch((error) => {
      return error;
    });

  return response;
};
