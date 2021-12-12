import React, { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import axios from "axios";
const SignUp = () => {
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    const data = {
      phone: phone,
      email: email,
      password: password,
      name: name,
      address: address,
    };
    console.log("data----->",data)
    await axios({
      method: "post",
      url: "http://localhost:8080/registration",
      data: data,
    });
  };
  return (
    <>
      <form onSubmit={(e) => handleForm(e)}>
        <h3>Register</h3>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder=" name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            className="form-control"
            placeholder="Enter phone"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <Autocomplete
            apiKey={"AIzaSyAolXVBph__8LXk - JukgnxDUI4LPDQAsxQ"}
            onPlaceSelected={(place) => setAddress(place)}
          />
        </div>

        {/* <input type="email" className="form-control" placeholder="Enter address" /> */}

        <div className="form-group">
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">log in?</a>
        </p>
      </form>
    </>
  );
};

export default SignUp;
