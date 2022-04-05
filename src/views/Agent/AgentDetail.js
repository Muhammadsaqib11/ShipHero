import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

function AgentDetail(props) {
  // console.log("props", props);
  const [activeTab, setActiveTab] = useState("1");
  const [customerId, setCustomerID] = useState(props.location.state);
  const [customerDetail, setCustomerDetail] = useState("");
  console.log("customerID", customerId);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  useEffect(() => {
    axios
      .get(`http://192.168.0.119/api/customers/${customerId}`)
      .then(function (response) {
        console.log("CustomerResponse", response);
        setCustomerDetail(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    console.log("customerDetail", customerDetail);
  }, [customerDetail]);

  const Editid = customerDetail && customerDetail.id;

  const EditWithID = () => {
    props.history.push({
      pathname: "/add-agent",
      state: Editid,
    });
  };
  // const classes = useStyles();

  return (
    <>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>
                  {customerDetail.first_name} {customerDetail.last_name}
                </h5>
                <h6>{customerDetail.occupation}</h6>
                <p className="proile-rating">
                  Email : <span>Saqibbutt640@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="button"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
                onClick={EditWithID}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="">Website Link</a>
                <br />
                <a href="">Bootsnipp Profile</a>
                <br />
                <a href="">Bootply Profile</a>
                <p>SKILLS</p>
                <a href="">Web Designer</a>
                <br />
                <a href="">Web Developer</a>
                <br />
                <a href="">WordPress</a>
                <br />
                <a href="">WooCommerce</a>
                <br />
                <a href="">PHP, .Net</a>
                <br />
              </div>
            </div>
            <div className="col-md-8">
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      General
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Others
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1" className="tabpanalCustom">
                    <Row>
                      <Col sm="12">
                        <div
                          className="tab-pane"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <div className="row p-2">
                            <div className="col-md-6">
                              <label>Customer Id</label>
                            </div>
                            <div className="col-md-6">
                              <p>{customerId}</p>
                            </div>
                          </div>
                          <div className="row p-2">
                            <div className="col-md-6">
                              <label>Customer Name</label>
                            </div>
                            <div className="col-md-6">
                              <p>
                                {customerDetail.first_name}{" "}
                                {customerDetail.last_name}
                              </p>
                            </div>
                          </div>
                          <div className="row p-2">
                            <div className="col-md-6">
                              <label>Customer Country</label>
                            </div>
                            <div className="col-md-6">
                              <p>{customerDetail.country}</p>
                            </div>
                          </div>
                          <div className="row p-2">
                            <div className="col-md-6">
                              <label>Customer State</label>
                            </div>
                            <div className="col-md-6">
                              <p>{customerDetail.state}</p>
                            </div>
                          </div>
                          <div className="row p-2">
                            <div className="col-md-6">
                              <label>Customer city</label>
                            </div>
                            <div className="col-md-6 p-2">
                              <p>{customerDetail.city}</p>
                            </div>
                          </div>
                          <div className="row p-2">
                            <div className="col-md-6">
                              <label>Customer SSN Number</label>
                            </div>
                            <div className="col-md-6 p-2">
                              <p>{customerDetail.ssn}</p>
                            </div>
                          </div>
                          <div className="row p-2">
                            <div className="col-md-6">
                              <label>Customer city</label>
                            </div>
                            <div className="col-md-6 p-2">
                              <p>{customerDetail.city}</p>
                            </div>
                          </div>
                          <div className="row p-2">
                            <div className="col-md-6">
                              <label>Added By Agent</label>
                            </div>
                            <div className="col-md-6 p-2">
                              <p>
                                {customerDetail.users &&
                                  customerDetail.users.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2" className="tabpanalCustom">
                    <Row>
                      <Col sm="12">
                        <Card body>
                          <div
                            className="tab-pane"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            <div className="row">
                              <div className="col-md-6">
                                <label>User Id</label>
                              </div>
                              <div className="col-md-6">
                                <p>Kshiti123</p>
                              </div>
                            </div>
                            <div className="row p-2">
                              <div className="col-md-6">
                                <label>Name</label>
                              </div>
                              <div className="col-md-6">
                                <p>Kshiti Ghelani</p>
                              </div>
                            </div>
                            <div className="row p-2">
                              <div className="col-md-6">
                                <label>Email</label>
                              </div>
                              <div className="col-md-6">
                                <p>kshitighelani@gmail.com</p>
                              </div>
                            </div>
                            <div className="row p-2">
                              <div className="col-md-6">
                                <label>Phone</label>
                              </div>
                              <div className="col-md-6">
                                <p>123 456 7890</p>
                              </div>
                            </div>
                            <div className="row p-2">
                              <div className="col-md-6">
                                <label>Profession</label>
                              </div>
                              <div className="col-md-6">
                                <p>Web Developer and Designer</p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AgentDetail;
