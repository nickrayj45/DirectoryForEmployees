import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
// import TableData from "./components/TableData";
// import TableBody from "./components/TableBody";
import SearchInput from "./components/SearchInput";
// import TableHeader from "./components/TableHeader";
import Main from "./components/Main";
// import workers from "workers.json";



function App() {
  return (
    <div className="App">
      <Wrapper>
       
        <Jumbotron>
        </Jumbotron>
        
        <Main>
        <SearchInput/>
        
        </Main>
      </Wrapper>
    </div>
  );
}

export default App;
