import { useEffect } from "react";

const UsePut = async (url, bodyItem) => {
  let response;
  console.log(url, bodyItem);
  await fetch(url, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(bodyItem)
  })
    .then((res) => res.json())
    .then((data) => (response = data));
  return response;
};

export default UsePut;
