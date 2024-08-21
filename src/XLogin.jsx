import { useState } from "react";

export default function XLogin() {
  let [data, setData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  function handleInput(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    if (data.username === "user" && data.password === "password") {
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          USERNAME:
          <input
            type="text"
            placeholder="username"
            required
            name="username"
            onChange={handleInput}
          />
        </label>
        <br />
        <label>
          PASSWORD:
          <input
            type="password"
            placeholder="password"
            required
            name="password"
            onChange={handleInput}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}
