/* eslint-disable react/prop-types */
import { Component } from "react";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

class NumberInputWithValidation extends Component {
  state = {
    value: this.props.value || "",
    error: false,
  };

  handleChange = (e) => {
    const value = e.target.value;
    const isValid =
      value === "" || (Number(value) > 0 && Number.isInteger(Number(value)));

    this.setState({
      value,
      error: !isValid,
    });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render() {
    return (
      <FormGroup>
        <Label for={this.props.id}>{this.props.title}</Label>
        <Input
          type="number"
          name={this.props.name}
          id={this.props.id}
          value={this.props.value}
          onChange={this.handleChange}
          invalid={this.state.error}
        />
        <FormFeedback>Please enter a whole number greater than 0.</FormFeedback>
      </FormGroup>
    );
  }
}

export default NumberInputWithValidation;
