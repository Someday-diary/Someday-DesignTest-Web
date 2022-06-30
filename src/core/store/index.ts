import { atom } from "recoil";

// this folder is recoil store folder.
export const SidebarValue = atom({
  key: "SidebarValue",
  default: [
    {
      id: 1,
      active: true,
      text: "Size",
      selectImage: "/assets/SelectedSize.png",
      notSelectImage: "/assets/NotSelectedSize.png",
    },
    {
      id: 2,
      active: false,
      text: "Shadow",
      selectImage: "/assets/SelectedShadow.png",
      notSelectImage: "/assets/NotSelectedShadow.png",
    },
    {
      id: 3,
      active: false,
      text: "Curve",
      selectImage: "/assets/SelectedCurve.png",
      notSelectImage: "/assets/NotSelectedCurve.png",
    },
    {
      id: 4,
      active: false,
      text: "Move",
      selectImage: "/assets/SelectedMove.png",
      notSelectImage: "/assets/NotSelectedMove.png",
    },
    {
      id: 5,
      active: false,
      text: "Color",
      selectImage: "/assets/SelectedColor.png",
      notSelectImage: "/assets/NotSelectedColor.png",
    },
    {
      id: 6,
      active: false,
      text: "Text",
      selectImage: "/assets/SelectedText.png",
      notSelectImage: "/assets/NotSelectedText.png",
    },
    {
      id: 7,
      active: false,
      text: "Margin",
      selectImage: "/assets/SelectedMargin.png",
      notSelectImage: "/assets/NotSelectedMargin.png",
    },
  ],
});
