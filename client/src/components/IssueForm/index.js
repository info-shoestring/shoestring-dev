import React, { useEffect } from 'react';
import $ from 'jquery';
// import './style.css'

function IssueForm () {
    
    useEffect (() => {
        $("#contactMe").click(function (){
            window.location.reload();
        })
    })
    
    return (
        <>
        <div id="terry"></div>
        <div className="tile is-ancestor">
            <div className="tile is vertical is-7 box" id="tile">
                <div className="tile is-parent">
                    <article className="tile is-child notification is-dark">
                    <p className="title" id="formTitle">Report an issue</p>
                        <form action="https://formspree.io/xlenawyq" method="POST" target="_blank" id='myForm'>
                            <div className="field" id="contact_me">
                                <p className="control has-icons-left">
                                    <input className="input" type="text" name="_replyto" placeholder="Email" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </p>
                            </div>
                            <div>
                            </div>    
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="text" name="name" placeholder="Name" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-portrait"></i>
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="text" name="message" placeholder="Is your issue in the mobile app or web dashboard?"/>
                                    <span className="icon is-small is-left">
                                    <i className="fas fa-question-circle"></i>
                                    </span>

                                </p>

                            </div>
                            <textarea className="textarea" name="message" placeholder="Tell us about your issue">
                            </textarea>
                            <br />
                            <div className="field">
                                <p className="control">
                                    <button className="button is-light" type="submit" id="contactMe">
                                        Submit
                                        </button>
                                </p>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        </div>
        </>
    );
}

export default IssueForm;