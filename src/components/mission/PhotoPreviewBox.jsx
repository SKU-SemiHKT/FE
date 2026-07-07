import { useRef } from "react";
import styled from "styled-components";

export default function PhotoPreviewBox({
  previewImage,
  onImageChange,
}) {
  const fileInputRef = useRef(null);

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    onImageChange(file);
  };

  const now = new Date();

  const currentTime = now.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const currentDate = now
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll(". ", ".")
    .replace(/\.$/, "");

  return (
    <>
      <PreviewContainer
        type="button"
        onClick={handleBoxClick}
        aria-label="미션 인증 사진 선택"
      >
        <DateRow>
          <span>{currentTime}</span>
          <span>{currentDate}</span>
        </DateRow>

        {previewImage ? (
          <PreviewImage
            src={previewImage}
            alt="선택한 미션 인증 사진"
          />
        ) : (
          <PlaceholderText>
            헬스장 사진이 보이게 화면을 옮겨주세요
          </PlaceholderText>
        )}
      </PreviewContainer>

      <HiddenFileInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
      />
    </>
  );
}

const PreviewContainer = styled.button`
  position: relative;

  width: 100%;
  height: 184px;

  margin: 0 auto;
  padding: 31px 44px;

  box-sizing: border-box;

  border: 3px solid #7bd158;
  border-radius: 30px;

  background-color: #ffffff;

  overflow: hidden;
  cursor: pointer;
`;

const DateRow = styled.div`
  position: absolute;
  top: 31px;
  left: 44px;
  right: 44px;
  z-index: 2;

  display: flex;
  justify-content: space-between;

  font-size: 15px;
  font-weight: 500;
  color: #111111;
`;

const PreviewImage = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const PlaceholderText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 85%;
  margin: 0;

  transform: translate(-50%, -50%);

  color: #222222;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
`;

const HiddenFileInput = styled.input`
  display: none;
`;
