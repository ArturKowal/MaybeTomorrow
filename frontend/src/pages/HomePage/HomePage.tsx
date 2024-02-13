import HorizontalListWithCards from "./components/HorizontalListWithCards";
import SearchFieldWithButton from "./components/SearchFieldWithButton";

const HomePage = () => {
  return (
    <div className="container">
      <SearchFieldWithButton></SearchFieldWithButton>
      <HorizontalListWithCards></HorizontalListWithCards>
    </div>
  );
};

export default HomePage;
