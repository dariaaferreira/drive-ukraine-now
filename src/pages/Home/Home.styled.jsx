import styled from '@emotion/styled';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 40px auto;
  padding: 20px;
`;

export const HeaderTitle = styled.h1`
  font-size: 36px;
  color: #333;
  font-family: ManropeSemiBold;
`;

export const Span = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const MainSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1187px;
  margin: 20px auto;
  padding: 20px;
  gap: 30px; 
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  min-width: 300px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: #333;
  font-family: ManropeSemiBold;
  margin-bottom: 10px;
`;

export const SectionText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #666;
`;

export const FleetSection = styled.ul`
  list-style: none;
  font-size: 16px;
  color: #666;
  margin: 5px 0;
`;

export const FleetItem = styled.li`
  list-style: none;
  font-size: 16px;
  color: #666;
  margin: 5px 0;
`;

export const LearnMoreButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-bottom: 20px;
  font-family: ManropeThin;
  
  &:hover {
    background-color: #0056b3;
  }
`;