/* eslint-disable react/prop-types */
import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import NumberInputWithValidation from "../NumberInputWithValidation";

class AddEditForm extends React.Component {
  state = {
    id: 0,
    common_name: "",
    scientific_name: "",
    wing_span: 0,
    name: "",
    grade: "",
    length: 0,
    rating: 0,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  isFormValid = () => {
    const { dataType } = this.props;
    const {
      common_name,
      scientific_name,
      wing_span,
      name,
      grade,
      length,
      rating,
    } = this.state;

    if (dataType === "birds") {
      return common_name && scientific_name && wing_span;
    } else if (dataType === "climbs") {
      return name && grade && length && rating;
    }
    return false;
  };

  submitFormAdd = (e) => {
    e.preventDefault();
    const { dataType } = this.props;
    let body;

    if (dataType === "birds") {
      body = JSON.stringify({
        common_name: this.state.common_name,
        scientific_name: this.state.scientific_name,
        wing_span: parseInt(this.state.wing_span, 10),
      });
    } else if (dataType === "climbs") {
      body = JSON.stringify({
        name: this.state.name,
        grade: this.state.grade,
        length: parseInt(this.state.length, 10),
        rating: parseInt(this.state.rating, 10),
      });
    }
    fetch(`http://127.0.0.1:8000/api/${dataType}/add/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((item) => {
        if (item) {
          this.props.addItemToState(item);
          this.props.toggle();
        } else {
          console.log("Unexpected response format:", item);
        }
      })
      .catch((err) => console.log("Fetch error:", err));
  };

  submitFormEdit = (e) => {
    e.preventDefault();
    const { dataType } = this.props;
    const { id } = this.state;
    let body;

    if (dataType === "birds") {
      body = JSON.stringify({
        common_name: this.state.common_name,
        scientific_name: this.state.scientific_name,
        wing_span: parseInt(this.state.wing_span, 10),
      });
    } else if (dataType === "climbs") {
      body = JSON.stringify({
        name: this.state.name,
        grade: this.state.grade,
        length: parseInt(this.state.length, 10),
        rating: parseInt(this.state.rating, 10),
      });
    }
    fetch(`http://127.0.0.1:8000/api/${dataType}/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json(); // Parse JSON response
      })
      .then((item) => {
        if (item && typeof item === "object") {
          // Check if item is an object
          this.props.updateState(item); // Update state with the received item
          this.props.toggle(); // Close the modal
        } else {
          console.log("Unexpected response format:", item);
        }
      })
      .catch((err) => {
        console.error("Error during fetch:", err);
      });
  };

  componentDidMount() {
    const { dataType } = this.props;

    // if item exists, populate the state with proper data
    if (this.props.item) {
      if (dataType === "birds") {
        const { id, common_name, scientific_name, wing_span } = this.props.item;
        this.setState({ id, common_name, scientific_name, wing_span });
      } else if (dataType === "climbs") {
        const { id, name, grade, length, rating } = this.props.item;
        this.setState({ id, name, grade, length, rating });
      }
    }
  }

  render() {
    const { dataType } = this.props;

    return (
      <Form
        onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}
      >
        {dataType === "birds" && (
          <>
            <FormGroup>
              <Label for="common_name">Common Name</Label>
              <Input
                type="text"
                name="common_name"
                id="common_name"
                onChange={this.onChange}
                value={this.state.common_name || ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="scientific_name">Scientific Name</Label>
              <Input
                type="text"
                name="scientific_name"
                id="scientific_name"
                onChange={this.onChange}
                value={this.state.scientific_name || ""}
              />
            </FormGroup>
            <FormGroup>
              <NumberInputWithValidation
                title="Wing Span (cm)"
                name="wing_span"
                id="wing_span"
                onChange={(e) => this.setState({ wing_span: e.target.value })}
                value={this.state.wing_span || ""}
              />
            </FormGroup>
          </>
        )}
        {dataType === "climbs" && (
          <>
            <FormGroup>
              <Label for="name">Climb Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                onChange={this.onChange}
                value={this.state.name || ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="grade">Grade</Label>
              <Input
                type="select"
                name="grade"
                id="grade"
                onChange={this.onChange}
                value={this.state.grade || ""}
              >
                <option value="">Select a grade</option>
                <option value="5.4">5.4</option>
                <option value="5.5">5.5</option>
                <option value="5.6">5.6</option>
                <option value="5.7">5.7</option>
                <option value="5.8">5.8</option>
                <option value="5.9">5.9</option>
                <option value="5.10">5.10</option>
                <option value="5.11">5.11</option>
                <option value="5.12">5.12</option>
                <option value="5.13">5.13</option>
                <option value="5.14">5.14</option>
                <option value="5.15">5.15</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="length">Length (m)</Label>
              <Input
                type="number"
                name="length"
                id="length"
                onChange={this.onChange}
                value={this.state.length || ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="rating">Rating (out of 5)</Label>
              <Input
                type="select"
                name="rating"
                id="rating"
                onChange={this.onChange}
                value={this.state.rating || ""}
              >
                <option value="">Select a rating</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Input>
            </FormGroup>
          </>
        )}
        <Button color="primary" disabled={!this.isFormValid()}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddEditForm;
