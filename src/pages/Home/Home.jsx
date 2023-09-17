import React from 'react';
import {
  HomePageContainer,
  HeaderTitle,
  MainSection,
  Section,
  SectionTitle,
  SectionText,
  FleetSection,
  FleetItem,
  LearnMoreButton,
  Span,
} from './Home.styled';
import { useNavigate } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import CarSlider from 'components/CarSlider/CarSlider';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/catalog');
  };

  return (
    <>
      <HomePageContainer>
        <HeaderTitle>
          Welcome to <Span>DriveUkraineNow</Span>!
        </HeaderTitle>
        <MainSection>
          <Section>
            <FleetSection>
              <SectionTitle>
                <Span>Explore</Span> Our Diverse Fleet
              </SectionTitle>
              <FleetItem>
                - We offer a selection of comfortable sedans for your travel needs.
              </FleetItem>
              <FleetItem>
                - If you need more space, consider our SUVs for a spacious and enjoyable journey.
              </FleetItem>
              <FleetItem>
                - Experience luxury with our premium collection of luxury cars.
              </FleetItem>
              <FleetItem>
                - For group travel or extra room, check out our reliable vans.
              </FleetItem>
              <FleetItem>
                - Discover our eco-friendly hybrid cars.
              </FleetItem>
            </FleetSection>
          </Section>

          <Section>
            <SectionTitle>About <Span>Us</Span></SectionTitle>
            <SectionText>
              <Span>DriveUkraineNow</Span> is your trusted partner for car rental services
              in Ukraine. We offer a wide range of vehicles to meet your
              transportation needs while exploring the beautiful country of
              Ukraine. With a commitment to safety and quality, we strive to provide
              you with a seamless travel experience that exceeds your expectations.
              Explore Ukraine with confidence, knowing that <Span>DriveUkraineNow</Span> is here
              to make your journey memorable and hassle-free.
            </SectionText>
          </Section>

          <Section>
            <SectionTitle>Why <Span>Choose</Span> Us</SectionTitle>
            <FleetSection>
              <FleetItem>- Wide selection of vehicles</FleetItem>
              <FleetItem>- Competitive prices</FleetItem>
              <FleetItem>- Convenient locations</FleetItem>
              <FleetItem>- Excellent customer service</FleetItem>
              <FleetItem>- Easy booking process</FleetItem>
              <FleetItem>- Flexible rental options</FleetItem>
              <FleetItem>- 24/7 roadside assistance</FleetItem>
              <FleetItem>- Clean and well-maintained vehicles</FleetItem>
            </FleetSection>
          </Section>

          <Section>
            <SectionTitle><Span>Learn</Span> More</SectionTitle>
            <SectionText>
              Explore the breathtaking landscapes, historic sites, and vibrant
              cities of Ukraine with DriveUkraineNow. Discover the freedom of
              traveling on your terms with our reliable and affordable car
              rental services. Immerse yourself in the rich culture, indulge in
              traditional cuisine, and create lasting memories as you embark on
              a journey through Ukraine's diverse regions. Whether you're
              planning a solo adventure or a family vacation, DriveUkraineNow is
              your trusted companion for an unforgettable experience.
            </SectionText>

            <CarSlider/>

            <LearnMoreButton onClick={handleExploreClick}>Explore</LearnMoreButton>
          </Section>
        </MainSection>
      </HomePageContainer>
      <Footer />
    </>
  );
};

export default Home;
