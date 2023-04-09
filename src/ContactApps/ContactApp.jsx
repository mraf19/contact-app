import React from "react";
import { ListKontak, AddKontak } from "./components";

function ContactApp() {
	return (
		<div style={{ padding: "10px 30px 30px 30px" }}>
			<h1 style={{ fontSize: "36px" }}>Contact App</h1>
			<hr />
			<AddKontak />
			<hr />
			<ListKontak />
		</div>
	);
}

export default ContactApp;
