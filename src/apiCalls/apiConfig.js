export const BASE_URL = "http://192.168.0.119/api";

const user_id = localStorage.getItem("UserId");
console.log("11111", user_id);

export const routes = {
  REGISTER: BASE_URL + "/register",
  LOGIN: BASE_URL + "/login",
  AGENTREGISTR: BASE_URL + "/agent_register",
  ADDCUSTOMER: BASE_URL + "/customers",
  PROFILEVIEW: BASE_URL + "/profile",
  EDITPROFILE: BASE_URL + `/profile/${user_id}`,
};
