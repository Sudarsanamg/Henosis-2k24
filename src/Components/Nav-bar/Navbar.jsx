import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="container">
    <div className='row mt-4'>
        <div className="col-12 col-md-4">
            <img  className='image-fluid w-50 h-20'  src="src\Images\NGPitech.png" alt="" />
        </div>
        <div className="col">
        <nav className='mt-2'>
            <ul className='list-inline d-flex justify-content-between'>
                <li  className='list-inline-item'><a href="#">Events</a></li>
                <li  className='list-inline-item'><a  href="#">Paper Presentations</a></li>
                <li  className='list-inline-item'><a   href="#">Workshop</a></li>
                <li  className='list-inline-item'><a href="#">FAQs</a></li>
                <li id='nav' className='list-inline-item'><a     href="#">Contact Us</a></li>
            </ul>
        </nav>
        </div>
    </div>
    </div>
  )
}

export default Navbar