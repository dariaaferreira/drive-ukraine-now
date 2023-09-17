import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  display: flex;
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-family: ManropeThin;
`;

export const SubscribeRow = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 1187px
`;

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;  
  max-width: 1187px; 
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const ContactLink = styled.a`
  color: rgb(255 255 255 / 60%);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
  margin-left: 5px;

  &:hover {
    color: #2196F3;
  }
`;

export const EmailContact = styled.a`
  font-size: 16px;
  margin-left: 5px;
  color: rgb(255 255 255 / 60%);

  &:hover {
    color: #2196F3;
  }
`;

export const Address = styled.p`
  color: rgb(255 255 255 / 60%);
  font-size: 16px;
  margin-left: 5px;
`;

export const GoogleMapsLink = styled.a`
  color: rgb(255 255 255 / 60%);
  text-decoration: none;
  font-size: 16px;
  margin-left: 5px;
  transition: color 0.3s;

  &:hover {
    color: #2196F3;
  }
`;

export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const SubscribeTitle = styled.p`
  color: rgb(255 255 255 / 60%);
  font-size: 16px;
  margin-left: 5px;
`;

export const SubscribeForm = styled.form`
  display: flex;
  align-items: baseline;
  margin-top: 20px;
`;

export const SubscribeInput = styled.input`
  font-size: 16px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 250px;
`;

export const SubscribeButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 140px;
  height: 42px;
  margin-left: 10px;
  background-color: rgba(52, 112, 255, 1);
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: ManropeThin;

  &:hover {
    background-color: #0056b3;
  }
`;