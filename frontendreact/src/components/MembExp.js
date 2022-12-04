import React from "react";
import { getFetch } from "../fetch";
function MembExp() {
  let email = sessionStorage.getItem("currentEmail");
  const isLoggedIn = email !== null && email !== "null";
  let ru = "";
  let expDate;

  // get user object by email

  // get membership expiration
  async function GetUserByEmail() {
    //
    ru = await getFetch("http://localhost:8080/RegisteredUser/" + email);
    return ru;
  }

  if (isLoggedIn) {
    GetUserByEmail();
  }
  expDate = ru.membershipExpiry;
  return (
    <div>
      {isLoggedIn && (
        <h1>Welcome, {email}. Your account is active until {expDate}</h1>
      )}
    </div>
  );
}

export default MembExp;
