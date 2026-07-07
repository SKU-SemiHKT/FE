import styled from "styled-components";

import BettingOptionCard from "./BettingOptionCard";

const BET_STATUS_TEXT = {
  PENDING: "정산 대기",
  WIN: "예측 성공",
  WON: "예측 성공",
  LOSE: "예측 실패",
  LOST: "예측 실패",
};

const BET_TYPE_TEXT = {
  SUCCESS: "성공",
  FAIL: "실패",
};

export default function BettingCard({
  betting,
  mode = "join",
  onJoin,
  onCancel,
  onReselect,
}) {
  const isManageMode = mode === "manage";

  const betId = betting?.betId;

  // 참여 가능한 mock 베팅에서 사용하는 ID
  const bettingId =
    betting?.bettingId ??
    betting?.id;

  const ownerName = isManageMode
    ? betting?.targetNickname ?? "사용자"
    : betting?.ownerName ?? "사용자";

  const question = isManageMode
    ? `${betting?.missionCount ?? 0}개의 미션 결과 예측`
    : betting?.question ?? "미션 정보가 없습니다.";

  const statusText = isManageMode
    ? BET_STATUS_TEXT[betting?.betStatus] ??
      betting?.betStatus ??
      "상태 확인 중"
    : betting?.remainingTimeText ?? "진행 중";

  const selectedOptionId = isManageMode
    ? betting?.myBetType
    : betting?.selectedOptionId;

  /*
   * BettingOptionCard가 기대하는 구조:
   * id, label, percentage, totalPoint
   */
  const options = isManageMode
    ? [
        {
          id: "SUCCESS",
          label: "성공",
          percentage: betting?.successRate ?? 0,
          totalPoint: betting?.successPool ?? 0,
        },
        {
          id: "FAIL",
          label: "실패",
          percentage: betting?.failRate ?? 0,
          totalPoint: betting?.failPool ?? 0,
        },
      ]
    : betting?.options ?? [];

  const isPending =
    betting?.betStatus === "PENDING";

  return (
    <Card>
      <CardHeader>
        <OwnerText>
          <strong>{ownerName}님</strong>의 미션
        </OwnerText>

        <PredictionLabel>
          결과 예측
        </PredictionLabel>
      </CardHeader>

      <Question>{question}</Question>

      <Timer>{statusText}</Timer>

      {isManageMode && (
        <BetInformation>
          <span>
            내 예측:{" "}
            {BET_TYPE_TEXT[betting?.myBetType] ??
              betting?.myBetType ??
              "-"}
          </span>

          <span>
            베팅 금액: {betting?.myBetAmount ?? 0}P
          </span>

          {betting?.missionResult && (
            <span>
              실제 결과:{" "}
              {BET_TYPE_TEXT[betting.missionResult] ??
                betting.missionResult}
            </span>
          )}

          {betting?.profit !== null &&
            betting?.profit !== undefined && (
              <span>
                수익: {betting.profit}P
              </span>
            )}
        </BetInformation>
      )}

      <OptionList>
        {options.map((option) => (
          <BettingOptionCard
            key={option.id}
            option={option}
            selected={
              String(selectedOptionId) ===
              String(option.id)
            }
            hideParticipant={isManageMode}
          />
        ))}
      </OptionList>

      <ButtonArea>
        {isManageMode ? (
          <ButtonGroup>
            <CancelButton
              type="button"
              onClick={() => onCancel?.(betId)}
              disabled={!betId || !isPending}
            >
              예측 취소
            </CancelButton>

            <ReselectButton
              type="button"
              onClick={() => onReselect?.(betting)}
              disabled={!betId || !isPending}
            >
              결과 재선택
            </ReselectButton>
          </ButtonGroup>
        ) : (
          <JoinButton
            type="button"
            onClick={() => onJoin?.(bettingId)}
            disabled={!bettingId}
          >
            지금 참여하기
          </JoinButton>
        )}
      </ButtonArea>
    </Card>
  );
}

const Card = styled.article`
  width: 350px;
  max-width: 100%;
  min-height: 200px;

  margin: 0 auto;
  padding: 12px;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  border-radius: 12px;
  background-color: #f3f3f3;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OwnerText = styled.p`
  margin: 0;

  font-size: 14px;
`;

const PredictionLabel = styled.span`
  color: #a7a7a7;

  font-size: 12px;
  font-weight: 600;
`;

const Question = styled.h3`
  margin: 8px 0 0;

  font-size: 14px;
`;

const Timer = styled.span`
  display: inline-block;
  width: fit-content;

  margin-top: 4px;
  padding: 2px 7px;

  background-color: #79ca74;
  border-radius: 999px;

  color: #ffffff;
  font-size: 10px;
`;

const BetInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 10px;

  margin-top: 8px;

  color: #555555;
  font-size: 11px;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  margin-top: 8px;
`;

const ButtonArea = styled.div`
  margin-top: 14px;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const BaseButton = styled.button`
  width: 100%;
  height: 34px;
  padding: 0;

  border: none;
  border-radius: 7px;

  font-size: 12px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const CancelButton = styled(BaseButton)`
  background-color: #ffffff;
  color: #111111;
`;

const ReselectButton = styled(BaseButton)`
  background-color: #a1ed9d;
  color: #244f22;
`;

const JoinButton = styled(BaseButton)`
  background-color: #a1ed9d;
  color: #244f22;
`;