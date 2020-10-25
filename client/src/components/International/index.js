import React from "react";

const InternaionalProfile = () => {
  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title is-4">Funds Available:</p>
            <p className="title is-2 has-text-centered">
              $ {currentUserObj.balance}
            </p>
            <hr />
            <p className="subtitle is-6" id="member">
              Member Since: {createdDate}
            </p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title is-4">Funds Sent</p>
            <p className="title is-2 has-text-centered">
              $ {currentUserObj.balance}
            </p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title is-4">Funds Received</p>
            <p className="title is-2 has-text-centered">
              $ {currentUserObj.balance}
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default InternaionalProfile;
