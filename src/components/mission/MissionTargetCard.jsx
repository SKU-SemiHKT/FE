import styled from "styled-components";

export default function MissionTargetCard({
  mission,
  selected = false,
  onSelect,
}) {
  return (
    <Card $selected={selected}>
      <MissionInformation>
        <MissionTitle>{mission.title}</MissionTitle>

        <MemberCount>
          그룹원 총{mission.memberCount}명
        </MemberCount>

        <RemainingDays>
          공동 목표 마감까지 {mission.remainingDays}일 남음
        </RemainingDays>
      </MissionInformation>

      <StartButton
        type="button"
        $selected={selected}
        onClick={() => onSelect(mission.id)}
      >
        {selected ? "선택 완료" : "미션 시작"}
      </StartButton>
    </Card>
  );
}

const Card = styled.article`
  width: 100%;
  min-height: 108px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  margin: 0 auto;
  padding: 26px 33px 26px 25px;

  box-sizing: border-box;

  border: ${({ $selected }) =>
    $selected
      ? "2px solid #72c95b"
      : "2px solid transparent"};

  border-radius: 24px;
  background-color: #ddf8d1;
`;

const MissionInformation = styled.div`
  min-width: 0;
`;

const MissionTitle = styled.h2`
  margin: 0;

  color: #3f3f3f;
  font-size: 19px;
  font-weight: 800;
  line-height: 1.2;
`;

const MemberCount = styled.p`
  margin: 5px 0 0;

  color: #174f13;
  font-size: 13px;
  font-weight: 800;
`;

const RemainingDays = styled.p`
  margin: 18px 0 0;

  color: #276723;
  font-size: 12px;
  font-weight: 500;
`;

const StartButton = styled.button`
  flex-shrink: 0;

  width: 74px;
  height: 40px;

  border: none;
  border-radius: 999px;

  background-color: ${({ $selected }) =>
    $selected ? "#72c95b" : "#ffffff"};

  color: ${({ $selected }) =>
    $selected ? "#ffffff" : "#2f6b2a"};

  font-size: 12px;
  font-weight: 800;

  cursor: pointer;
`;
