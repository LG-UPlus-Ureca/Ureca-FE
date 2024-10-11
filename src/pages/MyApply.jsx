import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex, Text } from '@components/global';
import { getApplyInfo } from '@/apis/getApplyApi';
import { useLocation } from 'react-router-dom';

const MyApply = () => {
  const [applyInfo, setApplyInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const { name, email, number } = location.state || {};

  useEffect(() => {
    const fetchApplyInfo = async () => {
      setLoading(true);
      try {
        const data = await getApplyInfo({ name, email, number });
        setApplyInfo(data);
      } catch (error) {
        console.error('Error fetching apply info:', error);
        alert('지원한 적 없는 정보입니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchApplyInfo();
  }, [name, email, number]);

  if (loading) {
    return <Text>로딩 중...</Text>;
  }
  if (!applyInfo) {
    return <Text>지원 정보를 찾을 수 없습니다.</Text>;
  }

  const activities = JSON.parse(applyInfo.activity || '[]');
  const awards = JSON.parse(applyInfo.awards || '[]');
  const careers = JSON.parse(applyInfo.career || '[]');
  const certificates = JSON.parse(applyInfo.certificate || '[]');
  const questions = JSON.parse(applyInfo.questions || '[]');

  const questionList = [
    '1. K-Digital Training 과정을 수강하신 적이 있습니까?',
    '2. 본 과정은 하루 8시간, 24.06.10 - 24.12.24까지 진행됩니다. 참여하는데 일정 상의 문제가 없습니까?',
    "3. 본 과정은 '국민 평생 직업 능력개발법' 에 의거, 국내 거주자를 대상으로 진행되며 해외 거주자 확인 시 강제 퇴소 및 불이익이 있을 수 있습니다.",
    '4. 본 과정은 취업을 준비하는 고등학교 및 대학교 졸업(예정)자, 재학생의 경우 졸업까지 수업 연한이 2년 이내인 휴학생의 경우 지원 가능합니다.',
    '5. 서류 합격 후 SW 적성진단 진행 시 부정행위 방지를 위해 웹캠이나 노트북 내장 카메라를 소지해야 합니다. 사전에 준비 부탁드립니다.',
    '6. 본 교육을 수강하기 위해 교육 시작 7일 전까지 내일배움카드가 필수적으로 발급되어야 합니다.',
    '7. 위 내용을 모두 확인하였으며, 사실과 다른 경우 수강이 취소될 수 있습니다.',
  ];

  return (
    <MainContainer>
      <SectionTitle>지원 정보</SectionTitle>
      <Flex direction="column" gap="10px">
        <Text>
          <strong>성명:</strong> {applyInfo.name}
        </Text>
        <Text>
          <strong>이메일:</strong> {applyInfo.email}
        </Text>
        <Text>
          <strong>전화번호:</strong> {applyInfo.phone_number}
        </Text>
        <Text>
          <strong>주소:</strong> {applyInfo.address}
        </Text>
        <Text>
          <strong>생년월일:</strong> {applyInfo.birth}
        </Text>
        <Text>
          <strong>성별:</strong> {applyInfo.gender ? '남성' : '여성'}
        </Text>
        <Text>
          <strong>대학교:</strong> {applyInfo.university}
        </Text>
        <Text>
          <strong>전공:</strong> {applyInfo.universitye_major}
        </Text>
        <Text>
          <strong>학점:</strong> {applyInfo.universitye_score} /{' '}
          {applyInfo.universitye_score_list}
        </Text>
        <Text>
          <strong>고등학교:</strong> {applyInfo.high_school}
        </Text>
        <Text>
          <strong>고등학교 상태:</strong> {applyInfo.high_school_status}
        </Text>
        <Text>
          <strong>응급 연락처:</strong> {applyInfo.emergency_phone_number}
        </Text>
        <Text>
          <strong>응급 연락처 관계:</strong>{' '}
          {applyInfo.emergency_phone_number_relationship}
        </Text>

        {/* 활동 (Activity) 정보 */}
        <SectionTitle>활동 정보</SectionTitle>
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <Flex key={index} direction="column" gap="5px">
              <Text>{activity.inputs[0]?.value || '-'}</Text> {/* 활동 내용 */}
              <Text>{activity.inputs[1]?.value || '-'}</Text> {/* 수상내역 */}
              <Text>{activity.inputs[2]?.value || '-'}</Text> {/* 시작 날짜 */}
              <Text>{activity.inputs[3]?.value || '-'}</Text> {/* 종료 날짜 */}
            </Flex>
          ))
        ) : (
          <Text>-</Text>
        )}

        {/* 수상 (Awards) 정보 */}
        <SectionTitle>수상 내역</SectionTitle>
        {awards.length > 0 ? (
          awards.map((award, index) => (
            <Flex key={index} direction="column" gap="5px">
              <Text>{award.inputs[0]?.value || '-'}</Text>
              <Text>{award.inputs[1]?.value || '-'}</Text>
            </Flex>
          ))
        ) : (
          <Text>-</Text>
        )}

        {/* 경력 (Career) 정보 */}
        <SectionTitle>경력 정보</SectionTitle>
        {careers.length > 0 ? (
          careers.map((career, index) => (
            <Flex key={index} direction="column" gap="5px">
              <Text>{career.inputs[0]?.value || '-'}</Text>
              <Text>{career.inputs[1]?.value || '-'}</Text>
            </Flex>
          ))
        ) : (
          <Text>-</Text>
        )}

        {/* 자격증 (Certificate) 정보 */}
        <SectionTitle>자격증 정보</SectionTitle>
        {certificates.length > 0 ? (
          certificates.map((certificate, index) => (
            <Flex key={index} direction="column" gap="5px">
              <Text>{certificate.inputs[0]?.value || '-'}</Text>
              <Text>{certificate.inputs[1]?.value || '-'}</Text>
            </Flex>
          ))
        ) : (
          <Text>-</Text>
        )}

        {/* 추가 질문 (Questions) 정보 */}
        <SectionTitle>질문 응답</SectionTitle>

        {questions.length > 0 ? (
          questions.map((answer, index) => (
            <Text key={index}>
              {questionList[index]}{' '}
              {answer === 'true'
                ? '예'
                : answer === 'false'
                ? '아니오'
                : '확인했습니다.'}
            </Text>
          ))
        ) : (
          <Text>-</Text>
        )}
      </Flex>
    </MainContainer>
  );
};

export default MyApply;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 132px 0 50px 0;

  @media (max-width: 1023px) {
    padding: 62px 0 0 0;
  }
`;

const SectionTitle = styled(Text)`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;
