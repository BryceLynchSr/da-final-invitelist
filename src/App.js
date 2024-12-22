import './App.css';
import Userlist from './Pages/ListMongo';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import GuestList from './Pages/ListMongo';
import GuestForm from './Components/Contact';



function App() {
  return (

    <div className="MainPage">
      <h1>Guest Invite Form</h1>
      <div className='InviteForm'>
      <GuestForm />
      </div>
      <div className='Main-Guestlist'>
      <GuestList />
      </div>
    </div>
    
  )
}

export default App;
