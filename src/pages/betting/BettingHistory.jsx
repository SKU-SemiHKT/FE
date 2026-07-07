import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PointBadge from "../../components/common/PointBadge";
import BettingHistoryCard from "../../components/betting/BettingHistoryCard";

import { mockBettingHistory } from "../../data/BettingData";

export default function BettingHistory() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <TopBar>
        <BackButton
          type="button"
          onClick={() => navigate(-1)}
          aria-label="뒤로가기"
        >
          ‹
        </BackButton>
        <PageTitle>베팅 내역확인</PageTitle>

        <EmptySpace />
      </TopBar>

      <PointWrapper>
        <PointBadge point={1890} />
      </PointWrapper>

      <HistoryList>
        {mockBettingHistory.map((history) => (
          <BettingHistoryCard
            key={history.id}
            history={history}
          />
        ))}
      </HistoryList>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding-bottom: 30px;
  box-sizing: border-box;
`;

const TopBar = styled.header`
  width: 350px;
  max-width: 100%;

  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;

  margin: 0 auto;
`;

const BackButton = styled.button`
  padding: 0;

  border: none;
  background-color: transparent;

  font-size: 38px;
  line-height: 1;

  cursor: pointer;
`;

const PageTitle = styled.h1`
    margin: 0 auto;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
`;

const EmptySpace = styled.div``;

const PointWrapper = styled.div`
  width: 350px;
  max-width: 100%;

  display: flex;
  justify-content: flex-end;

  margin: 24px auto 0;
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-top: 24px;
`;