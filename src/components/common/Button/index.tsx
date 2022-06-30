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
  marginBottom?: string;
}

const Button = ({
  text,
  onClick,
  image,
  color,
  backgroundColor,
  fontWeight,
  marginBottom,
}: Props) => {
  return (
    <Container
      onClick={onClick}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        fontSize: "18px",
        fontWeight: fontWeight,
        marginBottom: marginBottom
      }}
    >
      {image ? (
        <Image
          src={image}
          width="22px"
          height="22px"
          style={{ marginRight: "2px" }}
        />
      ) : (
        ""
      )}
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;

const Container = styled.div`
  font-family: Pretendard;
  text-align: center;
  border-radius: 19px;
  width: fit-content;
  padding: 7px 16px 8px 12px;
  cursor: pointer;
`;

const Text = styled.span`
  position: relative;
  top: -3px;
`;
