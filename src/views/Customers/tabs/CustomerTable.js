import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import Done from "@material-ui/icons/Done";
import Error from "@material-ui/icons/Error";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import api from "../../../apiCalls/api";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CustomerDetail from "../CustomerDetail";
import { createNotification } from "../../../components/Toast";
import {
  MDBDataTable,
  MDBBtn,
  MDBTableHead,
  MDBTableBody,
  MDBTable,
} from "mdbreact";
const token = localStorage.getItem("JWT");
const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

class CustomerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TableData: [],
      page: 0,
      id: "",
      rowsPerPage: 5,
      showCustomer: false,
    };
    this.OpenCustomerView = this.OpenCustomerView.bind(this);
  }
  TableViewButton = () => {
    console.log("View", this.props);
    this.props.history.push("/customer-detail");
  };
  OpenCustomerView = (id) => {
    // this.setState({ showPopup: true, id: id });
    console.log("id", this.state.id);
    this.props.history.push({
      pathname: "/customer-detail",
      state: id,
    });
  };

  componentDidMount() {
    // this.getData();
    api
      .customerTable(config)
      .then((res) => {
        console.log("responseCustomer", res);
        console.log("tableData", this.state.TableData);
        if (res.data.status === 422) {
          createNotification("error", res.data.message);
          // console.log("message", res.data.message);
        } else {
          let newList = [];
          res.data.message.map((row, i) => {
            newList.push({
              firstname: row.first_name,
              lastName: row.last_name,
              dateOfbirth: row.dob,
              age: row.age,
              ssn: row.ssn,
              occupation: row.occupation,
              country: row.country,
              city: row.city,
              state: row.state,
              contact: row.contact1,
              action: (
                <Button
                  onClick={() => this.OpenCustomerView(row.id)}
                  style={{ backgroundColor: "green" }}
                >
                  View
                </Button>
              ),
            });
          });
          this.setState({ TableData: newList });
        }

        // setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        // if (err.data.errors.email) {
        //   setError(true);
        //   setEmailError(err.data.errors.email[0]);
        // }
        // if (err.data.errors.password) {
        //   setError(true);
        //   setPasswordError(err.data.errors.password[0]);
        // }
        // setLoading(false);

        // createNotification(
        //   "error",
        //   err.data?.message ?? "Something went wrong please try again later"
        // );
      });
  }

  render() {
    let popup = "";
    if (this.state.showPopup) {
      popup = (
        <CustomerDetail
          // onClose={() => this.closeInsurancePopup}
          id={this.state.id}
          // disabled={this.isDisabled(this.props.rights.update)}
          // disabled={this.isDisabled(this.props.rights.add)}
        ></CustomerDetail>
      );
    }
    // const columns = [
    //   { name: "First Name", id: "firstname" },
    //   { name: "Last Name", id: "lastName" },
    //   { name: "DOB", id: "dateOfbirth" },
    //   { name: "Age", id: "age" },
    //   { name: "SSN", id: "ssn" },
    //   { name: "Occupation", id: "occupation" },
    //   { name: "Country", id: "country" },
    //   { name: "City", id: "city" },
    //   { name: "State", id: "state" },
    //   { name: "Contact", id: "contact" },

    //   {
    //     name: "Actions",
    //     options: {
    //       customBodyRender: (value, tableMeta, updateValue) => {
    //         return (
    //           <button
    //             type="button"
    //             onClick={this.TableViewButton}
    //             className="btn btn-outline-success"
    //           >
    //             View
    //           </button>
    //         );
    //       },
    //       sorting: false,
    //     },
    //   },
    // ];

    const columns = [
      { id: "firstname", label: "First Name", minWidth: 70 },
      { id: "lastName", label: "Last Name", minWidth: 70, align: "center" },
      {
        id: "dateOfbirth",
        label: "DOB",
        minWidth: 150,
        align: "center",
      },
      { id: "age", label: "Age", minWidth: 50 },
      { id: "ssn", label: "SSN", minWidth: 100, align: "center" },
      { id: "occupation", label: "Occupation", minWidth: 100, align: "center" },
      { id: "country", label: "Country", minWidth: 70 },
      { id: "city", label: "City", minWidth: 70, align: "center" },
      { id: "state", label: "State", minWidth: 100 },
      { id: "contact", label: "Contact", minWidth: 100 },

      {
        id: "action",
        label: "Action",
        minWidth: 100,
        align: "right",
      },
    ];

    // const data = [
    //   ["Saqib", "kelaForecast", "28", ""],
    //   ["Danish", "kelaForecast", "30"],
    //   ["Mohsan", "InnerVision", "50", ""],
    //   ["Ahsan", "InnerVision", "18", ""],
    //   ["Faisal", "OncoKnowledge", "22", ""],
    //   ["Umer", "OncoKnowledge", "19"],
    // ];

    const options = {
      print: false,
      rowsPerPage: 5,
    };
    {
      console.log("table", this.state.TableData);
    }

    return (
      <div className="w-98" style={{ margin: "1%" }}>
        <Paper
          className=""
          animation="transition.expandIn"
          delay={300}
          style={{ margin: "1%" }}
        >
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.TableData.slice(
                  this.state.page * this.state.rowsPerPage,
                  this.state.page * this.state.rowsPerPage +
                    this.state.rowsPerPage
                ).map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        console.log("tablevalue", value);
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 25, 100]}
            component="div"
            count={this.state.TableData.length}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            // onChangePage={handleChangePage}
            // onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        {/* <MUIDataTable
          title={
            <Typography variant="h5" className="p-0 m-0">
              Customer List
            </Typography>
          }
          data={this.state.TableData && this.state.TableData}
          columns={columns}
          options={options}
          options={{
            selectableRows: false,
            rowsPerPage: 10,
          }}
        /> */}
        {popup}
      </div>
    );
  }
}
export default withRouter(CustomerTable);
