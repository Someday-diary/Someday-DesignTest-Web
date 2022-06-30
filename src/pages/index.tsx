import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import BoxContainer from "src/components/BoxContainer";
import Sidebar from "src/components/SideBar";
import { SidebarValue } from "src/core/store";

export default function Home() {
  interface dataType {
    id: number;
    active: boolean;
    text: string;
    selectImage: string;
    notSelectImage: string;
  }
  const sidebarValue: dataType[] = useRecoilValue(SidebarValue);

  return (
    <>
      <Wrapper>
        <Sidebar />
        {sidebarValue.map((value) => {
          switch (value.text) {
            case "Size":
              if (value.active === true) {
                return <BoxContainer />;
              }
            case "Shadow":
              if (value.active === true) {
                return <div>Shadow</div>;
              }
            case "Curve":
              if (value.active === true) {
                return <div>Curve</div>;
              }
            case "Move":
              if (value.active === true) {
                return <div>Move</div>;
              }
            case "Color":
              if (value.active === true) {
                return <div>Color</div>;
              }
            case "Text":
              if (value.active === true) {
                return <div>Text</div>;
              }
            case "Margin":
              if (value.active === true) {
                return <div>Margin</div>;
              }
          }
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  margin: auto;
  padding-top: 141px;
`;
