import styled from "@emotion/styled";

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1184px;
  margin: 0 auto;
  margin-bottom: 50px;
  min-height: 65vh;

`;

export const ResultMessage = styled.p`
  margin-top: 50px;
  font-size: 24px;
  font-family: ManropeRegular;
  color: rgba(138, 138, 137, 1);
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
