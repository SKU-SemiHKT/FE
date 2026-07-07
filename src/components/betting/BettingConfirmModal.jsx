import styled from "styled-components";

export default function BettingConfirmModal({
  isOpen,
  optionLabel,
  point,
  onConfirm,
  onClose,
}) {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <Message>
          선택한 베팅판에
          <br />
          <strong>{optionLabel}</strong>로{" "}
          <PointText>{point}POINT</PointText>를
          <br />
          베팅하시겠습니까?
        </Message>

        <ConfirmButton
          type="button"
          onClick={onConfirm}
        >
          베팅할게요
        </ConfirmButton>
      </ModalContainer>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-color: rgba(161, 237, 157, 0.28);

  z-index: 3000;
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 430px;

  padding: 38px 30px 34px;

  box-sizing: border-box;

  background-color: #ffffff;

  border-radius: 32px 32px 0 0;

  text-align: center;
`;

const Message = styled.p`
  margin: 0;

  color: #111111;

  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
`;

const PointText = styled.span`
  color: #79CA74;
`;

const ConfirmButton = styled.button`
  width: 100%;
  height: 58px;

  margin-top: 36px;

  border: none;
  border-radius: 18px;

  background-color: #A1ED9D;
  color: #244f22;

  font-size: 22px;
  font-weight: 700;

  cursor: pointer;
`;
