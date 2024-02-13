// interface Props {
//   click: (item: boolean) => void;
// }

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | 'warning' | 'danger' | 'info' | 'dark';
  onClick: () => void;
}

const SubmitButton = ({ children, color = 'warning', onClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
