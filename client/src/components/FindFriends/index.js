import React, { useState } from 'react';
import './style.css';
import FindNewFriends from '../FindNewFriends';
import SearchMyFriends from '../SearchMyFriends';

function FindFriends () {

    return(
        <>
            <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                    <div className="tile is-10 container column is-fluid" id="mobile_padding_removal">
                        <div className="tile  is-vertical is-parent" id="wallet">
                            <div className="tile is-child has-text-centered">
                            <p className="title">Search for new friends</p>
                                <FindNewFriends/> 

                            </div>
                            </div>
                        </div>
                    </div>
                </div>              
        </>
    );
}

export default FindFriends; 