import styled from "styled-components";
import PointIconImage from "../../assets/point.png";

export default function PointBadge({ point = 0 }) {
  return (
    <PointContainer>
      <PointIcon
        src={PointIconImage}
        alt="포인트"
      />

      <PointText>{point.toLocaleString()}</PointText>
    </PointContainer>
  );
}

const PointContainer = styled.div`
  width: 88px;
  height: 32px;

  display: flex;
  align-items: center;
  gap: 2px;

  padding: 4px 14px 4px 8px;

  box-sizing: border-box;

  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  border-radius: 999px;
`;

const PointIcon = styled.img`
  width: 20px;
  height: 20px;

  object-fit: contain;
  flex-shrink: 0;
`;

const PointText = styled.strong`
  color: #111111;

  font-size: 18px;
  font-weight: 700;
`;