import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiConnector from "../../client/ApiConnector";
import NavigationButtons from "./components/NavigationButtons";
import OffersPropose from "./components/OffersPropose";
import BackButton from "../SingleOfferPage/components/BackButton";

interface OfferProps {
  offerId: string;
  title: string;
  salary: number;
}

interface OfferList {
  items: OfferProps[];
}

const Offers = () => {
  const { keys = "default", page = "1" } = useParams();
  const itemsPerPage = 10;
  const api = new ApiConnector();
  const [offerList, setOfferList] = useState<OfferProps[]>([]);
  const [oldKeys, setOldKeys] = useState<string>(``);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get(`/offer?keys=${keys.split(',').join(' ')}`);
        if (result) {
          const offerList: OfferList = { items: result };
          setOfferList(offerList.items);
          console.log("##### result recived")
          setOldKeys(keys)
        }
      } catch (error) {
        console.error("GET Error:", error);
      }
    };
    if (oldKeys!=keys) {
      fetchData();
    }
  }, [api, oldKeys]);

  const startIndex = (parseInt(page) - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOffers = offerList.slice(startIndex, endIndex);

  return (
    <div className="container">
      <ul className="list-group center ">
        <li className="list-group-item active" aria-current="true">
        <h2>Offers</h2>
        </li>
        {offerList.length > 0 && (<li className="list-group-item alignRight fontSizeSmaller">
          {offerList.length} offers was found
        </li>)}
        {offerList.length === 0 && (
          <li className="list-group-item list-group-item-dark center">
          We're sorry, no matching offers were found for your search.
          <BackButton color="info" />
        </li>
        )}  
      </ul>
      <div className="offerMarginTop">
      <OffersPropose currentOffers={currentOffers} />
      </div>
      <NavigationButtons offerListLenght={offerList.length}  endIndex={endIndex} page={parseInt(page)} itemsPerPage={itemsPerPage} keys={keys}/>
    </div>
  );
};

export default Offers;
