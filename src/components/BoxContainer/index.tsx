import { Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Box from "src/components/common/Box";
import ScreenCapture from "../ScreenCapture";

const BoxContainer = () => {
  const theme: Theme = useTheme();

  const BoxValue = [
    {
      id: 1,
      title: "150 × 30",
      width: "150px",
      backgroundColor: `${theme.colors.BGray90}`,
    },
    {
      id: 2,
      title: "150 × 30",
      width: "150px",
      backgroundColor: `${theme.colors.BGray70}`,
    },
    {
      id: 3,
      title: "150 × 30",
      width: "150px",
      backgroundColor: `${theme.colors.BGray94}`,
    },
    {
      id: 4,
      title: "150 × 30",
      width: "150px",
      backgroundColor: `${theme.colors.BGray70}`,
    },
    {
      id: 5,
      title: "65 × 30",
      width: "65px",
      backgroundColor: `${theme.colors.BGray90}`,
    },
    {
      id: 6,
      title: "235 × 30",
      width: "235px",
      backgroundColor: `${theme.colors.BGray56}`,
    },
    {
      id: 7,
      title: "235 × 30",
      width: "235px",
      backgroundColor: `${theme.colors.BGray82}`,
    },
    {
      id: 8,
      title: "235 × 30",
      width: "235px",
      backgroundColor: `${theme.colors.BGray56}`,
    },
    {
      id: 9,
      title: "320 × 30",
      width: "320px",
      backgroundColor: `${theme.colors.BGray40}`,
    },
    {
      id: 10,
      title: "320 × 30",
      width: "320px",
      backgroundColor: `${theme.colors.BGray30}`,
    },
    {
      id: 11,
      title: "65 × 30",
      width: "65px",
      backgroundColor: `${theme.colors.BGray40}`,
    },
    {
      id: 12,
      title: "405 × 30",
      width: "150px",
      backgroundColor: `${theme.colors.BGray22}`,
    },
    {
      id: 13,
      title: "320 × 30",
      width: "150px",
      backgroundColor: `${theme.colors.BGray13}`,
    },
    {
      id: 14,
      title: "235 × 30",
      width: "235px",
      backgroundColor: `${theme.colors.BGray30}`,
    },
    {
      id: 15,
      title: "490 × 30",
      width: "490px",
      backgroundColor: `${theme.colors.BGray40}`,
    },
    {
      id: 16,
      title: "575 × 30",
      width: "575px",
      backgroundColor: `${theme.colors.BGray56}`,
    },
    {
      id: 17,
      title: "150 × 30",
      width: "150px",
      backgroundColor: `${theme.colors.BGray82}`,
    },
    {
      id: 18,
      title: "65 × 30",
      width: "65px",
      backgroundColor: `${theme.colors.BGray70}`,
    },
    {
      id: 19,
      title: "660 × 30",
      width: "660px",
      backgroundColor: `${theme.colors.BGray90}`,
    },
    {
      id: 20,
      title: "745 × 30",
      width: "745px",
      backgroundColor: `${theme.colors.BGray97}`,
    },
  ];

  return (
    <Container>
      <Title>너비와 높이의 단위</Title>
      <SubTitle>
        피그마로 제작된 디자인과 작동하는 화면이 동일한 크기로 구현되는지
        확인하기 위한 테스트입니다.
        <br />- Width/Height를 나타내는 단위가 일치하는지 확인합니다.
      </SubTitle>
      <BoxWrapper>
        {BoxValue.map((value) => {
          return (
            <Box
              key={value.id}
              title={value.title}
              width={value.width}
              backgroundColor={value.backgroundColor}
            />
          );
        })}
      </BoxWrapper>
      <ScreenCapture />
    </Container>
  );
};

export default BoxContainer;

const Container = styled.div`
  width: 745px;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 26px;
`;

const BoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
