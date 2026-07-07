import styled from "styled-components";
import BettingOptionCard from "./BettingOptionCard";

export default function BettingCard({
  betting,
  mode = "join",
  onJoin,
  onCancel,
  onReselect,
}) {
  const isManageMode = mode === "manage";

  return (
    <Card>
      <CardHeader>
        <OwnerText>
          <strong>{betting.ownerName}님</strong>의 미션
        </OwnerText>

        <PredictionLabel>결과예측</PredictionLabel>
      </CardHeader>

      <Question>{betting.question}</Question>

      <Timer>{betting.remainingTimeText}</Timer>

      <OptionList>
        {betting.options.map((option) => (
          <BettingOptionCard
            key={option.id}
            option={option}
            selected={
              isManageMode &&
              betting.selectedOptionId === option.id
            }
          />
        ))}
      </OptionList>

      <ButtonArea>
        {isManageMode ? (
          <ButtonGroup>
          <CancelButton
            type="button"
            onClick={() =>
              onCancel?.(betting.participationId)
            }
          >
            예측 취소
          </CancelButton>

          <ReselectButton
            type="button"
            onClick={() =>
              onReselect?.(betting.id)
            }
          >
            결과 재선택
          </ReselectButton>
        </ButtonGroup>
        ) : (
          <JoinButton
            type="button"
            onClick={() => onJoin?.(betting.id)}
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
  background-color: #f0e1e2;
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
  color: #ffffff;

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

  background-color: #b48587;
  border-radius: 999px;

  color: #ffffff;
  font-size: 10px;
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
`;

const CancelButton = styled(BaseButton)`
  background-color: #ffffff;
  color: #111111;
`;

const ReselectButton = styled(BaseButton)`
  background-color: #d4a7a9;
  color: #ffffff;
`;

const JoinButton = styled(BaseButton)`
  background-color: #d4a7a9;
  color: #ffffff;
`;
