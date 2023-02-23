import React from "react";
import { useState } from "react";


const Home = () => {

	//        ↓ variable name             ↓ default value
	const [color, setColor] = useState("red");
	//               ⬆ function to change the color
	
	return (
		

			<div className="trafficLight">
				<div onClick={()=>setColor("red")} className={"light red" + ((color === "red") ? " bright": "")}></div>
				<div onClick={()=>setColor("yellow")} className={"light yellow"+ ((color === "yellow") ? " bright": "")}></div>
				<div onClick={()=>setColor("green")} className={"light green"+ ((color === "green") ? " bright": "")}></div>
			</div>

		
	);
};

export default Home;
