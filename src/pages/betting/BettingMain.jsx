import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import BettingCard from "../../components/betting/BettingCard";
import PointBadge from "../../components/common/PointBadge";

import { getMyBets } from "../../api/bettingApi";
import useUserInfo, {
  getUserPoint,
} from "../../hooks/useUserInfo";

import {
  mockAvailableBetting,
  mockAvailableBetting2,
} from "../../data/BettingData";

const GROUP_ID = 1;

// mock 베팅 ID와 실제 베팅 대상 사용자 ID 연결
const TARGET_USER_BY_BETTING_ID = {
  1: 2,
  2: 3,
  4: 5,
};

const BET_STATUS_TEXT = {
  WIN: "예측 성공",
  LOSE: "예측 실패",
  PENDING: "진행 중",
};

/**
 * 백엔드의 내 베팅 응답을
 * 기존 BettingCard가 사용하는 데이터 형태로 변환
 */
const convertBetToCardData = (bet) => {
  return {
    id: bet.betId,
    participationId: bet.betId,

    ownerName: bet.targetNickname,

    question: `미션 ${bet.missionCount ?? 0}개 결과 예측`,

    remainingTimeText:
      BET_STATUS_TEXT[bet.betStatus] ??
      bet.betStatus ??
      "상태 확인 중",

    selectedOptionId: bet.myBetType,

    options: [
      {
        id: "SUCCESS",
        text: `성공 ${bet.successRate ?? 0}% · ${
          bet.successPool ?? 0
        }P`,
      },
      {
        id: "FAIL",
        text: `실패 ${bet.failRate ?? 0}% · ${
          bet.failPool ?? 0
        }P`,
      },
    ],

    // 나중에 상세 정보가 필요할 때 사용
    originalData: bet,
  };
};

export default function BettingMainPage() {
  const navigate = useNavigate();

  // 로그인 기능 연결 전 임시 사용자 ID
  const currentUserId = Number(
    localStorage.getItem("userId") ?? 1
  );

  const [myBets, setMyBets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const { userInfo } = useUserInfo();
  const userPoint = getUserPoint(userInfo, 0);

  useEffect(() => {
    const fetchMyBets = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const response = await getMyBets(currentUserId);

        console.log("내 베팅 내역 API 응답:", response);

        // Swagger 응답:
        // {
        //   success: true,
        //   data: [...]
        // }
        const betList = Array.isArray(response?.data)
          ? response.data
          : [];

        const convertedBets = betList.map(
          convertBetToCardData
        );

        setMyBets(convertedBets);
      } catch (error) {
        console.error("내 베팅 내역 조회 실패:", {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message,
          url: error.config?.url,
        });

        setErrorMessage(
          error.response?.data?.message ??
            "내 베팅 내역을 불러오지 못했습니다."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyBets();
  }, [currentUserId]);

  const handleCancel = (betId) => {
    // DELETE API는 다음 단계에서 연결
    console.log("예측 취소:", betId);
  };

  const handleReselect = (betId) => {
    // PUT API는 다음 단계에서 연결
    console.log("결과 재선택:", betId);
  };

  const handleJoin = (bettingId) => {
    const targetUserId =
      TARGET_USER_BY_BETTING_ID[Number(bettingId)];

    if (!targetUserId) {
      alert("베팅 대상 사용자 ID가 없습니다.");
      return;
    }

    console.log("베팅 참여 정보:", {
      bettingId,
      groupId: GROUP_ID,
      targetUserId,
      bettorId: currentUserId,
    });

    navigate(`/BettingMain/${bettingId}`, {
      state: {
        groupId: GROUP_ID,
        targetUserId,
        bettorId: currentUserId,
      },
    });
  };

  return (
    <PageContainer>
      <RoomName>어제의 나는 죽었다</RoomName>

      <PointWrapper>
        <PointBadge point={userPoint} />
      </PointWrapper>

      <Text>베팅 현황</Text>

      {/* 참여 가능한 베팅은 조회 API가 없으므로 mock 유지 */}
      <BettingCard
        betting={mockAvailableBetting}
        mode="join"
        onJoin={handleJoin}
      />

      <BettingCard
        betting={mockAvailableBetting2}
        mode="join"
        onJoin={handleJoin}
      />

      <Text>내 베팅 내역</Text>

      {isLoading && (
        <StatusMessage>
          베팅 내역을 불러오는 중입니다.
        </StatusMessage>
      )}

      {!isLoading && errorMessage && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}

      {!isLoading &&
        !errorMessage &&
        myBets.length === 0 && (
          <StatusMessage>
            참여한 베팅이 없습니다.
          </StatusMessage>
        )}

      {!isLoading &&
        !errorMessage &&
        myBets.map((bet) => (
          <BettingCard
            key={bet.id}
            betting={bet}
            mode="manage"
            onCancel={handleCancel}
            onReselect={handleReselect}
          />
        ))}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RoomName = styled.h1`
  margin: 0 auto;

  font-size: 20px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
`;

const Text = styled.h2`
  margin: 10px 0 0;

  font-size: 18px;
`;

const PointWrapper = styled.div`
  width: 350px;
  max-width: 100%;

  display: flex;
  justify-content: flex-end;

  margin: 0 auto;
`;

const StatusMessage = styled.p`
  width: 350px;
  max-width: 100%;

  margin: 16px auto;

  color: #777777;
  font-size: 13px;
  text-align: center;
`;

const ErrorMessage = styled(StatusMessage)`
  color: #d64545;
`;