import { Theme, useTheme } from "@emotion/react";
import toast from "react-hot-toast";

export const SuccessToast = (message: string) => {
  const theme: Theme = useTheme();
  toast(message, {
    style: {
      borderRadius: "8px",
      maxWidth: "516px",
      height: "43px",
      fontSize: "16px",
      fontFamily: "Pretendard",
      fontWeight: "400",
      background: theme.colors.ToastSuccess,
      color: "#FFFFFF",
    },
  });
};

export const ErrorToast = (message: string) => {
  const theme: Theme = useTheme();
  toast(message, {
    style: {
      borderRadius: "8px",
      maxWidth: "516px",
      height: "43px",
      fontSize: "16px",
      fontFamily: "Pretendard",
      fontWeight: "400",
      background: theme.colors.ToastError,
      color: "#FFFFFF",
    },
  });
};
