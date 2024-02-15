import { useNavigate } from "react-router-dom";
import ApiConnector from "../../../client/ApiConnector";
import Card from "../components/Card";
import { useEffect, useState } from "react";

interface OfferProps {
  offerId: string;
  title: string;
  description: string;
  salary: number;
}

interface OfferList {
  items: OfferProps[];
}

const HorizontalListWithCards = () => {
  const api = new ApiConnector();
  const [offerList, setOfferList] = useState<OfferProps[]>([]);
  const [isDataFetched = false, setDataFetched] = useState<boolean>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get(`/offer/recent/5`);
        console.log("Data received:", result);
        if (result) {
          const offerList: OfferList = { items: result };
          setOfferList(offerList.items);
          setDataFetched(true);
        }
      } catch (error) {
        console.error("GET Error:", error);
      }
    };
    if (!isDataFetched) {
      fetchData();
    }
  }, [api, isDataFetched]);

  const navigate = useNavigate();

  const handleClick = (offerId: string) => {
    navigate(`/offerId/` + encodeURIComponent(offerId));
  };

  return (
    <div>
      <strong>Recently added:</strong>
      <div className="scrolling-wrapper">
        {offerList.map((offer, i) => (
          <div
            className="card"
            key={i}
            onClick={() => handleClick(offer.offerId)}
            onMouseEnter={(e) => {
              (e.target as HTMLDivElement).style.cursor = "pointer";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLDivElement).style.cursor = "auto";
            }}
          >
            <Card item={offer} />
          </div>
        ))}
      </div>
      {/* <div className="container" style={{ paddingTop: 50 }}>
        <strong>Recently added:</strong>
        <div className="navbar">
          {offerList.map((offer, i) => (
            <div className="" key={i}>
              <Card item={offer} />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default HorizontalListWithCards;
