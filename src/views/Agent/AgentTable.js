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
import api from "../../apiCalls/api";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  MDBDataTable,
  MDBBtn,
  MDBTableHead,
  MDBTableBody,
  MDBTable,
} from "mdbreact";

class AgentTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TableData: [],
      page: 0,
      id: "",
      rowsPerPage: 5,
      showCustomer: false,
    };
    this.OpenAgentView = this.OpenAgentView.bind(this);
  }
  TableViewButton = () => {
    console.log("View", this.props);
    this.props.history.push("/customer-detail");
  };
  OpenAgentView = (id) => {
    // this.setState({ showPopup: true, id: id });
    console.log("id", this.state.id);
    this.props.history.push({
      pathname: "/agent-detail",
      state: id,
    });
  };

  componentDidMount() {
    // this.getData();
    api
      .customerTable()
      .then((res) => {
        console.log("responseCustomer", res);
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
                onClick={() => this.OpenAgentView(row.id)}
                style={{ backgroundColor: "green" }}
              >
                View
              </Button>
            ),
          });
        });
        this.setState({ TableData: newList });
        console.log("tableData", this.state.TableData);
        if (res.data.status === "error") {
          // createNotification("error", res.data.message, "Status");
          // console.log("message", res.data.message);
        } else {
          // dispatch(setAuthInfo(res.data));
          console.log("response", res.data);
          // localStorage.setItem("JWT", res.data.message.token);
          // createNotification("success", "Login Successfully");
          // props.history.push("/");
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
      </div>
    );
  }
}
export default withRouter(AgentTable);
