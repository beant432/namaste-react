import React from 'react'
import UserClass from './UserClass.js';
import { Component } from 'react';
class AboutUs extends Component {
    constructor(props) {
        super(props);
        console.log('parent constuctor called')
    }
     componentDidMount() {
        // use to call api call
         console.log('parent comoponent did mount called');
    }
    render() {
        console.log('parent render called')
        return (
            <div>
                <h1>About US</h1>
                {/* <User name={"Beant function "} location={"surrey"} /> */}
                <UserClass name={"Beant classs"} location={"surrey"} />
            </div>
        )
    }
}

export default AboutUs;
