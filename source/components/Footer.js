import React, { Component } from 'react';
import links from '../theme/assets/links';

export class Footer extends Component {
    render() {
        const linksJSX = links.map((link) => {
            return (
                <link
                    key = { link.id }
                    message = { link.message }
                />
            );
        });

        return (
            <div className = 'footer'>
                <div className = 'ul'>
                    <div className = 'li'>{linksJSX}</div>
                </div>
                <div className = 'span'/>
            </div>
        );
    }
}
