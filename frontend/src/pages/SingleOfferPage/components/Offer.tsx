interface OfferProps {
  offerId: string;
  title: string;
  description: string;
  salary: number;
}

const Offer = ({ item }: { item: OfferProps }) => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item center fontSizeLarger">
          <header>{item.title}</header>
        </li>
        <li className="list-group-item list-group-item-success center">
          {item.description}
        </li>
        <li className="list-group-item list-group-item-dark alignLeft">
          The employer offers: {item.salary} PLN gross / month of work
        </li>
        <li className="list-group-item alignRight fontSizeSmaller">
          Job offer ID: {item.offerId}
        </li>
      </ul>
    </div>
  );
};

export default Offer;
