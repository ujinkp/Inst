import React, { Component } from 'react';
import { Profile } from './Profile';
import { Images } from './Images';
import { Stories } from '../components/Stories';

export class Content extends Component {
    render() {
        return (
            
            <div className = 'content'>
                <Profile />
                <Stories/>
                <Images />
            </div>
            
        );
    }
}
