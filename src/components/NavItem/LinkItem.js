import React from 'react';
import { NavLink } from 'react-router-dom';


const LinkItem = (props) => {

    return (
        <li className="nav-item">
            <NavLink to={props.path} exact={true} activeClassName="active" location={props.location} className="nav-link pl-3">{props.name}</NavLink>
        </li>
    );
}

export default LinkItem;