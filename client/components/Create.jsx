import { useState } from "react";

const [userName, changeUserName] = useState("");
const [password, changePassword] = useState("");

function userNameHandler(e) {
  changeUserName(e.target.value);
}

function passwordHandler(e) {
  changePassword(e.target.value);
}

function clickHandler() {
  // if (userName === "" || typeof userName !== String )
  // if (password === "" || typeof password !== String )
  const body = { userName, password };

  fetch("/api/create", {
    method: POST,
    Headers: { "Content-Type": "application/json" },
    body: json.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .then(() => {})
    .catch((err) => console.log("Creating newUser", err));
}

export default function Create() {
  return (
    <div>
      <p>Login</p>
      <label>
        User Name
        <input
          type="text"
          id="name"
          //value={userName}
          onChange={userNameHandler}
        />
      </label>
      <label>
        Password
        <input
          type="text"
          id="user"
          //value={userName}
          onChange={passwordHandler}
        />
      </label>
      <button onClick={clickHandler}>Login</button>
    </div>
  );
}
