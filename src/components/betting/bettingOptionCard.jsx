import styled from "styled-components";
import { LuUserRound } from "react-icons/lu";

export default function BettingOptionCard({
  option,
  selected = false,
  selectable = false,
  hideStats = false,
  hideParticipant = false,
  onSelect,
}) {
  const percentage = Math.min(
    100,
    Math.max(0, Number(option?.percentage) || 0)
  );

  const handleClick = () => {
    if (!selectable) {
      return;
    }

    onSelect?.(option.id);
  };

  return (
    <OptionRow>
      {selectable && (
        <RadioButton
          type="button"
          onClick={handleClick}
          aria-label={`${option?.label ?? "옵션"} 선택`}
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
          <OptionLabel>
            {option?.label ?? "선택지"}
          </OptionLabel>

          <ProgressTrack>
            <ProgressBar $percentage={percentage} />
          </ProgressTrack>

          <OptionInfo>
            {!hideParticipant && (
              <ParticipantInfo>
                <LuUserRound />

                <span>
                  {hideStats
                    ? "*명"
                    : `${option?.participantCount ?? 0}명`}
                </span>
              </ParticipantInfo>
            )}

            <PointInfo>
              <PointIcon>P</PointIcon>

              <strong>
                {hideStats
                  ? "**"
                  : option?.totalPoint ?? 0}
              </strong>
            </PointInfo>
          </OptionInfo>
        </OptionLeft>

        <Percentage>{percentage}%</Percentage>
      </OptionContainer>
    </OptionRow>
  );
}