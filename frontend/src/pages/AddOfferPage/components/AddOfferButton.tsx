import { useNavigate } from "react-router-dom";
import ApiConnector from "./../../../client/ApiConnector";

interface Props {
  title: string;
  description: string;
  salary: number;
}

const AddOfferButton = ({ title, description, salary }: Props) => {
  const navigate = useNavigate();
  const api = new ApiConnector();

  const handleClick = async () => {
    try {
      const postBody = { title, description, salary };
      const offerId = await api.post("/offer", postBody);
      if (offerId) {
        navigate(`/offer/newOfferAdded/${offerId}`);
      }
    } catch (error) {
      console.error("POST Error:", error);
      throw error;
    }
  };

  return (
    <div>
      <div>
        <a
          className="btn btn-dark addOdderButton"
          role="button"
          aria-pressed="true"
          onClick={handleClick}
        >
          Add offer
        </a>
      </div>
    </div>
  );
};

export default AddOfferButton;