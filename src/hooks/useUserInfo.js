import { useEffect, useState } from "react";

import { getUserInfo } from "../api/userApi";

const DEFAULT_USER_ID = "1";

export const getCurrentUserId = () => {
  return localStorage.getItem("userId") ?? DEFAULT_USER_ID;
};

export const getUserData = (userInfo) => {
  return userInfo?.data ?? userInfo?.result ?? userInfo;
};

export const getUserNickname = (userInfo, fallbackNickname = "사용자") => {
  const user = getUserData(userInfo);

  return (
    user?.nickname ??
    user?.name ??
    user?.username ??
    fallbackNickname
  );
};

export const getUserPoint = (userInfo, fallbackPoint = 0) => {
  const user = getUserData(userInfo);

  return (
    user?.point ??
    user?.points ??
    user?.pointBalance ??
    user?.currentPoint ??
    fallbackPoint
  );
};

export default function useUserInfo(userId = getCurrentUserId()) {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(Boolean(userId));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      return;
    }

    const fetchUserInfo = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getUserInfo(userId);
        setUserInfo(data);
      } catch (fetchError) {
        console.error("사용자 정보 조회 실패:", fetchError);
        setError(fetchError);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, [userId]);

  return { userInfo, isLoading, error };
}
