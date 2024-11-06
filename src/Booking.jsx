//New Booking
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hotel from './Hotel.jsx' ;
import { Link } from 'react-router-dom';
import {PlaneAlt,CarBus,HomeLocation} from 'react-flaticons';
export default function NewBooking(){
    return(
        <div className="containerDiv bookings booking">
            <Routes>
                <Route path="/bookings/hotel" element={<Hotel />} />
                {/* Other nested routes */}
            </Routes>
            {/* <h3><ul className="linearAlignedList">
                <li><HomeLocation/><Link to="/booking/hotel"> Hotels</Link></li>
                <li><CarBus/> Cabs</li>
                <li><PlaneAlt/> Flights</li>
            </ul></h3> */}
            <table >
               <tr><td><HomeLocation/><Link to="/booking/hotel">Hotels</Link></td></tr>
                    <tr><td><CarBus/> Cabs</td></tr>
                    <tr><td><PlaneAlt/> Flights</td></tr>
            </table>
        </div>
    );
}