import React from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import UploadImg from "./UploadImg";
import "../Styles/Host.css";

const Host = () => {
  const handleForm = (form, e) => {
    // e.preventdefault();
  };

  return (
    <form onClick={(e) => handleForm(e)}>
      <UploadImg />
      {/* <FormControl onClick={(e) => handleForm(e)}>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl> */}

      <label>
        Full Name:
        <input className="input" type="text" name="name" required />
      </label>
      <label>
        State:
        <input className="input" type="text" name="state" required />
      </label>
      <label>
        City:
        <input className="input" type="text" name="city" required />
      </label>
      <label>
        Address:
        <input className="input" type="text" required />
      </label>
      <label>
        Details:
        <textarea required />
      </label>
      <label>
        Price (₹/night):
        <input className="input" type="number" required />
      </label>
      <Button
        variant="contained"
        color="primary"
        style={{ textTransform: "inherit" }}
      >
        Add your listing
      </Button>
    </form>
  );
};

export default Host;
