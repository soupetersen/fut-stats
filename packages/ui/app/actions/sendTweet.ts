import axios from "axios";
import { toast } from "react-hot-toast";

export const sendTweet = async (message: string) => {
  const response = await axios
    .post("http://localhost:3333/api/v1/twitter/tweet", {
      message: message,
    })
    .then((response) => {
      toast.success("Tweet sent successfully");
      return response.data;
    })
    .catch((error) => {
      toast.error("Error sending tweet");
      return error;
    });

  return response;
};
