import { useNavigate } from 'react-router-dom';


interface OfferProps {
    offerId: string;
    title: string;
    salary: number;
  }
  
  interface OfferList {
    currentOffers: OfferProps[];
  }

const OffersPropose = ({ currentOffers }:OfferList) => {
    const navigate = useNavigate();
    const redirectToOfferDetails = (offerId: string) => {
      navigate(`/offerId/${offerId}`);
    };
  return (
    <div className="offerMarginTop">
      <ul>
        {currentOffers.map((offer, index) => (
          <li key={index} onClick={() => redirectToOfferDetails(offer.offerId)}>
            <ul className="list-group list-group-horizontal offerItem">
              <li className="list-group-item list-group-item-info offerTitle">
                Position: <strong>{offer.title}</strong>
              </li>
              <li className="list-group-item list-group-item-success offerSalary">
                Salary: <strong>{offer.salary} PLN/month </strong>
              </li>
            </ul>
            {index < currentOffers.length - 1 && <hr className="offerSeparator" />}
          </li>
        ))}
      </ul>
      </div>
  )
}

export default OffersPropose