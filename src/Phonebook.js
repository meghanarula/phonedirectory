import React, { Component } from 'react';


class Phonebook extends Component {
    constructor(){
        super();
        this.state={
            contact:[
                {
                    name:'ape',
                    phone:'123456789'
                },
                
                {
                    name:'bear',
                    phone:'123456789'
                },
                {
                    name:'chamelion',
                    phone:'123456789'
                },
                {
                    name:'donkey',
                    phone:'123456789'
                },
                {
                    name:'mogli',
                    phone:'9999999990'
                },
            ],
            original_names:[],
        };
    }
    componentDidMount(){
        this.setState({
          original_names:this.state.contact.slice()
        });
    }
    search=(event)=>{
        let v1=event.target.value;
        let n= this.state.original_names.slice();
        n = n.filter(function(v){
            return(
                v.name.toLowerCase().includes(v1.toLowerCase())
                ||
                v.phone.includes(v1)
            );
        });
        this.setState({
            contact:n
        });
    }
    render() {
        return (
            <div>
                <div className="headerBody">
                    <div className="header-top">
                        <div className="edit">Edit</div>
                        <div className="contact">Contacts</div>
                        <div className="plus">+</div>
                    </div>
                    <div className="input">
                        <input placeholder="Search Contact" onKeyUp={(event)=>{this.search(event)}}></input>
                    </div>
                    
                </div>
                <div className="contactBody">
                    <div className="bodyDiv" id="name">
                        <h1>Names</h1>
                        <div className="dispName">
                            <ul>
                                {this.state.contact.map((n, i) => {
                                    return (
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
                        <h1>Phone no.</h1>
                        <div className="dispPhone">
                        <ul>
                            {
                                this.state.contact.map((n, i) => {
                                return (
                                    <li key={i}>
                                        {n.phone}
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div></div>
                    <div></div>
                    

                </div>
                <div className="footerBody">
                    <div className="footerDiv" id="Phone" >
                        Phone
                    </div>
                    <div className="footerDiv" id=" Contacts  ">
                        Contacts
                    </div>
                    <div className="footerDiv" id="Groups"   >
                        Groups
                    </div>
                    <div className="footerDiv" id="Personal">
                        Personal
                    </div>
                </div>
            </div>
        );
    }
}
export default Phonebook;