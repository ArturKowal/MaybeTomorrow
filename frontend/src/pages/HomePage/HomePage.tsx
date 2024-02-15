import HorizontalListWithCards from "./components/HorizontalListWithCards";
import SearchFieldWithButton from "./components/SearchFieldWithButton";

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="center mainPageWelcomeText">
        Hi! What kind of job are you looking for?
      </h1>
      <SearchFieldWithButton></SearchFieldWithButton>
      <HorizontalListWithCards></HorizontalListWithCards>
    </div>
  );
};

export default HomePage;
