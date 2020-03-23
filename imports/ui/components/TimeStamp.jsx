import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'
import moment from 'moment-timezone';
import { UncontrolledTooltip } from 'reactstrap';

export default class TimeStamp extends Component{
    constructor(props){
        super(props);
        this.ref = React.createRef();
    }

    render(){
        let formatDate = "MMM DD, YYYY";
        let formatTime = "h:mm:ss A z";
        let timezone = moment.tz.guess()
        let time = moment.utc(this.props.time);
        return <span>
            <span ref={this.ref}>{time.tz(timezone).format(formatDate)} at {time.tz(timezone).format(formatTime)}</span>
            <UncontrolledTooltip placement='bottom' target={this.ref}>
                {time.tz(timezone).format(formatDate)} at {time.tz(timezone).format(formatTime)}
            </UncontrolledTooltip>
        </span>

    }
}