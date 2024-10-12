import { useEffect, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex } from '@components/global/Flex';
import Subheader from '@components/home/SubHeader';
import InfoList from '@components/home/InfoList';
import { useScroll } from '@assets/context/ScrollContext';

//section 목록
import Goal from '@components/home/Goal';
import Education from '@components/home/Education';
import Benefit from '@components/home/Benefit';
import IntroPJT from '@components/home/IntroPJT';
import Order from '@components/home/Order';
import FAQs from '@components/home/FAQs';

const Home = () => {
  const { sectionRefs } = useScroll();
  const [isVisible, setIsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            setIsVisible((prev) => {
              const updatedVisibility = [...prev];
              updatedVisibility[index] = true;
              return updatedVisibility;
            });
          }
        });
      },
      { threshold: 0.5 },
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sectionRefs]);

  return (
    <>
      <MainContainer>
        <Subheader />
        <InfoList />
        <SectionList direction="column">
          <Section
            ref={(el) => (sectionRefs.current[0] = el)}
            isVisible={isVisible[0]}
          >
            <Goal />
          </Section>

          <Section ref={(el) => (sectionRefs.current[1] = el)} isVisible={true}>
            <Flex direction="column">
              <Benefit />
              <IntroPJT />
            </Flex>
          </Section>

          <Section
            ref={(el) => (sectionRefs.current[2] = el)}
            isVisible={isVisible[2]}
          >
            <Education />
          </Section>

          <Section
            ref={(el) => (sectionRefs.current[3] = el)}
            isVisible={isVisible[3]}
          >
            <Order />
          </Section>

          <Section
            ref={(el) => (sectionRefs.current[4] = el)}
            isVisible={isVisible[4]}
          >
            <FAQs />
          </Section>
        </SectionList>
      </MainContainer>
    </>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  background: linear-gradient(
      180deg,
      rgba(196, 126, 126, 0) 9.63%,
      rgba(226, 0, 126, 0.06) 75.6%,
      rgba(230, 0, 126, 0.1) 100%
    ),
    ${colors.background};

  padding: 72px 0 0 0;

  @media (max-width: 1023px) {
    padding: 62px 0 0 0;
  }
`;

const SectionList = styled(Flex)`
  width: 100%;
  margin-bottom: 8rem;
`;

const fadeInUp = keyframes`
from {
  opacity: 0;
  transform: translateY(120px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

const Section = styled.div`
  opacity: 0;
  /* transform: translateY(60px); */
  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${fadeInUp} 0.6s ease-out forwards
        `
      : 'none'};
`;
