import React from 'react';
import { Link } from "react-router-dom";

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
                className="button column is-centered"
                id="fluffyduck"            
            >
                Cancel Account
            </Link>
            <Link
                to="/requestdata"
                type="button"
                className="button column is-centered"
                id="fluffyduck"  
            >
                Data Request
            </Link>
            </div>
        </div>
        </>
    )
}

export default CancelRequestData;