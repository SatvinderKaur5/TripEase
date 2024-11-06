import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyBooking from './MyBooking.jsx'; // Import your components
import About from './About.jsx';
import Home from './Home.jsx';
import Blogs from './blogs.jsx';
import Hotel from './Hotel.jsx';
import Booking from './Booking.jsx';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myBooking" element={<MyBooking />} />
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/booking/hotel" element={<Hotel />} />
       

        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}
