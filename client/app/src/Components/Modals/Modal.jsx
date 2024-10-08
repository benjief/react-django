/* eslint-disable react/prop-types */
import { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AddEditForm from "../Forms/AddEditForm";
import { CloseButton } from "reactstrap";

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    const closeBtn = (
      <CloseButton className="close" onClick={this.toggle}></CloseButton>
    );

    const label = this.props.buttonLabel;

    let button = "";
    let title = "";

    if (label === "Edit") {
      button = (
        <Button
          color="warning"
          onClick={this.toggle}
          style={{ float: "left", marginRight: "10px" }}
        >
          {label}
        </Button>
      );
      title = "Edit Item";
    } else {
      button = (
        <Button
          color="success"
          onClick={this.toggle}
          style={{ float: "left", marginRight: "10px" }}
        >
          {label}
        </Button>
      );
      title = "Add New Item";
    }

    return (
      <div>
        {button}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            {title}
          </ModalHeader>
          <ModalBody>
            <AddEditForm
              addItemToState={this.props.addItemToState}
              updateState={this.props.updateState}
              toggle={this.toggle}
              item={this.props.item}
              dataType={this.props.dataType}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalForm;
