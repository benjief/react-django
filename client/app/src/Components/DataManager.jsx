/* eslint-disable react/prop-types */
import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ModalForm from "./Modals/Modal";
import DataTable from "./Tables/DataTable";
import { CSVLink } from "react-csv";
import NavBar from "../Components/NavBar/NavBar";
import { Header } from "./DataManagerStyle";

class DataManager extends Component {
  state = {
    items: [],
  };

  getItems() {
    const { dataType } = this.props;
    fetch(`http://127.0.0.1:8000/api/${dataType}/`)
      .then((response) => response.json())
      .then((items) => this.setState({ items }))
      .catch((err) => console.log(err));
  }

  addItemToState = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  };

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex((data) => data.id === item.id);
    const newArray = [
      ...this.state.items.slice(0, itemIndex),
      item,
      ...this.state.items.slice(itemIndex + 1),
    ];
    this.setState({ items: newArray });
  };

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: updatedItems });
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    const { dataType } = this.props;

    return (
      <>
        <NavBar />
        <Container
          className="DataManager"
          style={{ width: "100%", margins: "0" }}
        >
          <Row>
            <Col>
              <Header>{`${
                dataType.charAt(0).toUpperCase() + dataType.slice(1)
              } Database`}</Header>
            </Col>
          </Row>
          <Row>
            <Col>
              <DataTable
                items={this.state.items}
                updateState={this.updateState}
                deleteItemFromState={this.deleteItemFromState}
                dataType={this.props.dataType}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CSVLink
                filename={`${dataType}.csv`}
                color="primary"
                style={{ float: "left", marginRight: "10px" }}
                className="btn btn-primary"
                data={this.state.items}
              >
                Download CSV
              </CSVLink>
              <ModalForm
                buttonLabel={`Add ${dataType.slice(0, -1)}`}
                addItemToState={this.addItemToState}
                dataType={this.props.dataType}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default DataManager;
