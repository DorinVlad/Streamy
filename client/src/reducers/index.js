import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamsReducer from "./streamsReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer
});

// NOTES

/* When wiring up the reducer from our redux-form library, we are required to add It to a key of form */
