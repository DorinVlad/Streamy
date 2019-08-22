import axios from "axios";
import browserHistory from "../browserHistory";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await axios.post("/streams", { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  browserHistory.push("/");
};

export const fetchStreams = () => async dispatch => {
  const response = await axios.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await axios.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await axios.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  browserHistory.push("/");
};

export const deleteStream = id => async dispatch => {
  await axios.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  browserHistory.push("/");
};
