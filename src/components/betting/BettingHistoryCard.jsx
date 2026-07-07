import styled from "styled-components";
import BettingOptionCard from "./BettingOptionCard";

export default function BettingHistoryCard({ history }) {
  return (
    <HistoryCard>
      <CardHeader>
        <OwnerText>
          <strong>{history.ownerName}님</strong>의 미션
        </OwnerText>

        <PredictionLabel>결과예측</PredictionLabel>
      </CardHeader>

      <MissionResult>{history.missionResult}</MissionResult>

      <OptionList>
        {history.options.map((option) => (
          <BettingOptionCard
            key={option.id}
            option={option}
            selected={
              history.selectedOptionId === option.id
            }
          />
        ))}
      </OptionList>

      <Divider />

      <PointResultRow>
        <BetPoint>
          베팅 포인트:
          {history.betPoint.toLocaleString()}
        </BetPoint>

        <ProfitPoint $isPositive={history.profitPoint > 0}>
          포인트 수익:
          {history.profitPoint > 0 ? "+" : ""}
          {history.profitPoint.toLocaleString()}
        </ProfitPoint>
      </PointResultRow>
    </HistoryCard>
  );
}

const HistoryCard = styled.article`
  width: 350px;
  max-width: 100%;

  margin: 0 auto;
  padding: 14px;

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

  font-size: 16px;
  font-weight: 400;

  strong {
    font-weight: 700;
  }
`;

const PredictionLabel = styled.span`
  color: #a7a7a7;

  font-size: 13px;
  font-weight: 700;
`;

const MissionResult = styled.h2`
  margin: 18px 0 14px;

  font-size: 22px;
  font-weight: 700;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Divider = styled.hr`
  margin: 14px 0;

  border: none;
  border-top: 2px solid #ffffff;
`;

const PointResultRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  font-size: 16px;
  font-weight: 700;
`;

const BetPoint = styled.span``;

const ProfitPoint = styled.span`
  color: ${({ $isPositive }) =>
    $isPositive ? "#111111" : "#111111"};
`;
