import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BettingCard from "../../components/betting/BettingCard";
import PointBadge from "../../components/common/PointBadge";

import {
    mockMyBetting,
    mockAvailableBetting,
    mockAvailableBetting2,
    } from "../../data/BettingData";

    export default function BettingMainPage() {
        const navigate = useNavigate();

        const handleCancel = (participationId) => {
            console.log("예측 취소:", participationId);
        };

        const handleReselect = (bettingId) => {
            console.log("결과 재선택:", bettingId);
        };

        const handleJoin = (bettingId) => {
            navigate(`/BettingMain/${bettingId}`);
            console.log("지금 참여하기:", bettingId);
        };

        return (
            <PageContainer>
                <RoomNameBox>
                    <RoomName>어제의 나는 죽었다</RoomName>
                </RoomNameBox>
                <PointWrapper>
                    <PointBadge point={1890} />
                </PointWrapper>

                <Text>배팅 현황</Text>
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
                <BettingCard
                    betting={mockMyBetting}
                    mode="manage"
                    onCancel={handleCancel}
                    onReselect={handleReselect}
                />
            </PageContainer>
        );
    }

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const RoomNameBox = styled.div`
    width: fit-content;
    height: auto;
    margin: 0 auto;

    padding: 5px 10px;

    background-color: #e1baba;
    border-radius: 999px;
`;
const RoomName = styled.h1`
    margin: 0 auto;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
`;
const Text = styled.h2`
    margin: 0px;

    font-size: 18px;
`;
const PointWrapper = styled.div`
  width: 350px;
  max-width: 100%;

  display: flex;
  justify-content: flex-end;

  margin: 0 auto;
`;