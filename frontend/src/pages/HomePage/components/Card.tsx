interface OfferProps {
  offerId: string;
  title: string;
  description: string;
  salary: number;
}

interface Offer {
  item: OfferProps;
}

const Card = ({ item }: Offer) => {
  return (
    <div className="offerCard gransicaz bg-light">
      <h5 className="">{item.title}</h5>
      <p className="">{item.salary} PLN/month</p>
      <div className="checkOfferbutton center">
        <a href={"/offerId/" + item.offerId} className="btn">
          Check this offer!
        </a>
      </div>
    </div>
  );
};

export default Card;
