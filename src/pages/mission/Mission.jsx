import React, { useState, useEffect } from "react";
import styled from "styled-components";
import pointImage from "../../assets/point_Image.svg";
import { getGroupDetail, getUserInfo } from "../../api/groupApi";


const DetailContainer = styled.div`
  width: 100%;
  max-width: 420px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  display: flex;
  flex-direction: column;
`;

const MissionSection = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  border-radius: 24px;
`;

const TopNav = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 30px;
  position: relative;
`;

const BackBtn = styled.span`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  position: absolute;
  left: 0;
`;

const Title = styled.div`
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #111827;
`;

const PointBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 14px;
  position: absolute;
  right: 0;
  top: 40px;
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 6px;
  }
`;

const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #111827;
  text-align: left;
`;

const DateList = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 30px;
  width: 100%;
`;

const DateItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 40px;

  .day {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 8px;
    color: #4b5563;
    text-align: center;
    width: 20px;
    height: 20px;

    ${(props) =>
      props.$active &&
      `
      background-color: #A1ED9D;
      color: #ffffff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 11px;
    `}
  }

  .num {
    font-size: 16px;
    font-weight: bold;
    color: #1f2937;
    background-color: #f3f4f6;
    border-radius: 8px;
    width: 100%;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) =>
      props.$active &&
      `
      background-color: #A1ED9D;
      color: #ffffff;
    `}
  }
`;

const PersonalMissionBox = styled.div`
background-color: #f5f5f5;
  border-radius: 20px;
  padding: 24px 20px;
`;

const BoxTitle = styled.div`
  color: #0F0F0F;
  font-size: 16px;
  font-family: Pretendard Variable;
  font-weight: 600;
  margin-bottom: 20px;
`;

const DetailList = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  &:last-child {
    border-bottom: none;
  }

  .num-circle {
    background-color: #A1ED9D;
    color: #166534;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    margin-right: 12px;
  }

  .mission-text {
   color: #0F0F0F;
   font-size: 18px;
   font-family: Pretendard Variable;
   font-weight: 500;
  }

  .add-text {
    color: #0F0F0F;
    font-size: 18px;
    font-family: Pretendard Variable;
    font-weight: 500;
  }
`;

export default function Mission({ onBack, groupId, userId }) {
  const days = [
    { day: "월", num: "28", active: false },
    { day: "화", num: "29", active: false },
    { day: "수", num: "30", active: false },
    { day: "목", num: "1", active: true },
    { day: "금", num: "2", active: false },
    { day: "토", num: "3", active: false },
    { day: "일", num: "4", active: false },
  ];

  const [groupDetail, setGroupDetail] = useState(null);
  const [userPoint, setUserPoint] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const result = await getGroupDetail(groupId);
        console.log("받아온 그룹 상세 정보:", result);
        setGroupDetail(result.data);
      } catch (error) {
        console.error("그룹 상세 정보 불러오기 실패:", error);
      }
    }
    if (groupId) fetchDetail();
  }, [groupId]);

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const result = await getUserInfo(userId);
        console.log("받아온 유저 정보:", result);
        setUserPoint(result.data.points);
      } catch (error) {
        console.error("유저 정보 불러오기 실패:", error);
      }
    }
    if (userId) fetchUserInfo();
  }, [userId]);

  if (!groupDetail) {
    return <div>Loading...</div>;
  }

  return (
    <DetailContainer>
      <TopNav>
        <BackBtn onClick={onBack}>&lt;</BackBtn>
        <Title>{groupDetail.name}</Title>
        <PointBox>
          <img src={pointImage} alt="Point" />
          {userPoint ?? "-"}
        </PointBox>
      </TopNav>

      <SectionTitle>일정</SectionTitle>
      <DateList>
        {days.map((day, index) => (
          <DateItem key={index} $active={day.active}>
            <span className="day">{day.day}</span>
            <span className="num">{day.num}</span>
          </DateItem>
        ))}
      </DateList>
     <MissionSection>
      <PersonalMissionBox>
        <BoxTitle>개인미션</BoxTitle>
        <DetailList>
          <DetailItem>
            <div className="num-circle">1</div>
            <span className="mission-text">스쿼트 60회&런지200회</span>
          </DetailItem>
          <DetailItem>
            <div className="num-circle">2</div>
            <span className="mission-text">러닝머신 4KM 걷기</span>
          </DetailItem>
          <DetailItem>
            <div className="num-circle">3</div>
            <span className="add-text">+ 추가하기</span>
          </DetailItem>
        </DetailList>
      </PersonalMissionBox>
     </MissionSection>
    </DetailContainer>
  );
}