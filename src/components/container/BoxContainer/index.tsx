import { Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Box from "src/components/common/Box";
import { theme } from "src/core/styles/theme";
import ScreenCapture from "src/components/ScreenCapture";
import { nowDate } from "src/core/utils/getTime";
import { BoxValue } from "src/core/store/BoxData";

const BoxContainer = () => {
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
      <ScreenCapture imageName={`Size_Test__${nowDate}`} />
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
  color: ${theme.colors.BGray22};
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 18px;
  color: ${theme.colors.BGray30};
  line-height: 26px;
  margin-bottom: 26px;
`;

const BoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
