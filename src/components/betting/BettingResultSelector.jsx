import styled from "styled-components";
import BettingOptionCard from "./BettingOptionCard";

export default function BettingResultSelector({
  question,
  remainingTimeText,
  options,
  selectedOptionId,
  onSelectOption,
  onSubmit,
}) {
  return (
    <Container>
      <Title>{question}</Title>
      <RemainingTime>{remainingTimeText}</RemainingTime>

      <OptionList>
        {options.map((option) => {
          const isSelected = selectedOptionId === option.id;

          return (
            <OptionRow
              key={option.id}
              onClick={() => onSelectOption(option.id)}
            >
              <RadioButton
                type="button"
                aria-label={`${option.label} 선택`}
              >
                <RadioCircle $selected={isSelected}>
                  {isSelected && <RadioInner />}
                </RadioCircle>
              </RadioButton>

              <OptionCardWrapper>
                <BettingOptionCard
                  option={option}
                  selected={isSelected}
                  hideStats
                />
              </OptionCardWrapper>
            </OptionRow>
          );
        })}
      </OptionList>

      <SubmitButton
        type="button"
        onClick={onSubmit}
        disabled={!selectedOptionId}
      >
        결과 선택
      </SubmitButton>
    </Container>
  );
}

const Container = styled.section`
  width: 350px;
  max-width: 100%;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
`;

const RemainingTime = styled.p`
  margin: 4px 0 0;
  font-size: 13px;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 24px;
`;

const OptionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;
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

const OptionCardWrapper = styled.div`
  flex: 1;
  min-width: 0;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 48px;

  margin-top: 14px;

  border: none;
  border-radius: 7px;

  background-color: #d4a7a9;
  color: #ffffff;

  font-size: 15px;
  font-weight: 700;

  cursor: pointer;

  &:disabled {
    background-color: #dfc5c6;
    cursor: not-allowed;
  }
`;