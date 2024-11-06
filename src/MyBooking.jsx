import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hotel from './Hotel.jsx';
import { Link } from 'react-router-dom';
import './MyBooking.css';
import Booking from './Booking.jsx';

const noOfBookings = 0;
export default function MyBooking() {
    return (
        <div className="containerDiv bookings">
            <h1 className="bookingsHeading">My Bookings</h1>
            {noOfBookings===0 ? <NoBookings/>: <Booking/>}
            <div ><Link to="/booking"><button className="newBookingButton">+</button></Link></div>           
        </div>
    );
}

function NoBookings(){
    return(
        <div>
            <h4>No Bookings yet :/ </h4>
        </div>
    );
}

