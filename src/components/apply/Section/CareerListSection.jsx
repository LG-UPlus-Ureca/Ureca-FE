import React, { useState } from 'react';
import styled from '@emotion/styled';

import { AiOutlinePlus } from 'react-icons/ai';
import { colors } from '../../../styles/colors';
import { TextAreaField, TextField, DropdownField } from '../ui/InputFieldUi';
import { options } from '../../../assets/data/selectData';

function CareerListSection({ header, listItems, addListItem }) {
  const [test, setTest] = useState('');

  return (
    <CareerListContainer>
      {/* 헤더 영역 */}
      <CareerListHeader>
        <CareerListHeaderTitle>{header}</CareerListHeaderTitle>
        <CareerListHeaderAddBtn onClick={addListItem}>
          <AiOutlinePlus />
          <span>추가</span>
        </CareerListHeaderAddBtn>
      </CareerListHeader>

      {/* 콘텐츠 영역 */}

      <CareerListContent>
        {listItems.map((item, itemIdx) => (
          <CareerListItemContainer key={item.id}>
            <div style={{ display: 'flex', gap: '2.6rem' }}>
              {item.inputs.slice(0, 2).map((input, idx) => {
                return (
                  <div key={idx} style={{ width: '100%' }}>
                    {input.type === 'text' && (
                      <TextField
                        label={input.label}
                        placeholder={input.placeholder}
                      />
                    )}
                    {input.type === 'select' && (
                      <DropdownField
                        label={input.label}
                        data={options.careerType}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: '2.6rem' }}>
              <div style={{ width: '100%' }}>
                <TextField
                  label={item.inputs[2].label}
                  placeholder={item.inputs[2].placeholder}
                />
              </div>

              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <label
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    lineHeight: '150%',
                    color: '#232527',
                  }}
                >
                  업무기간
                </label>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {item.inputs.slice(3, 5).map((input, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        <TextField label={input.label} />
                        {idx === 0 && (
                          <span style={{ margin: '0 0.9rem', fontSize: 14 }}>
                            ~
                          </span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <TextAreaField
                maxWidth={'100%'}
                elements={[
                  {
                    message: '담당업무',
                    style: {
                      width: 'calc(100% - 12rem)',
                      wordBreak: 'keep-all',
                    },
                  },
                  {
                    message: `글자수 ${
                      test.length <= 500 ? test.length : '500'
                    } / 500자`,
                    style: {
                      width: '12rem',
                      color: '#888',
                      textAlign: 'end',
                    },
                  },
                ]}
                value={test}
                onChange={(event) => {
                  if (test.length <= 500) setTest(event.target.value);
                  else {
                    setTest(test.slice(0, 500));
                  }
                }}
                placeholder={'귀하의 담당 업무 내용을 입력해주세요.'}
              />

              <CareerListBorderLine />
            </div>
          </CareerListItemContainer>
        ))}
        {/* <CareerListItemContainer>
          <div style={{ display: 'flex', gap: '2.6rem' }}>
            <TextField
              label={'직장명'}
              placeholder={'직장명을 입력해주세요.'}
            />
            <DropdownField label={'직장유형'} data={options.careerType} />
          </div>

          <div style={{ display: 'flex', gap: '2.6rem' }}>
            <TextField label={'직급'} placeholder={'직급을 입력해주세요.'} />
            <TextField label={'업무기간'} />
          </div>

          <div style={{ display: 'flex', gap: '2.6rem' }}>
            
          </div>

          <CareerListBorderLine />
        </CareerListItemContainer> */}
      </CareerListContent>
    </CareerListContainer>
  );
}

const CareerListContainer = styled.div`
  font-family: 'Pretendard', sans-serif;

  & > * {
    box-sizing: border-box;
  }
`;

const CareerListHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1.2rem;
    display: block;
    height: 2px;
    background-color: #888;
    width: 100%;
    border-radius: 1px;
  }
`;

const CareerListHeaderTitle = styled.h6`
  font-size: 18px;
  font-weight: 600;
`;

const CareerListHeaderAddBtn = styled.button`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: ${colors.primaryColor};
  }

  span {
    color: #000;
  }
`;

const CareerListContent = styled.div`
  margin-top: 3.6rem;
`;

const CareerListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const CareerListBorderLine = styled.div`
  height: 0.2rem;
  background-color: #e9ebef;
  width: 100%;
  border-radius: 0.1rem;
  margin: 2.4rem 0;
`;

export default CareerListSection;
