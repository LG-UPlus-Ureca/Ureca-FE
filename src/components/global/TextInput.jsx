import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex, Text } from '@components/global';

export const TextInput = ({
  value,
  setValue,
  isError,
  placeholder = '',
  errorText,
  type = 'text',
}) => {
  const onChangeText = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputWrapper>
      <InputContainer isError={isError}>
        <StyledInput
          type={type}
          value={value}
          onChange={onChangeText}
          placeholder={placeholder}
        />
      </InputContainer>
      {isError && <ErrorText>{errorText}</ErrorText>}
    </InputWrapper>
  );
};

const InputWrapper = styled(Flex)`
  position: relative;
  width: 100%;
`;

const InputContainer = styled.div`
  width: 100%;
  border: ${({ isError }) =>
    isError
      ? `1px solid ${colors.primaryColor}`
      : `1px solid ${colors.disabled}`};
  background-color: ${colors.white};
  border-radius: 0.5rem;
  padding: 0.6rem;
`;

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: ${colors.white};
  font-size: 1.125rem;
  color: ${colors.black};
  &::placeholder {
    color: ${colors.disabled};
  }
`;

const ErrorText = styled(Text)`
  font-size: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: absolute;
`;
