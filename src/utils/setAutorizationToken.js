import axios from "axios";

export default function setAuterizationToken(token) {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`);
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
