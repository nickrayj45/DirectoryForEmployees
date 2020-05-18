import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import TableData from "./components/TableData";
import TableBody from "./components/TableBody";
import SearchInput from "./components/SearchInput";
import TableHeader from "./components/TableHeader";
import Main from "./components/Main";
// import workers from "workers.json";

// class App extends Component {
//   state = {
//     workers
//   }
// }



function App() {
  return (
    <div className="App">
     <Wrapper>
       <Jumbotron>
         <Main>
           <SearchInput>
             <TableBody>
               <TableHeader>Workers</TableHeader>
               {/* {this.state.workers.map(worker => (
                 
                <TableData
                  removeWorker={this.removeWorker}
                  id={worker.id}
                    
                />
               ))} */}
                <TableData>
                  
                </TableData>
                 
               
             </TableBody>
           </SearchInput>
         </Main>
       </Jumbotron>
     </Wrapper>
    </div>
  );
};



export default App;
