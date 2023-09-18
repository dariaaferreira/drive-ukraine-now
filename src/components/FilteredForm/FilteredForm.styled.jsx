import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  gap: 8px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: rgba(138, 138, 137, 1);
  font-family: ManropeThin;
  padding-left: 5px;
`;

export const InputLeft = styled.input`
  width: 160px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px 0 0 14px;
  padding-left: 20px;

  font-family: ManropeMedium;
  color: rgba(18, 20, 23, 1);
  font-size: 18px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    height: 48px;
    width: 48px;
  }
`;

export const InputRight = styled.input`
  width: 160px;
  height: 48px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  border-radius: 0 14px 14px 0;
  padding-left: 20px;

  font-family: ManropeMedium;
  color: rgba(18, 20, 23, 1);
  font-size: 18px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    height: 48px;
    width: 48px;
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 48px;
  background-color: rgba(52, 112, 255, 1);
  border-radius: 12px;
  padding: 14px 44px;
  color: white;
  margin-top: 20px;

  &:hover, &:focus {
  background-color: rgba(11, 68, 205, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
