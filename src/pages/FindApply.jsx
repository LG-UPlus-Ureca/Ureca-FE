import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex, Text, TextInput } from '@components/global';
import { Button } from '@components/global';

const FindApply = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [numInput, setNumInput] = useState('');

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/my-apply', {
      state: { name: nameInput, email: emailInput, number: numInput },
    });
  };

  return (
    <MainContainer>
      <Title color={colors.primaryColor} variant="h2" lineHeight="120%">
        지원 확인하기
      </Title>
      <SeperateLine />
      <InputList direction="column" webGap="1.2">
        <InputLine>
          <InputType variant="h6">성명</InputType>
          <TextInput
            value={nameInput}
            setValue={setNameInput}
            placeholder={'김유플'}
          />
        </InputLine>
        <SeperateInput />
        <InputLine>
          <InputType variant="h6">이메일</InputType>
          <TextInput
            value={emailInput}
            setValue={setEmailInput}
            placeholder={'ureca@uplus.com'}
          />
        </InputLine>
        <SeperateInput />
        <InputLine>
          <InputType variant="h6">전화번호</InputType>
          <TextInput
            value={numInput}
            setValue={setNumInput}
            placeholder={'010-1234-5678'}
          />
        </InputLine>
      </InputList>
      <SeperateLine />
      <Button
        bg={colors.primaryColor}
        fontColor={colors.white}
        hoverBg={'#BC1773'}
        fontSize={'1.2rem'}
        width="12rem"
        height="2.8rem"
        onClick={handleLogin}
      >
        확인하기
      </Button>
    </MainContainer>
  );
};

export default FindApply;

const MainContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;

  padding: 150px 100px;

  @media (max-width: 1023px) {
    padding: 62px 0 0 0;
  }
`;

const InputList = styled(Flex)`
  margin: 3.5rem;
  width: 700px;
`;

const Title = styled(Text)``;

const InputType = styled(Text)`
  width: 100px;
`;

const InputLine = styled(Flex)`
  justify-content: space-between;
`;

const SeperateLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.disabled};
  margin: 1.5rem 0;
`;

const SeperateInput = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
`;
