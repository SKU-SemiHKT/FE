import { useState } from "react";
import styled from "styled-components";

const POINT_OPTIONS = [10, 50, 100];

export default function BettingPointSelector({
  minimumPoint = 10,
  maximumPoint = 100,
  value,
  onChange,
}) {
  const [isCustomMode, setIsCustomMode] = useState(false);

  const handlePresetClick = (point) => {
    setIsCustomMode(false);
    onChange(point);
  };

  const handleCustomClick = () => {
    setIsCustomMode(true);
    onChange("");
  };

  const handleCustomChange = (event) => {
    const onlyNumber = event.target.value.replace(/[^0-9]/g, "");

    if (onlyNumber === "") {
      onChange("");
      return;
    }

    const numberValue = Number(onlyNumber);

    if (numberValue > maximumPoint) {
      onChange(maximumPoint);
      return;
    }

    onChange(numberValue);
  };

  return (
    <Container>
      <Title>베팅하기</Title>

      <Description>
        최소 {minimumPoint}포인트/최대 {maximumPoint}포인트까지 베팅 가능
      </Description>

      <ButtonList>
        {POINT_OPTIONS.map((point) => (
          <PointButton
            key={point}
            type="button"
            $selected={!isCustomMode && value === point}
            onClick={() => handlePresetClick(point)}
          >
            +{point}
          </PointButton>
        ))}

        <PointButton
          type="button"
          $selected={isCustomMode}
          onClick={handleCustomClick}
        >
          직접입력
        </PointButton>
      </ButtonList>

      {isCustomMode && (
        <CustomInput
          type="text"
          inputMode="numeric"
          value={value}
          onChange={handleCustomChange}
          placeholder={`${minimumPoint}~${maximumPoint} 입력`}
        />
      )}

      <SelectedPointBox>
        {value
          ? `${Number(value).toLocaleString()}포인트 베팅하기`
          : "베팅 포인트를 선택해주세요"}
      </SelectedPointBox>
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

  font-size: 18px;
  font-weight: 700;
`;

const Description = styled.p`
  margin: 8px 0 20px;

  font-size: 12px;
`;

const ButtonList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const PointButton = styled.button`
  height: 38px;

  border: none;
  border-radius: 999px;

  background-color: ${({ $selected }) =>
    $selected ? "#d8aaad" : "#d5d3d3"};

  color: #ffffff;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
`;

const CustomInput = styled.input`
  width: 100%;
  height: 42px;

  margin-top: 14px;
  padding: 0 12px;

  box-sizing: border-box;

  border: 1px solid #d9a8aa;
  border-radius: 8px;

  font-size: 14px;
  outline: none;
 
  &:focus {
    border-color: #b98487;
  }
`;

const SelectedPointBox = styled.div`
  width: 100%;

  margin-top: 20px;
  padding: 14px 10px;

  box-sizing: border-box;

  border: 1px solid #79CA74;
  border-radius: 8px;

  color: #79CA74;

  text-align: center;
  font-size: 15px;
  font-weight: 600;
`;