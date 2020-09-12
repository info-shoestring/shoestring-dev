import React, { useEffect } from 'react';
import './style.css';
import $ from 'jquery';

function ContactForm() {
    
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
                    <p className="title is-4" id="formTitle">Contact us</p>
                        <form action="https://formspree.io/mrgkrawy" method="POST" target="_blank" id='myForm'>
                            <div className="field" id="contact_me">
                                <p className="control">
                                    <input className="input" type="text" name="_replyto" placeholder="Email" />
                                </p>
                            </div>

                            <div className="field">
                                <p className="control">
                                    <input className="input" type="text" name="name" placeholder="Name" />
                                </p>
                            </div>
                            <textarea className="textarea" name="message" placeholder="Leave your comments . . .">
                            </textarea>
                            <br />
                            <div className="field">
                                <p className="control">
                                    <button className="button is-light" onClick={useEffect} type="submit" id="contactMe">
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

export default ContactForm;