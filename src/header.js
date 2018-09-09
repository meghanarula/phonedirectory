import React, { Component } from 'react';
import Contact from './contacts';

class Header extends Component{
    render() {
        return (
            <div className="headerBody">
                <div className="header-top">
                <div className="edit">Edit</div>
                <div className="contact">Contacts</div>
                <div className="plus">+</div>
                </div> 
                <div className="input">
                    <input placeholder="Search Contact" ></input>
                </div>
                <Contact/>
            </div>
        );
    }


}
export default Header;