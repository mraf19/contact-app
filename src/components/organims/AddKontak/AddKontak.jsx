import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addKontak,
  getListKontak,
  updateKontak,
} from "../../../actions/kontakAction";
import "./AddKontak.css";

function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();
  const { addKontakResult, detailKontakResult, updateKontakResult } =
    useSelector((state) => state.KontakReducer);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      dispatch(updateKontak({ id: id, name: nama, phoneNumber: nohp }));
    } else {
      dispatch(addKontak({ name: nama, phoneNumber: nohp }));
    }
  };

  useEffect(() => {
    dispatch(getListKontak());
    setNama("");
    setNohp("");
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    dispatch(getListKontak());
    setNama("");
    setNohp("");
    setId("");
  }, [updateKontakResult, dispatch]);

  useEffect(() => {
    setNama(detailKontakResult.name);
    setNohp(detailKontakResult.phoneNumber);
    setId(detailKontakResult.id);
  }, [detailKontakResult, dispatch]);

  return (
    <div className="contact-form">
      <p>{id ? "Update Contact" : "Add Contact"}</p>
      <form onSubmit={handleSubmit}>
        <input
          required
          className="input-card"
          type="text"
          name="name"
          placeholder="Name..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          required
          className="input-card"
          type="text"
          name="phoneNumber"
          placeholder="Phone Number..."
          value={nohp}
          onChange={(e) => setNohp(e.target.value)}
          pattern="^[0-9]*$"
        />
        <button type="submit">{id ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}

export default AddKontak;
