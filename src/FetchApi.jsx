import { useEffect, useState } from "react";
function FetchApi() {
  const [Characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchMyApi() {
      let response = await fetch("https://thronesapi.com/api/v2/Characters");
      response = await response.json();
      setCharacters(response);
    }
    fetchMyApi();
  }, []);
  return Characters
}
export default FetchApi;
