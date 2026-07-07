import styled from "styled-components";
import { LuUserRound } from "react-icons/lu";

export default function BettingOptionCard({
  option,
  selected = false,
  selectable = false,
  hideStats = false,
  onSelect,
}) {
  const handleClick = () => {
    if (!selectable) return;

    onSelect?.(option.id);
  };

  return (
    <OptionRow>
      {selectable && (
        <RadioButton
          type="button"
          onClick={handleClick}
          aria-label={`${option.label} 선택`}
        >
          <RadioCircle $selected={selected}>
            {selected && <RadioInner />}
          </RadioCircle>
        </RadioButton>
      )}

      <OptionContainer
        type={selectable ? "button" : undefined}
        as={selectable ? "button" : "div"}
        $selected={selected}
        $selectable={selectable}
        onClick={handleClick}
      >
        <OptionLeft>
          <OptionLabel>{option.label}</OptionLabel>

          <ProgressTrack>
            <ProgressBar $percentage={option.percentage} />
          </ProgressTrack>

          <OptionInfo>
            <ParticipantInfo>
              <LuUserRound />

              <span>
                {hideStats
                  ? "*명"
                  : `${option.participantCount ?? 0}명`}
              </span>
            </ParticipantInfo>

            <PointInfo>
              <PointIcon>P</PointIcon>

              <strong>
                {hideStats
                  ? "**"
                  : option.totalPoint ?? 0}
              </strong>
            </PointInfo>
          </OptionInfo>
        </OptionLeft>

        <Percentage>{option.percentage}%</Percentage>
      </OptionContainer>
    </OptionRow>
  );
}

const OptionRow = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 10px;
`;

const RadioButton = styled.button`
  flex-shrink: 0;

  padding: 0;
  border: none;
  background: none;

  cursor: pointer;
`;

const RadioCircle = styled.span`
  width: 22px;
  height: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid
    ${({ $selected }) =>
      $selected ? "#d2a8aa" : "#111111"};

  border-radius: 50%;
`;

const RadioInner = styled.span`
  width: 10px;
  height: 10px;

  border-radius: 50%;
  background-color: #d2a8aa;
`;

const OptionContainer = styled.div`
  width: 100%;
  height: 72px;
  padding: 10px 12px;

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
  background-color: #f7f7f7;

  color: #111111;
  text-align: left;

  cursor: ${({ $selectable }) =>
    $selectable ? "pointer" : "default"};
`;

const OptionLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

const OptionLabel = styled.p`
  margin: 0;

  font-size: 14px;
  font-weight: 500;
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 3px;

  margin-top: 7px;

  background-color: #d6d6d6;
  border-radius: 999px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  width: ${({ $percentage }) => `${$percentage}%`};
  height: 100%;

  background-color: #d9a7aa;
  border-radius: inherit;
`;

const OptionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  margin-top: 4px;
`;

const ParticipantInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  font-size: 11px;

  svg {
    font-size: 15px;
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