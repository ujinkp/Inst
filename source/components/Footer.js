import React, { Component } from 'react';
import links from '../theme/assets/links';

export class Footer extends Component {
    COPYRIGHT_SYMBOL = String.fromCodePoint(169);
    CURRENT_YEAR = new Date().getFullYear();

    render() {
        const linksJSX = links.map((link) => {
            return <li key = { link.id }>{link.message}</li>;
        });

        return (
            <div className = 'footer'>
                <ul>{linksJSX}</ul>
                <span>
                    {this.COPYRIGHT_SYMBOL} {this.CURRENT_YEAR} Instagram
                </span>
            </div>
        );
    }
}