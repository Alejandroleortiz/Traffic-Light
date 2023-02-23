import React from "react";
import { useState } from "react";


const Home = () => {

	//        ↓ variable name             ↓ default value
	const [color, setColor] = useState("");
	//               ⬆ function to change the color

	const [colorIndice, setColorIndice] = useState(0); // Definimos un nuevo state, pero en este caso para demarcar posicion en el array

	const colores = ["red", "yellow", "green"];

	const cambiarColor = () => {
	  const newIndice = (colorIndice + 1) % colores.length; // Asignamos el recorrido del array por medio de la funcion
	  setColorIndice(newIndice); //establecemos el parametro que recibe el metodo
	  setColor(colores[newIndice]); // asignamos el estado creado para seleccionar el alumbrado de las luces, para de esta manera se ejecute en el boton
	};

	return (

		<>
			<div className="centrado">
				<div className="cable"></div>
				<div className="trafficLight">
					<div onClick={() => setColor("red")} className={"light red" + ((color === "red") ? " bright" : "")}></div>
					<div onClick={() => setColor("yellow")} className={"light yellow" + ((color === "yellow") ? " bright" : "")}></div>
					<div onClick={() => setColor("green")} className={"light green" + ((color === "green") ? " bright" : "")}></div>
				</div>
			</div>
			<div class="d-grid col-2 mx-auto">
				<button onClick={cambiarColor} class="btn btn-primary my-5" type="button">Cambiar Color</button>
			</div>

		</>
	);
};

export default Home;
