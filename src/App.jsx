import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // console.log(formData);
  const submitHandler = (e) => {
    e.preventDefault();
    // const { firstName, lastName, phoneNumber, email } = formData;
    // console.log(firstName, lastName, phoneNumber, email);
    <div>
      <li>{formData}</li>
    </div>;
    // console.log(formData);
  };

  return (
    <>
      <header>
        <h2 class="header">PHONE BOOK</h2>
      </header>
      <form onSubmit={submitHandler} class="main">
        <div class="name-family">
          <div>
            <label htmlFor="phone-number">Please Enter your First Name: </label>
            <input
              type="text"
              class="first-name"
              value={formData.firstName}
              onChange={changeHandler}
              name="firstName"
            />
          </div>
          <div>
            <label htmlFor="phone-number">Please Enter your Last Name: </label>
            <input
              type="text"
              class="last-name"
              value={formData.lastName}
              onChange={changeHandler}
              name="lastName"
            />
          </div>
        </div>
        <div class="phonenumber-email">
          <div>
            <label htmlFor="phone-number">
              Please Enter your Phone Number:{" "}
            </label>
            <input
              type="text"
              class="phone-number"
              value={formData.phoneNumber}
              onChange={changeHandler}
              name="phoneNumber"
            />
          </div>
          <div>
            <label htmlFor="phone-number">
              Please Enter your Email address:{" "}
            </label>
            <input
              type="text"
              class="email"
              value={formData.email}
              onChange={changeHandler}
              name="email"
            />
          </div>
        </div>
        <button type="submit" class="btn-add">
          Add
        </button>
      </form>
      <div class="show-data">
        {/* <p>{submitHandler.e ? "first name: " + formData.firstName : ""}</p>
        <p>{submitHandler.e ? formData.lastName : ""}</p>
        <p>{submitHandler.e ? formData.phoneNumber : ""}</p>
        <p>{submitHandler.e ? formData.email : ""}</p> */}
        {/* <p>{submitHandler.e && submitHandler}</p> */}
        {/* <ol>{formData.firstName && submitHandler}</ol> */}
      </div>
    </>
  );
}

export default App;
