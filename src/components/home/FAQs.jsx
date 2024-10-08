import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import Section from '@components/home/Section';
import { Flex, Text } from '@components/global';
import { Button } from '@components/global/Button';
import FAQList from './FAQList';

const FAQs = () => {
  const navigate = useNavigate();

  const handleFAQBtnClick = () => {
    navigate('/FAQ');
  };

  return (
    <Section
      title="자주 묻는 질문"
      expl="궁금한 점이 있으신가요?"
      subexpl={
        '자주 묻는 질문은 아래의 글과 링크를 확인해주시고\n문의 사항이 있다면 카카오톡으로 문의해주세요.'
      }
    >
      <FAQContainer direction="column" mobileGap="0.75">
        <FAQList listNum={5} FAQColor={colors.white} />
      </FAQContainer>

      <Button
        width="18rem"
        height="3.25rem"
        bgi={colors.glass}
        bg={colors.glass}
        hbgi={colors.glassHover}
        hoverBg={colors.glass}
        borderRadius="2rem"
        onClick={handleFAQBtnClick}
      >
        <Text color={colors.white} variant="h4" mobileTypo="h6">
          더 많은 질문 보기 {'>'}
        </Text>
      </Button>
    </Section>
  );
};

export default FAQs;

const FAQContainer = styled(Flex)`
  width: 55vw;
  height: fit-content;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  gap: 0.75rem;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
