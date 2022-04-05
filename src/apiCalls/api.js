import { routes } from "./apiConfig";
import axios from "axios";

const token = localStorage.getItem("JWT");

const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};
console.log("config", config);

const login = async (body) => {
  try {
    const res = await axios.post(routes.LOGIN, body);
    return res;
  } catch (err) {
    throw err.response;
  }
};
const register = async (body) => {
  try {
    const res = await axios.post(routes.REGISTER, body);
    return res;
  } catch (err) {
    throw err.response;
  }
};
const Agentregister = async (body) => {
  try {
    const res = await axios.post(routes.AGENTREGISTR, body);
    return res;
  } catch (err) {
    throw err.response;
  }
};

const Addcustomer = async (body) => {
  try {
    const res = await axios.post(routes.ADDCUSTOMER, body, config);
    return res;
  } catch (err) {
    throw err.response;
  }
};
const customerTable = async (body) => {
  try {
    const res = await axios.get(routes.ADDCUSTOMER, body);
    return res;
  } catch (err) {
    throw err.response;
  }
};
const ProfileView = async (body) => {
  try {
    const res = await axios.get(routes.PROFILEVIEW, config);
    return res;
  } catch (err) {
    throw err.response;
  }
};
const editProfile = async (body) => {
  try {
    const res = await axios.post(routes.EDITPROFILE, body, config);
    return res;
  } catch (err) {
    throw err.response;
  }
};

export default {
  login,
  register,
  Addcustomer,
  customerTable,
  Agentregister,
  ProfileView,
  editProfile,
};
