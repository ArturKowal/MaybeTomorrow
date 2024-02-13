import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchFieldWithButton = () => {

  let [key, setKey] = useState("");

  const handleEvent = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setKey((event.target as HTMLInputElement).value);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!key) {
      key = " "
    }
    navigate("/offers/results/" + encodeURIComponent(key));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div
      className="input-group"
      style={{ minWidth: 300, maxWidth: 600, padding: 20 , margin: "auto"}}
    >
      <input
        name="search"
        type="text"
        className="form-control"
        placeholder="Position"
        aria-describedby="button-addon2"
        value={key}
        onKeyDown={handleKeyDown}
        onChange={(event) => {
          handleEvent(event);
        }}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchFieldWithButton;