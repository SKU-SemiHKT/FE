import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getMyGroups(userId) {
  const response = await axios.get(`${BASE_URL}/api/groups`, {
    params: { userId },
  });
  return response.data;
}

export async function getGroupDetail(groupId) {
  const response = await axios.get(`${BASE_URL}/api/groups/${groupId}`);
  return response.data;
}

export const getUserInfo = async (userId) => {
  const res = await axios.get(`${BASE_URL}/api/auth/${userId}`);
  return res.data;
};