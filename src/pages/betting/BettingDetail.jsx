import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import PointBadge from "../../components/common/PointBadge";

export default function BettingDetail() {
  const navigate = useNavigate();
  const { bettingId } = useParams();

  return (
    <PageContainer>
        <RoomNameBox>
            <RoomName>어제의 나는 죽었다</RoomName>
        </RoomNameBox>
        <PointWrapper>
            <PointBadge point={1890} />
        </PointWrapper>
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

const PointWrapper = styled.div`
  width: 350px;
  max-width: 100%;

  display: flex;
  justify-content: flex-end;

  margin: 0 auto;
`;