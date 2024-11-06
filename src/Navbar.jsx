import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="#">TripEase</a>

            <ul >
                <li><Link to="/myBooking">My Bookings</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>


        </div>
    );
}