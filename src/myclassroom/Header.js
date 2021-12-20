import React from "react";
import { Component } from "react/cjs/react.production.min";
import Myclassroom_logo from "../Icons/Myclassroom_logo.png";
import clock from "../Icons/clock.png";
import instruction from "../Icons/instruction.png";
import "./Header.css"

class Header extends Component{

	render(){
		return(
	
			
			
<nav className="navbar justify-content-between generic-test-header">
<div className="myclass">
  <img  src={Myclassroom_logo} alt=""/>
</div>
{/* className="form-inline" */}
  <div className="composer">
  <div className="d-inline p-3">
  <img src={clock} alt=""/>
  </div>
  <div className="d-inline p-3"> 00:24:59 </div>
 <div className="d-inline p-3">
 SUBMIT
 </div>

	<div className="d-inline p-3">
	<img src={instruction} alt=""/>
	</div>
  </div>
</nav>
		

			
		
			
			

	
		)
	}
}
export default Header;