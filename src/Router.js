import React from "react";
import "./App.css";
import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "./components/Toast";
import { useSelector } from "react-redux";
import Layout from "./views/Layout/Layout";
import OrderDetail from './views/Orders/OrderDetail'
import CreateOrder from './views/Orders/CreateOrder'
import ProductDetail from './views/Products/ProductDetail'
import CreateProducts from './views/Products/CreateProducts'


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
          <Route exact path="/dashbord/order" component={OrderDetail} />
          <Route exact path="/dashbord/createNewOrder" component={CreateOrder} />
          <Route exact path="/dashbord/product" component={ProductDetail} />
          <Route exact path="/dashbord/product/createProduct" component={ProductDetail} />

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
