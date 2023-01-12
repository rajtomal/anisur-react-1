import React from "react";
import Card from "./components/card"
import Data from "./data.json"
import NestedData from "./components/nested"
import ClassComponent from "./components/class-component"




function App() {

  // let item = [];

  // item = Data.map((one) => <Card titleName = {one.titleName} title = {one.title} detiles = {one.detiles}/>)

  // for(let x=0; x<Data.length; x++){
  //   item.push(<Card titleName = {Data[x].titleName} title = {Data[x].title} detiles = {Data[x].detiles}/>)
  // }

  return (
    <div className="app">
      <h1>Todo List with <strong style={{color : "red"}}>JSON Data</strong></h1>
      {Data.map((item, index) => <Card key = {index} titleName = {item.titleName} title = {item.title} detiles = {item.detiles}/>)}
      <NestedData />
      <ClassComponent title = "Hello Class component" />
    </div>
  );
}

export default App;
