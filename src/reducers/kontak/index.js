import {
	GET_LIST_KONTAK,
	ADD_KONTAK,
	DELETE_KONTAK,
	DETAIL_KONTAK,
	UPDATE_KONTAK,
} from "../../actions/kontakAction";

const initialState = {
	getListKontakResult: false,
	getListKontakLoading: false,
	getListKontakError: false,

	addKontakResult: false,
	addKontakLoading: false,
	addKontakError: false,

	deleteKontakResult: false,
	deleteKontakLoading: false,
	deleteKontakError: false,

	detailKontakResult: false,

	updateKontakResult: false,
	updateKontakLoading: false,
	updateKontakError: false,
};

const KontakReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST_KONTAK:
			return {
				...state,
				getListKontakLoading: action.payload.loading,
				getListKontakResult: action.payload.data,
				getListKontakError: action.payload.errorMessage,
			};
		case ADD_KONTAK:
			return {
				...state,
				addKontakLoading: action.payload.loading,
				addKontakResult: action.payload.data,
				addKontakError: action.payload.errorMessage,
			};
		case DELETE_KONTAK:
			return {
				...state,
				deleteKontakLoading: action.payload.loading,
				deleteKontakResult: action.payload.data,
				deleteKontakError: action.payload.errorMessage,
			};
		case DETAIL_KONTAK:
			return {
				...state,
				detailKontakResult: action.payload.data,
			};
		case UPDATE_KONTAK:
			return {
				...state,
				updateKontakLoading: action.payload.loading,
				updateKontakResult: action.payload.data,
				updateKontakError: action.payload.errorMessage,
			};
		default:
			return state;
	}
};

export default KontakReducer;
