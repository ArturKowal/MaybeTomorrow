import { Component } from "react";
import TitleField from "./TitleField";
import AddOfferButton from "./AddOfferButton";
import DescriptionField from "./DescriptionField";
import SalaryField from "./SalaryField";

interface State {
  title: string;
  description: string;
  salary: number;
}

class CreateOfferForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      title: "",
      description: "",
      salary: -1,
    };
  }

  handleTitleChange = (title: string) => {
    this.setState({ title });
  };

  handleDescriptionChange = (description: string) => {
    this.setState({ description });
  };

  handleSalaryChange = (salary: number) => {
    this.setState({ salary });
  };

  isFieldValid = (field: string) => {
    return field.trim() !== "";
  };

  isNumberValid = (number: number) => {
    return number > 0;
  };

  render() {
    const { title, description, salary } = this.state;

    const isFormValid = this.isFieldValid(title) && this.isFieldValid(description) && this.isNumberValid(salary);

    return (
      <div>
        <TitleField title={this.handleTitleChange}></TitleField>
        <DescriptionField description={this.handleDescriptionChange}></DescriptionField>
        <SalaryField salary={this.handleSalaryChange}></SalaryField>
        {isFormValid && (
          <AddOfferButton
            title={title}
            description={description}
            salary={salary}
          ></AddOfferButton>
        )}
      </div>
    );
  }
}

export default CreateOfferForm;
