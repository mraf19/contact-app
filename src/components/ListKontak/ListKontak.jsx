import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteKontak,
	detailKontak,
	getListKontak,
} from "../../actions/kontakAction";
import "./ListKontak.css";

function ListKontak() {
	const {
		getListKontakLoading,
		getListKontakResult,
		getListKontakError,
		deleteKontakResult,
	} = useSelector((state) => state.KontakReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getListKontak());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getListKontak());
	}, [deleteKontakResult, dispatch]);
	return (
		<div className="contact-list">
			<h3>My Contact List</h3>
			{getListKontakResult ? (
				getListKontakResult.map((kontak) => {
					return (
						<div className="contact-card">
							<p className="name" key={kontak.id}>
								Name: {kontak.nama}
							</p>
							<p className="phone" key={kontak.id}>
								Phone: {kontak.nohp}
							</p>
							<button
								className="btn-delete"
								onClick={() => dispatch(deleteKontak(kontak.id))}
							>
								DELETE
							</button>
							<button
								className="btn-update"
								onClick={() => dispatch(detailKontak(kontak))}
							>
								UPDATE
							</button>
						</div>
					);
				})
			) : getListKontakLoading ? (
				<p>Loading....</p>
			) : (
				<p>
					{" "}
					{getListKontakError ? getListKontakError : "You have no contact"}
				</p>
			)}
		</div>
	);
}

export default ListKontak;
