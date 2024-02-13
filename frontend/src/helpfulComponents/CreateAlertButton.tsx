import { ReactNode } from "react";

interface Props {
  color?: "primary" | "warning" | "danger" | "info" | "dark";
  children: ReactNode
  alertVisable: (item: boolean) => void;
  buttonVisable: (item: boolean) => void;
}

const CreateAlertButton = ({color = 'warning', alertVisable, buttonVisable, children }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => {
        alertVisable(true);
        buttonVisable(false)
      }}
    >
      {children}
    </button>
  );
};

export default CreateAlertButton;
