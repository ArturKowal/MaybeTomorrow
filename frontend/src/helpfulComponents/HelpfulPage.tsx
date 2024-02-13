import { useState } from "react";
import Alert from "./Alert";
import CreateAlertButton from "./CreateAlertButton";
import DismissingAlert from "./DismissingAlert";
import ListGroup from "./ListGroup";
import SubmitButton from "./SubmitButton";

let items = ["praca", "job", "board", "uczymy", "sie"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

// const handleClick = (click: boolean) => {
//   click ? console.log("now clicked") : null;
// };

const handleClickN = () => {
  console.log("now clicked");
};

const HelpfulPage = () => {
  const [alertVisable, setAlertVisibility] = useState(false);
  const [buttonVisable, setButtonVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Oferty"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Alert>
        Nowa oferta <span>pracy!</span>
      </Alert>
      <SubmitButton color="info" onClick={() => handleClickN()}>
        Submituj to
      </SubmitButton>
      {alertVisable && (
        <DismissingAlert
          alertVisable={setAlertVisibility}
          buttonVisable={setButtonVisibility}
        ></DismissingAlert>
      )}
      {buttonVisable && (
        <CreateAlertButton
          alertVisable={setAlertVisibility}
          buttonVisable={setButtonVisibility}
        >
          Create alert
        </CreateAlertButton>
      )}
    </div>
  );
};

export default HelpfulPage;
