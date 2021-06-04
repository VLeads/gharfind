import React from "react";
import { Button } from "@material-ui/core";
import UploadImg from "./UploadImg";
import "../Styles/Host.css";

const Host = () => {

    const handleForm = (form, e) => {
        // e.preventdefault();
    }

    return (
        <form onClick={(e) => handleForm(e)}>
           
            <UploadImg />

            <label>Full Name: 
                <input type="text" name="name" required/>
            </label>
            <label>State: 
                <input type="text" name="state" required/>
            </label>
            <label>City: 
                <input type="text" name="city" required/>
            </label>
            <label>Address: 
                <input type="text" required/>
            </label>
            <label>Details: 
                <textarea required/>
            </label>
            <label>Price (₹/night): 
                <input type="number" required/>
            </label>
            <Button variant='contained' 
                color="primary" 
                style={{textTransform: 'inherit'}}
            >
                Add your listing
            </Button>
        </form>
    )
}

export default Host
