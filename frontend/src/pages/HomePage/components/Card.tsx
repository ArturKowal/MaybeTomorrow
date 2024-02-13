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
    <div
      className="card"
      style={{ minWidth: 230, maxWidth: 230, backgroundColor: "#D9EDBF" }}
    >
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.salary} PLN/month</p>
        <a href={"/offerId/" + item.offerId} className="btn btn-warning">
          Check this out!
        </a>
      </div>
    </div>
  );
};

export default Card;
