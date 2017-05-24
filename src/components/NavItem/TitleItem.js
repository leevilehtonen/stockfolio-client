import React from 'react';

const TitleItem = (props) => {
    return (
        <li className="nav-item mt-4">
            <span className="pl-3 text-muted">{props.title}</span>
        </li>
    );
}

export default TitleItem;