import React from 'react'
import PropTypes from 'prop-types'
import "./navbar.css"
// import { Link } from "react-router-dom";

const NavBar = (props) => {
    let greenbtn = () => {
        document.body.style.background = "green"
        props.setalert("Green mode Enabled", "success ")
    }
    let orangebtn = () => {
        document.body.style.background = "orange"
        props.setalert("Orange mode Enabled", "success ")
    }

    let pinkbtn = () => {
        document.body.style.background = "pink"
        props.setalert("Pink mode Enabled", "success ")
    }
    return (
        <>
            {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-3`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TextUtils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li> 
                        </ul>
                        <div className='flex gap-2 aic'>
                            <div onClick={greenbtn} className='mr-5 green-circle'></div>
                            <div onClick={orangebtn} className='mr-5 orange-circle'></div>
                            <div onClick={pinkbtn} className='mr-5 pink-circle'></div>
                            <div className="form-check form-switch position-relative">
                                <input className="position-absolute top-27 form-check-input end-100" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toogleMode} />
                                <div>
                                    <strong> Enable Dark Mode </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}
           <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-3`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TextUtils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <div className='flex gap-2 aic rightsidenav'>
                            <div onClick={greenbtn} className='mr-5 green-circle'></div>
                            <div onClick={orangebtn} className='mr-5 orange-circle'></div>
                            <div onClick={pinkbtn} className='mr-5 pink-circle'></div>
                            <div className="form-check form-switch position-relative">
                                <input className="position-absolute top-27 form-check-input end-100" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toogleMode} />
                                <div className='EnableDM'>
                                    <strong> Enable Dark Mode </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar

NavBar.propTypes = {
    title: PropTypes.string.isRequired
}

NavBar.defaultProps = {
    title: "Set title here"
}