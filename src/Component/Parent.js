import React, { Component } from "react";
import Child from "./Child";

 class Parent extends Component {
  render() {
    return(
        <div>
             <Child name="Hello World" />;
             </div>
    )
  }
}
export default Parent