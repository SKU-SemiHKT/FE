import axios from "axios";

export const getUserInfo = async (userId) => {
  const response = await axios.get(
    `https://api.likelion.store/api/auth/${userId}`
  );

  return response.data;
};