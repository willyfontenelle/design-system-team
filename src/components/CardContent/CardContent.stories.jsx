import React from 'react';
import { CardContent as CardContentComponent } from '.';

export default {
    title: 'Team Component/Card Content',
    component: CardContentComponent
}

const Template= (args) => {
    return (
        <div style={{
            width: '315px',
            height: '417px'
        }}>
            <CardContentComponent { ...args } />
        </div>
    )
}

export const CardContent = Template.bind({});

CardContent.args = {
    tagContent: 'Tag Hightlight',
    headingContent: 'Heading',
    paragraphContent: "Lorem ipsum dolor sit amet consectetur adipiscing."
}