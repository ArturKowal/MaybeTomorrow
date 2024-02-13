import { ChangeEvent } from "react";

interface Props {
  title: (item: string) => void;
}

const TitleField = ({ title }: Props) => {

    const handleEvent = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        title(target.value);
      };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          name="positionName"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Job title / position name"
          onChange={(event) => {
            handleEvent(event);
          }}
        ></input>
      </div>
    </div>
  );
};

export default TitleField;

