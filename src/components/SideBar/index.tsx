import { Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { SidebarValue } from "src/core/store";
import Button from "../common/Button";

const Sidebar = () => {
  const theme: Theme = useTheme();

  const [sidebarData, setSidebarData] = useRecoilState(SidebarValue);

  interface dataType {
    id: number;
    active: boolean;
    text: string;
    selectImage: string;
    notSelectImage: string;
  }

  const addActiveClass = (index: number) => {
    let copyData: dataType[] = [...sidebarData].sort();
    for (let i = 0; i < copyData.length; i += 1) {
      copyData[i] = { ...copyData[i], active: false };
    }
    copyData[index - 1] = { ...copyData[index - 1], active: true };
    setSidebarData(copyData);
  };

  return (
    <Container>
      {sidebarData.map((data: any) => {
        return (
          <Button
            key={data.id}
            text={data.text}
            image={data.active ? data.selectImage : data.notSelectImage}
            color={data.active ? theme.colors.BGray13 : theme.colors.BGray56}
            backgroundColor={
              data.active ? theme.colors.BGray94 : theme.colors.White
            }
            onClick={() => addActiveClass(data.id)}
            marginLeft="2px"
            marginBottom="20px"
            padding="7px 16px 8px 12px"
          />
        );
      })}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  margin-right: 105px;
`;
