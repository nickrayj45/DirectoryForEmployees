import axios from "axios";
export default {
  // Gets all users
  getEmployees: () => {
    return axios.get("https://randomuser.me/api/?results=200&nat=us").then(res =>{console.log(res.data)}).catch(err => {console.log(err)});
  }
};