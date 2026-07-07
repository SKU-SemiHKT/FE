import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import PointBadge from "../../components/common/PointBadge";
import BettingPointSelector from "../../components/betting/BettingPointSelector";
import BettingResultSelector from "../../components/betting/BettingResultSelector";
import BettingConfirmModal from "../../components/betting/BettingConfirmModal";
import useUserInfo, { getUserPoint } from "../../hooks/useUserInfo";

import { mockBettings } from "../../data/BettingData";

export default function BettingDetail() {
  const { bettingId } = useParams();
  const navigate = useNavigate();
  const { userInfo } = useUserInfo();

  const betting = mockBettings.find(
    (item) => item.id === Number(bettingId)
  );

  const [selectedPoint, setSelectedPoint] = useState(100);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userPoint = getUserPoint(userInfo, betting?.pointBalance ?? 0);

  // 존재하지 않는 베팅 ID 처리
  if (!betting) {
    return (
      <NotFoundMessage>
        존재하지 않는 베팅입니다.
      </NotFoundMessage>
    );
  }

  // 현재 선택한 성공/실패 옵션
  const selectedOption = betting.options.find(
    (option) => option.id === selectedOptionId
  );

  // 결과 선택 버튼 클릭
  const handleOpenModal = () => {
    if (!selectedPoint) {
      alert("베팅할 포인트를 선택해주세요.");
      return;
    }

    if (selectedPoint < betting.minimumPoint) {
      alert(
        `최소 ${betting.minimumPoint}포인트부터 베팅할 수 있습니다.`
      );
      return;
    }

    if (selectedPoint > betting.maximumPoint) {
      alert(
        `최대 ${betting.maximumPoint}포인트까지 베팅할 수 있습니다.`
      );
      return;
    }

    if (!selectedOptionId) {
      alert("성공 또는 실패를 선택해주세요.");
      return;
    }

    setIsModalOpen(true);
  };

  // 모달에서 '베팅할게요' 클릭
  const handleConfirmBetting = () => {
    if (!selectedOption) {
      alert("선택한 결과가 없습니다.");
      return;
    }

    console.log("최종 베팅 정보:", {
      bettingId: betting.id,
      optionId: selectedOptionId,
      optionLabel: selectedOption.label,
      point: selectedPoint,
    });

    alert(
      `${selectedOption.label}에 ${selectedPoint}포인트를 베팅했습니다.`
    );

    setIsModalOpen(false);
  };

  return (
    <PageContainer>
        <RoomName>어제의 나는 죽었다</RoomName>

      <PointWrapper>
        <PointBadge point={userPoint} />
      </PointWrapper>

      <MissionOwner>
        <strong>{betting.ownerName}님</strong>의 미션
      </MissionOwner>

      <BettingPointSelector
        minimumPoint={betting.minimumPoint}
        maximumPoint={betting.maximumPoint}
        value={selectedPoint}
        onChange={setSelectedPoint}
      />

      <BettingResultSelector
        question={betting.detailQuestion}
        remainingTimeText={betting.remainingTimeText}
        options={betting.options}
        selectedOptionId={selectedOptionId}
        onSelectOption={setSelectedOptionId}
        onSubmit={handleOpenModal}
      />

      <HistoryButton
        type="button"
        onClick={() => navigate("/BettingHistory")}
      >
        배당 내역 확인
      </HistoryButton>

      <BettingConfirmModal
        isOpen={isModalOpen}
        optionLabel={selectedOption?.label ?? ""}
        point={selectedPoint}
        onConfirm={handleConfirmBetting}
        onClose={() => setIsModalOpen(false)}
      />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 18px;
  box-sizing: border-box;
`;

const RoomName = styled.h1`
  margin: 0;

  font-size: 20px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
`;

const PointWrapper = styled.div`
  width: 350px;
  max-width: 100%;

  display: flex;
  justify-content: flex-end;

  margin: 0 auto;
`;

const MissionOwner = styled.h2`
  width: 350px;
  max-width: 100%;

  margin: 4px auto 10px;

  font-size: 21px;
  font-weight: 400;

  strong {
    font-weight: 700;
  }
`;

const HistoryButton = styled.button`
  width: 350px;
  max-width: 100%;
  height: 48px;

  margin: 0 auto;

  border: 1px solid #79CA74;
  border-radius: 7px;

  background-color: #ffffff;
  color: #244f22;

  font-size: 15px;
  font-weight: 700;

  cursor: pointer;
`;

const NotFoundMessage = styled.div`
  padding: 100px 20px;

  color: #777777;
  text-align: center;
`;
