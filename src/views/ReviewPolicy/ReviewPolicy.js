import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
const useStyles = makeStyles({
  Rootcard: {
    minWidth: 275,
    margin: 10,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function ReviewPolicy(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [selectedTab, setSelectedTab] = useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const policyTableButton = () => {
    console.log("push");
    props.history.push("/policy-detail");
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: "policies", label: "Policies", minWidth: 170 },
    { id: "carrier", label: "Carrier", minWidth: 100 },

    {
      id: "action",
      label: "Action",
      minWidth: 170,
      align: "right",
    },
  ];
  const value = (
    <button type="button" className="btn btn-outline-success">
      View
    </button>
  );
  console.log("button", value);
  function createData(policies, carrier, action) {
    // const density = population / size;
    return { policies, carrier, action };
  }

  const rows = [
    createData("India", "IN", value),
    createData("China", "CN", value),
    createData("Italy", "IT", value),
    createData("United States", "US", value),
  ];
  function handleTabChange(event, value) {
    setSelectedTab(value);
  }
  return (
    <div animation="transition.expandIn" delay={300}>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-12">
          <Card className={classes.Rootcard}>
            <CardContent>
              <Typography className="h2" color="textPrimary">
                Review Policies
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-12">
          <Paper
            className={classes.root}
            animation="transition.expandIn"
            delay={300}
            style={{ margin: "1%" }}
          >
            <TableContainer className={classes.container}>
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
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
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
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
        <div className="col-lg-8" />
        <div className="col-lg-2" />
        <div
          className="col-lg-2 "
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            style={{ width: "50%" }}
            variant="contained"
            className="primaryTheme"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReviewPolicy;
