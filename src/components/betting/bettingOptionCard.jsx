import styled from "styled-components";
import { LuUserRound } from "react-icons/lu";

export default function BettingOptionCard({
  option,
  selected = false,
}) {
  return (
    <OptionContainer $selected={selected}>
      <OptionLeft>
        <OptionLabel>{option.label}</OptionLabel>

        <ProgressTrack>
          <ProgressBar $percentage={option.percentage} />
        </ProgressTrack>

        <OptionInfo>
          <ParticipantInfo>
            <LuUserRound />
            <span>{option.participantCount}명</span>
          </ParticipantInfo>

          <PointInfo>
            <PointIcon>P</PointIcon>
            <strong>{option.totalPoint}</strong>
          </PointInfo>
        </OptionInfo>
      </OptionLeft>

      <Percentage>{option.percentage}%</Percentage>
    </OptionContainer>
  );
}

const OptionContainer = styled.div`
  width: 100%;
  height: 64px;
  padding: 8px 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  box-sizing: border-box;

  border: ${({ $selected }) =>
    $selected
      ? "2px solid #d2a8aa"
      : "2px solid transparent"};

  border-radius: 10px;
  background-color: #ffffff;
`;

const OptionLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

const OptionLabel = styled.p`
  margin: 0;

  font-size: 13px;
  font-weight: 500;
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 3px;

  margin-top: 6px;

  background-color: #d6d6d6;
  border-radius: 999px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  width: ${({ $percentage }) => `${$percentage}%`};
  height: 100%;

  background-color: #b58f91;
  border-radius: inherit;
`;

const OptionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  margin-top: 3px;
`;

const ParticipantInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  font-size: 11px;

  svg {
    font-size: 14px;
  }
`;

const PointInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  font-size: 11px;
`;

const PointIcon = styled.span`
  width: 14px;
  height: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: #ffc1c5;

  color: #ed7f85;
  font-size: 9px;
  font-weight: 700;
`;

const Percentage = styled.strong`
  flex-shrink: 0;

  font-size: 20px;
`;