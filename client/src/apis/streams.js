import axios from "axios";

const PORT = process.env.REACT_APP_PORT || 4000;

export default axios.create({
  baseURL: `http://localhost:${PORT}`
});
