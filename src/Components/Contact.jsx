import {useState} from "react";
import {useForm} from "react-hook-form";
import useStore from "../Stores/Guestlist";
import React from "react";
import axios from "axios";

const GuestForm = () => {
    const { register, handleSubmit, reset } = useForm();
  
    const onSubmit = async (data) => {
      try {
        await axios.post('http://localhost:5000/api/guests', data);
        alert('Guest added successfully!');
        reset(); // Clear the form after submission
      } catch (error) {
        console.error('Error saving guest:', error);
        alert('Failed to save guest. Please try again.');
      }
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name: </label>
          <input {...register('name', { required: true })} />
        </div>
        <div>
          <label>Party Of: </label>
          <input type="number" {...register('partyOf', { required: true })} />
        </div>
        <div>
          <label>Allergies: </label>
          <input {...register('allergies')} />
        </div>
        <button id="submit-button" type="submit">Add Guest</button>
      </form>
    );
  };
  
  export default GuestForm;

