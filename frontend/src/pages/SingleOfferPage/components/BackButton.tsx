import { useNavigate } from "react-router-dom";

interface Props {
  color?: string;
}

const BackButton = ({ color = "success" }: Props) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="">
        <a
          className={"addOdderButton btn btn-" + color}
          role="button"
          aria-pressed="true"
          onClick={handleGoBack}
        >
          &lt;&lt;&lt; Return
        </a>
      </div>
    </div>
  );
};

export default BackButton;
