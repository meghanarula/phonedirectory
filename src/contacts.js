import React, { Component } from 'react';
import './footer.css';

class Contact extends Component {
    constructor(){
        super();
        this.state={
            contact:[
                {
                    name:'ape',
                    phone:123456789
                },
                
                {
                    name:'bear',
                    phone:123456789
                },
                {
                    name:'chamelion',
                    phone:123456789
                },
                {
                    name:'donkey',
                    phone:123456789
                },
                {
                    name:'mogli',
                    phone:123456789
                },
            ]
        };
    }
    render() {
        return (
            <div className="contactBody">
                <div className="bodyDiv" id="name">
                <h1>Names</h1>
                <div className="dispName">
                <ul>
                    {this.state.contact.map((n,i)=>{
                        return(
                            <li key={i}>
                            {n.name}
                            </li>
                        )  
                    })             
                    }
                </ul>
                </div>
                <div className="alpha">A</div><br></br>
                <div className="nameDisp">Ape</div>
                <div className="alpha">B</div><br></br>
                <div className="nameDisp">Bhavya</div>

                <div className="alpha">C</div><br></br>
                <div className="nameDisp">Chamelion</div>

                <div className="alpha">D</div><br></br>
                <div className="nameDisp">Donkey</div>

                <div className="alpha">M</div><br></br>
                <div className="nameDisp">Mogli</div>

                </div>
                <div className="bodyDiv" id="phone">
                <h1>Phone no.</h1></div>
                <div></div>
                <Footer/>

                </div>


        );
    }
}
export default Contact;