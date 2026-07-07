import axiosInstance from "./axiosInstance";

// 내 베팅 내역 조회
export const getMyBets = async (userId) => {
  const response = await axiosInstance.get(
    `/api/users/${userId}/bets`
  );

  return response.data;
};

// 베팅 걸기
export const createBet = async ({
  groupId,
  targetUserId,
  bettorId,
  betType,
  betAmount,
}) => {
  const response = await axiosInstance.post(
    `/api/groups/${groupId}/users/${targetUserId}/bets`,
    {
      bettorId,
      betType,
      betAmount,
    }
  );

  return response.data;
};