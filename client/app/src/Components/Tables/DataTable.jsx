/* eslint-disable react/prop-types */
import { Component } from "react";
import { Table, Button } from "reactstrap";
import ModalForm from "../Modals/Modal";

class DataTable extends Component {
  deleteItem = (id) => {
    const { dataType } = this.props;
    let confirmDelete = window.confirm("Delete item forever?");

    if (confirmDelete) {
      fetch(`http://127.0.0.1:8000/api/${dataType}/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })
        .then((response) => {
          if (response.ok) {
            this.props.deleteItemFromState(id);
          } else {
            console.log("Error deleting item:", response.statusText);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const items = this.props.items.map((item) => {
      return (
        <tr key={item.id} style={{ verticalAlign: "middle" }}>
          <th scope="row">{item.id}</th>
          {this.props.dataType === "birds" && (
            <>
              <td>{item.common_name}</td>
              <td>{item.scientific_name}</td>
              <td>{item.wing_span}</td>
            </>
          )}
          {this.props.dataType === "climbs" && (
            <>
              <td>{item.name}</td>
              <td>{item.grade}</td>
              <td>{item.length}</td>
              <td>{item.rating}</td>
            </>
          )}
          <td>
            <div style={{ width: "100%" }}>
              <ModalForm
                buttonLabel="Edit"
                item={item}
                updateState={this.props.updateState}
                dataType={this.props.dataType}
              />{" "}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>
                Del
              </Button>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            {this.props.dataType === "birds" && (
              <>
                <th>Common Name</th>
                <th>Scientific Name</th>
                <th>Wingspan (cm)</th>
              </>
            )}
            {this.props.dataType === "climbs" && (
              <>
                <th>Name</th>
                <th>Grade</th>
                <th>Length (m)</th>
                <th>Rating (out of 5)</th>
              </>
            )}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>
    );
  }
}

export default DataTable;
