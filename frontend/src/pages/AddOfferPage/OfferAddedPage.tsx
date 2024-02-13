import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Offer from "../SingleOfferPage/components/Offer";
import Alert from "./components/Alert";
import ApiConnector from "./../../client/ApiConnector";

interface OfferProps {
  offerId: string;
  title: string;
  description: string;
  salary: number;
}

const OfferAddedPage = () => {
  const [offer, setOffer] = useState<OfferProps | null>(null);
  const [prevOfferId, setPrevOfferId] = useState<string | null>(null);
  const { offerId } = useParams<{ offerId: string }>();
  const api = new ApiConnector();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get(`/offer/${offerId}`);
        console.log("Data received:", result);
        if (result) {
          const offer: OfferProps = {
            offerId: result.offerId,
            title: result.title,
            description: result.description,
            salary: result.salary,
          };
          setOffer(offer);
        }
      } catch (error) {
        console.error("GET Error:", error);
      }
    };

    if (offerId && offerId !== prevOfferId) {
      fetchData();
      setPrevOfferId(offerId);
    }
  }, [api, offerId, offer]);

  return (
    <div className="container">
      {offer ? <Offer item={offer} /> : <p>Loading...</p>}
      <Alert></Alert>
    </div>
  );
};

export default OfferAddedPage;
