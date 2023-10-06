import './main.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './content.css';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/fa";

function Admin() {
  function open() {
    document.getElementById('mySidebar').style.display = 'block';
  }

  function close() {
    document.getElementById('mySidebar').style.display = 'none';
  }

  return (
    <>
        <div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left sidebar" style={{ width: '200px' }} id="mySidebar">
            <button className="w3-bar-item w3-button w3-large w3-hide-large" onClick={close}>
            <AiFillCloseCircle/>
            </button>
            <h1 className='Admin'>Admin</h1>
            <Link to="/admin" className="w3-bar-item w3-button">
            Link 1
            </Link>
            <Link to="/users" className="w3-bar-item w3-button">
            Link 2
            </Link>
            <Link to="/try" className="w3-bar-item w3-button">
            Link 3
            </Link>
        </div>

         <div className="w3-main" style={{ marginLeft: '200px' }}>
            <div className="w3-teal">
                <button className="w3-button w3-teal w3-xlarge w3-hide-large" onClick={open}>
                    &#9776;
                </button>
                <div className="w3-container nav">
                    <div className='image'></div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Admin;