import styled from "@emotion/styled";
import html2canvas from "html2canvas";
import Button from "../common/Button";

const ScreenCapture = () => {
  const onCapture = () => {
    const getElement: HTMLElement = document.body;
    html2canvas(getElement).then((canvas) => {
      onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
    });
  };

  const onSaveAs = (uri: string, fileName: string) => {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = fileName;
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <ButtonWrapper>
        <Button
          text="화면 캡쳐하기"
          fontWeight="600"
          image="/assets/Capture.png"
          onClick={() => onCapture()}
        />
      </ButtonWrapper>
    </Container>
  );
};

export default ScreenCapture;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  margin-top: 24px;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
`;
