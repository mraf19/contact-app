import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteKontak,
  detailKontak,
  getListKontak,
} from "../../../actions/kontakAction";
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
      {getListKontakResult.length ? (
        getListKontakResult.map((kontak, index) => {
          return (
            <div key={`contact-${index}`} className="contact-card">
              <p className="name">Name: {kontak.name}</p>
              <p className="phone">Phone: {kontak.phoneNumber}</p>
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
        <h2>
          {" "}
          {getListKontakError ? getListKontakError : "You have no contact"}
        </h2>
      )}
    </div>
  );
}

export default ListKontak;
