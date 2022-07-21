import axios from "axios";

export default function FetchPisos() {
  return (
    axios.get(`${process.env.REACT_APP_URL}/pisos`).then((response) => {
      console.log(response.data);
    }),
    []
  );
}
console.log(FetchPisos);
