import React, {Component} from "react";
import API from "../../utils/API";
// import workers from "./workers.json";

// styles if there is one
// import TableBody from "../TableBody.js";

class TableData extends Component {
    state = {
      search: "",
      users: [],
      filteredUsers: [],
      results: [],
      error: "",
    };

 componentDidMount() {
            API.getUsers()
              .then(res => this.setState({ users: res.results }))
              .catch(err => console.log(err));
          }
    
render(){
    return(
        <div className="tableData"> 
            {this.state.workers.map(user => (
          
        <p>{user.name}</p>
        ))};
        </div>
    );
};
};



// Map function inside containing div on line 23, map over this.state.users, look at Pupster app at SearchForm.js



export default TableData;    