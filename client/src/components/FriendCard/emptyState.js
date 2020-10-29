import React from "react";
import { Link } from "react-router-dom";
import FriendImage from "../../images/friend.svg";

const EmptyFriendsMessage = () => {
  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child">
              <img src={FriendImage} id="find_friends"/>
            <p className="title is-4">Better Together</p>
            <p className="subtitle is-6">
              Oh, it looks like your friends list is empty.
            </p>
            <div className="content">
              <Link to="/findafriend" type="button" className="button" id="empty_state_button">
                Find More Friends
              </Link>
            </div>
          </article>
        </div>
        
      </div>
    </>
  );
};

export default EmptyFriendsMessage;
