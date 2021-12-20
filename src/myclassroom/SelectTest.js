import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./selectTest.css";

class Select_test extends Component{
	render(){
		return(
			<div className="select-test">
			<div className="test">
			<div className="test_year">
			TEST 2021
			</div>

			{/* <div className="test_type">
			<center className="type"> DPP
			</center>
			
			 </div> */}
			 {/* <div className="test_subject">
			 <center className="type">
			 Chemistry XI

			 </center>
			 

			 </div> */}
			 {/* <div className="test_chapter">
			 <center className="type">
			 Hydrocarbon

			 </center>

			 </div> */}

			</div>
			{/* <div className="section-formate">
			<div className="all">
			<center className="section_type">
			All
			</center>

			</div>
			<div className="section">
			<center className="section_type">
			Section
			
			</center>

			</div>


			</div> */}
			<div className="row Question_marks container">
			
			<div className="questions col-lg-7 col-md-7 col-sm-6">
			<div className="question_content">
			<div className="question_no">
		
			<label> Q 1: </label>
			<span>
               How many carbon atoms does Benzene Contain ?
			</span>

			</div>
			<div className="container year-wise">
			<div className="question-years">
			<div className="years">
			JEE 2019 MAINS
			</div>
			

			</div>
			<div className="question-years">
			<div className="years">
			JEE 2019 MAINS
			</div>
			

			</div>
			<div className="question-years">
			<div className="years">
			JEE 2019 MAINS
			</div>
			

			</div>
			<div className="question-years">
			<div className="years">
			JEE 2019 MAINS
			</div>
			

			</div>
			<div className="question-years">
			<div className="years">
			JEE 2019 MAINS
			</div>
			

			</div>
			
			</div>
			<div className="options">
			<div className="option">
			
			<input type="checkbox"/>
			</div>
			<div className="option">

			</div>
			<div className="option">
			

</div>
<div className="option">

</div>


			</div>

			</div>
			<div className="ans_marking">
			<button>
			Mark For Review
			</button>
			<button>
			Next
			</button>

			</div>
			</div>

			<div className="marking col-lg-4 col-md-5 col-sm-6">

			</div>

			</div>

		
			</div>
		)
	}

}
export default Select_test;