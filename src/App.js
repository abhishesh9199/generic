import React from "react";
import { Component } from "react/cjs/react.production.min";
import Header from "./myclassroom/Header";
import 'bootstrap/dist/css/bootstrap.css';
import Select_test from "./myclassroom/SelectTest";
import ExamScreen from "./myclassroom/question";
class App extends Component{
  render(){
  return (
    <div>
     <Header/>
     <Select_test/>
     <br/>
     <br/>
     <br/>
     <ExamScreen/>
    </div>
  );
}
}

export default App;
