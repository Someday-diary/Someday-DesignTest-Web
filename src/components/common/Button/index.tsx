/* eslint-disable jsx-a11y/alt-text */
import styled from "@emotion/styled";
import Image from "next/image";

interface Props {
  text: string;
  onClick?: () => void;
  image?: string;
  color?: string;
  backgroundColor?: string;
  fontWeight?: string;
  marginLeft?: string;
  marginBottom?: string;
  padding?: string;
}

const Button = ({
  text,
  onClick,
  image,
  color,
  backgroundColor,
  fontWeight,
  marginLeft,
  marginBottom,
  padding,
}: Props) => {
  return (
    <Container
      onClick={onClick}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        fontSize: "18px",
        fontWeight: fontWeight,
        marginBottom: marginBottom,
        padding: padding,
      }}
    >
      {image ? <Image src={image} width="22px" height="22px" /> : ""}
      <Text marginLeft={marginLeft}>{text}</Text>
    </Container>
  );
};

export default Button;

const Container = styled.div`
  font-family: Pretendard;
  text-align: center;
  border-radius: 19px;
  width: fit-content;
  cursor: pointer;
`;

const Text = styled.span<{ marginLeft?: string }>`
  position: relative;
  top: -3px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "")};
`;
