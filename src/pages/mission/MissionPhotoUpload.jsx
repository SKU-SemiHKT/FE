import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PhotoPreviewBox from "../../components/mission/PhotoPreviewBox";
import MissionTargetCard from "../../components/mission/MissionTargetCard";

import { missionPhotoList } from "../../data/MissionData";

export default function MissionPhotoUpload() {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [selectedMissionId, setSelectedMissionId] =
    useState(null);

  const handleImageChange = (file) => {
    setSelectedFile(file);

    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
  };

  const handleMissionSelect = (missionId) => {
    setSelectedMissionId(missionId);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("인증 사진을 먼저 촬영해주세요.");
      return;
    }

    if (!selectedMissionId) {
      alert("인증할 미션을 선택해주세요.");
      return; 
    }
 
    console.log("업로드 예정 데이터:", {
      missionId: selectedMissionId,
      imageFile: selectedFile,
    });

    alert("미션 인증 사진이 등록되었습니다.");
  };

  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  return (
    <PageContainer>
      <TopBar>
        <BackButton
          type="button"
          onClick={() => navigate(-1)}
          aria-label="뒤로가기"
        >
          ‹
        </BackButton>

        <PageTitle>어제의 나는 죽었다</PageTitle>

        <EmptySpace />
      </TopBar>

      <PhotoPreviewBox
        previewImage={previewImage}
        onImageChange={handleImageChange}
      />

      <MissionList>
        {missionPhotoList.map((mission) => (
          <MissionTargetCard
            key={mission.id}
            mission={mission}
            selected={selectedMissionId === mission.id}
            onSelect={handleMissionSelect}
          />
        ))}
      </MissionList>

      <UploadButton
        type="button"
        onClick={handleUpload}
        disabled={!selectedFile || !selectedMissionId}
      >
        인증 사진 등록
      </UploadButton>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;

  display: flex; 
  flex-direction: column;

  padding-bottom: 110px;
  box-sizing: border-box;
`;

const TopBar = styled.header`
  width: 350px;
  max-width: 100%;

  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center; 

  margin: 0 auto 36px;
`;

const BackButton = styled.button`
  padding: 0;

  border: none;
  background-color: transparent;

  font-size: 38px;
  line-height: 1;

  cursor: pointer;
`;

const PageTitle = styled.h1`
  margin: 0;

  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;

const EmptySpace = styled.div`
`;

const MissionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 22px;
`;

const UploadButton = styled.button`
  width: 350px;
  max-width: 100%;
  height: 48px;

  margin: 20px auto 0;

  border: none;
  border-radius: 12px;

  background-color: #E0F7D4;
  color: #ffffff;

  font-size: 15px;
  font-weight: 700;

  cursor: pointer;

  &:disabled {
    background-color: #d5d5d5;
    cursor: not-allowed;
  }
`;