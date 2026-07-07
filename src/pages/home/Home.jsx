import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import checkIcon from "../../assets/check_Icon.svg";
import plusIcon from "../../assets/plus_Icon.svg"; 
import Mission from "../mission/Mission.jsx";
import { getMyGroups, getGroupDetail } from "../../api/groupApi";

const HomeContainer = styled.div`
`;

const FirstSection = styled.div`
display: flex;
justify-content: space-between;
background: #B8ED9D;
border-radius: 12px;
padding-left: 18px;
padding-right: 11px;
width: 332px;
height: 66px;

.title{
padding-top: 20px;
font-size: 18px;
font-family: Pretendard Variable;
font-weight: 500;
}

.right-Box{
padding-top: 10px;
padding-bottom: 8px;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;
}

.subtitle{
background: white;
padding: 3px 6px 3px 6px;
border-radius: 6px;
color: #0F0F0F;
font-size: 11px;
font-family: Pretendard Variable;
font-weight: 600;
}

.member-count{
color: #0F0F0F;
font-size: 12px;
font-family: Pretendard Variable;
font-weight: 400;
}

`;

const SecondSection = styled.div`
margin-top: 44px;
.mission-header{
display: flex;
justify-content: space-between;
margin-bottom: 10px;

 .section-title{
 color: #0F0F0F;
 font-size: 20px;
 font-family: Pretendard Variable;
 font-weight: 600;
 } 

 .plus-button{
 width: 24px;
 height: 24px;
 }
}

.mission-list{
display: flex;
flex-direction: column;

gap: 22px;
}

.mission-item{
display: flex;
justify-content: space-between;
align-items: center;
}

.mission-info{
display: flex;
flex-direction: column;
gap: 4px;
 .text{
 color: #0F0F0F;
 font-size: 18px;
 font-family: Pretendard Variable;
 font-weight: 500;
 }

 .time{
 color: #0F0F0F;
 font-size: 12px;
 font-family: Pretendard Variable;
 font-weight: 500;
 }
}

.custom-checkbox{
width: 24px;
height: 24px;
border-radius: 7px;
appearance: none;
background: #A1ED9D;
 &:checked {
 background-image: url("${checkIcon}");
 background-size: 24px;
 background-repeat: no-repeat;
 background-position: center;
 }
}
`;

const ThirdSection = styled.div`
margin-top: 21px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`;

const AuthCard = styled.div`
position: relative;
border-radius: 23px;
outline: 1px #A1ED9D solid;
width: 352px;
height: 200px;
padding: 16px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: ${({ $isMe }) => ($isMe ? "#F2FFF2" : "#F5F5F5")};
`;

const CardHeader = styled.div`
display: flex;
align-items: center;
gap: 7px;

.member-icon{
width: 16px;
height: 16px;
background: #B8ED9D;
border-radius: 5px;
}

.member-name{
font-size: 12px;
font-family: Pretendard Variable;
font-weight: 500;
}
`;

const CardContent = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
align-items: center;
justify-content: center;

.center-text{
color: #115600;
font-size: 14px;
font-family: Pretendard Variable;
font-weight: 400;
}
`;

const TagContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 11px;
align-items: flex-start;

.mission-tag{
padding-left: 8px;
padding-right: 8px;
padding-top: 3px;
padding-bottom: 3px;
border-radius: 15px;
justify-content: center;
align-items: center;
display: inline-flex;
padding-top: 3px;
padding-bottom: 3px;
background: white;
font-size: 12px;
font-family: Pretendard Variable;
font-weight: 500;

}
`;

export default function Home(){
    const navigate = useNavigate();
    const[view, setView] = useState("home");
    const [groupInfo, setGroupInfo] = useState(null);
    const [groupDetail, setGroupDetail] = useState(null);

     useEffect(() => {
      async function fetchGroups() {
        try {
          const result = await getMyGroups(1);
          console.log("받아온 그룹 정보:", result.data[0]);
          setGroupInfo(result.data[0]);
        } catch (error) {
          console.error("그룹 불러오기 실패:", error);
        }
      }
      fetchGroups();
    }, []);

    if (view === "detail") {
    return <Mission groupId={groupInfo.groupId} onBack={() => setView("home")} />;
    }

    if (!groupInfo) {
        return <div>Loading...</div>;
    }
    
    return(
        <HomeContainer>
            <FirstSection>
                 <span className="title">{groupInfo.mainGoal}</span>
                 <div className="right-Box">
                 <span className="subtitle">{groupInfo.name}</span>
                 <span className="member-count">멤버 {groupInfo.memberCount}</span>
    </div>
            </FirstSection>
            <SecondSection>
                <div className="mission-header">
                <span className="section-title">미션</span>
                <img src={plusIcon} 
                className="plus-button" 
                onClick={() => setView("detail")}
                />
                </div>
                <div className="mission-list">
                 <div className="mission-item">
                  <div className="mission-info">
                   <span className="text">스쿼트 20회&3세트</span>
                   <span className="time">남은시간 3시간 38분</span>
                  </div>
                  <input type="checkbox" className="custom-checkbox" />
                 </div>

                 <div className="mission-item">
                  <div className="mission-info">
                   <span className="text">러닝머신 4KM 걷기</span>
                   <span className="time">남은시간 3시간 38분</span>
                  </div>
                  <input type="checkbox" className="custom-checkbox" />
                 </div>
                </div>
            </SecondSection>
            <ThirdSection>
             <AuthCard $isMe={true}
             onClick={() => navigate("/MissionPhotoUpload")}
             style={{ cursor: "pointer" }}
             >
              <CardHeader>
               <div className="member-icon" />
               <span className="member-name">유저님</span>
              </CardHeader>
              <CardContent>
               <span className="center-text">눌러서 찍기</span>
              </CardContent>
              <TagContainer>
               <div className="mission-tag">미션1:4km걷기</div>
               <div className="mission-tag">미션2:스쿼트 20회&3세트</div>
              </TagContainer>
             </AuthCard>

             <AuthCard $isMe={false}>
              <CardHeader>
               <div className="member-icon" />
               <span className="member-name">그룹원</span>
              </CardHeader>
             <CardContent />
            </AuthCard>

            <AuthCard $isMe={false}>
             <CardHeader>
              <div className="member-icon" />
              <span className="member-name">그룹원</span>
             </CardHeader>
            <CardContent />
           </AuthCard>

           <AuthCard $isMe={false}>
            <CardHeader>
             <div className="member-icon" />
             <span className="member-name">그룹원</span>
            </CardHeader>
           <CardContent />
          </AuthCard>
         </ThirdSection>
        </HomeContainer>
    )
}