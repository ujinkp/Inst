import React, { Component } from 'react';
import stories from '../theme/assets/stories';
import { Story } from './Story';

export class Stories extends Component {
    render() {
        const storiesJSX = stories.map((story) => {
            return (
                <Story
                    key = { story.id }
                    message = { story.message }
                    src = { story.src }
                />
            );
        });

        return <div className = 'stories'>{storiesJSX}</div>;
    }
}
