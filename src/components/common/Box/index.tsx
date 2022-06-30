import { Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  title: string;
  width?: string;
  backgroundColor?: string;
}

const Box = ({ title, width, backgroundColor }: Props) => {
  const theme: Theme = useTheme();

  return (
    <Warpper>
      <Title color={theme.colors.BGray56}>{title}</Title>
      <BoxContainer
        backgroundColor={backgroundColor}
        style={{ width: width }}
      />
    </Warpper>
  );
};

export default Box;

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const Title = styled.div<{ color: string }>`
  margin-left: 10px;
  margin-bottom: 4px;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

const BoxContainer = styled.div<{ backgroundColor?: string }>`
  border-radius: 15px;
  height: 30px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#000000"};
`;
