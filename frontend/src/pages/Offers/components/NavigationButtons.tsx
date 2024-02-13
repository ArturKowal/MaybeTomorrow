import { Link } from "react-router-dom";

interface Props {
    offerListLenght: number;
    itemsPerPage: number;
    page: number;
    keys: string;
    endIndex: number;
}

const NavigationButtons = ({offerListLenght, itemsPerPage, keys, endIndex, page}:Props) => {
  return (
    <div className="center">
        {offerListLenght > itemsPerPage && (
          <div>
            {page > 1 && (
              <Link to={`/offers/results/${keys}/${page - 1}`}>
                {"< Previous Page"}
              </Link>
            )}
            {" | "}
            {endIndex < offerListLenght && (
              <Link to={`/offers/results/${keys}/${page + 1}`}>
                {"Next Page >"}
              </Link>
            )}
          </div>
        )}
      </div>
  )
}

export default NavigationButtons