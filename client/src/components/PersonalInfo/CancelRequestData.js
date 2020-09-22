import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

const CancelRequestData = () => {
    return (
        <>
        <div>
            <p className="subtitle" id="formTitle">
                Cancel your Account or Request your Personal Data
            </p>
            <div className="columns">
            <Link
                to="/cancelaccount"
                type="button"
                className="button column is-two-fifths is-centered"
                id="cancel_btn"            
            >
                Cancel Account
            </Link>
            <Link
                to="/requestdata"
                type="button"
                className="button column is-two-fifths is-centered"
                id="request_btn"  
            >
                Data Request
            </Link>
            </div>
        </div>
        </>
    )
}

export default CancelRequestData;