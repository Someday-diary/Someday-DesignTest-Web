import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import BoxContainer from "src/components/container/BoxContainer";
import ColorContainer from "src/components/container/ColorContainer";
import CurveContainer from "src/components/container/CurveContainer";
import MarginContainer from "src/components/container/MarginContainer";
import MoveContainer from "src/components/container/MoveContainer";
import ShadowContainer from "src/components/container/ShadowContainer";
import TextContainer from "src/components/container/TextContainer";
import Sidebar from "src/components/SideBar";
import { SidebarValue } from "src/core/store";

interface dataType {
  id: number;
  active: boolean;
  text: string;
  selectImage: string;
  notSelectImage: string;
}

interface ComponentsMapType {
  Size: () => JSX.Element;
  Shadow: () => JSX.Element;
  Curve: () => JSX.Element;
  Move: () => JSX.Element;
  Color: () => JSX.Element;
  Text: () => JSX.Element;
  Margin: () => JSX.Element;
  [propsName: string]: any;
}

export default function Home() {
  const sidebarValue: dataType[] = useRecoilValue(SidebarValue);
  const ComponentsMap: ComponentsMapType = {
    Size: BoxContainer,
    Shadow: ShadowContainer,
    Curve: CurveContainer,
    Move: MoveContainer,
    Color: ColorContainer,
    Text: TextContainer,
    Margin: MarginContainer,
  };

  return (
    <>
      <Wrapper>
        <Sidebar />
        {sidebarValue.map((value) => {
          const Component: () => JSX.Element = ComponentsMap[value.text];
          if (value.active === true) {
            return <Component />;
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
