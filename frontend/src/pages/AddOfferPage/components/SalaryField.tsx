import { ChangeEvent } from "react";

interface Props {
  salary: (item: number) => void;
}

const SalaryField = ({ salary }: Props) => {
  const handleEvent = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const target = (event.target as HTMLInputElement);
    salary(parseFloat(target.value));
  };
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">PLN</span>
      <input
        id="salary"
        name="salary"
        type="number"
        min="0"
        className="form-control"
        aria-label="Amount (to the nearest number)"
        onChange={(event) => {
          handleEvent(event);
        }}
      />
      <span className="input-group-text">gross per month</span>
    </div>
  );
};

export default SalaryField;
