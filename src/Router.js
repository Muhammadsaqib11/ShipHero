import React from "react";
import "./App.css";
import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import ProtectedRoutes from "./hoc/ProtectedRoutes";
import { ToastContainer } from "./components/Toast";
import CheckSession from "./hoc/CheckSession";
import { useSelector } from "react-redux";
import Layout from "./views/Layout/Layout";
import Profile from "./views/Profile/Profile";
import AgentProfile from "./views/AgentProfile/AgentProfile";
import Policy from "./views/Policy/Policy";
import AccessLink from "./views/AccessLink/AccessLink";
import ReviewPolicy from "./views/ReviewPolicy/ReviewPolicy";
import Certificate from "./views/Certificate/Certificate";
import Chat from "./views/ChatPanel/Chat";
import OtherPolicy from "./views/OtherPolicy/OtherPolicy";
import CustomerPage from "./views/Customers/CustomerPage";
import AddCustomer from "./views/Customers/AddCustomer";
import CustomerDetail from "./views/Customers/CustomerDetail";
import AgentDetail from "./views/Agent/AgentDetail";
import PolicyCategory from "./views/Policy/PolicyCategory";
import TrackingPage from "./views/LiveTraking/TrackingPage";
import PolicyDetail from "./views/Policy/PolicyDetail";
import AnciallaryInsuranceForm from "./views/OtherPolicy/Forms/AnciallaryInsuranceForm";
import AutoInsuranceForm from "./views/OtherPolicy/Forms/AutoInsuranceForm";
import HealthInsuranceForm from "./views/OtherPolicy/Forms/HealthInsuranceForm";
import HomeInsuranceForm from "./views/OtherPolicy/Forms/HomeInsuranceForm";
import InvestInsuranceForm from "./views/OtherPolicy/Forms/InvestInsuranceForm";
import LifeInsuranceForm from "./views/OtherPolicy/Forms/LifeInsuranceForm";
import AddAgent from "./views/Agent/AddAgent";
import Agent from "./views/Agent/Agent";
import Referal from "./views/Referal/Referal";

export default function Router() {
  const { darkMode } = useSelector((state) => state.Auth);
  return (
    <div>
      <ToastContainer />
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/dashbord" component={Dashboard} />

          {/* <ProtectedRoutes> */}
          {/* <CheckSession> */}
          {/* <Route exact path="/" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/policy-category" component={Policy} />
          <Route exact path="/access-link" component={AccessLink} />
          <Route exact path="/review-policy" component={ReviewPolicy} />
          <Route exact path="/certificate" component={Certificate} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/add-policy" component={OtherPolicy} />
          <Route exact path="/customer" component={CustomerPage} />
          <Route exact path="/add-customers" component={AddCustomer} />
          <Route exact path="/policies" component={PolicyCategory} />
          <Route exact path="/policy-detail" component={PolicyDetail} />
          <Route exact path="/trackinig" component={TrackingPage} />
          <Route exact path="/add-agent" component={AddAgent} />
          <Route exact path="/agent" component={Agent} />
          <Route exact path="/referrals" component={Referal} />
          <Route exact path="/customer-detail" component={CustomerDetail} />
          <Route exact path="/agent-detail" component={AgentDetail} />
          <Route exact path="/agent-profile" component={AgentProfile} /> */}

          {/* <Route
            exact
            path="/auto-insurance-form"
            component={AutoInsuranceForm}
          />
          <Route
            exact
            path="/health-insurance-form"
            component={HealthInsuranceForm}
          />
          <Route
            exact
            path="/home-insurance-form"
            component={HomeInsuranceForm}
          />
          <Route
            exact
            path="/anciallary-insurance-form"
            component={AnciallaryInsuranceForm}
          />
          <Route
            exact
            path="/investment-insurance-form"
            component={InvestInsuranceForm}
          />
          <Route
            exact
            path="/life-insurance-form"
            component={LifeInsuranceForm}
          /> */}
          {/* </ProtectedRoutes> */}
        </Switch>
      </Layout>
    </div>
  );
}