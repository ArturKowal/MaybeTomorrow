import { ChangeEvent } from "react";

interface Props {
  description: (item: string) => void;
}

const DescriptionField = ({ description }: Props) => {

  const handleEvent = (event: ChangeEvent<HTMLTextAreaElement>) => {
      event.preventDefault();
      const target = event.target as HTMLTextAreaElement;
      description(target.value);
    };
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea2" className="form-label">
        Description job offer
      </label>
      <textarea
        name="jobOfferDescription"
        className="form-control"
        id="exampleFormControlTextarea2"
        onChange={(event) => {
          handleEvent(event);
        }}
      ></textarea>
    </div>
  );
};

export default DescriptionField;
