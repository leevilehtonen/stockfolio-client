import React from 'react';

import LinkItem from './LinkItem';
import TitleItem from './TitleItem';

const NavItem = (props) => {

    const isLink = props.link;
    if (isLink) {
        return <LinkItem  {...props}/>
    } else {
    return <TitleItem {...props}/>;
    }

}


export default NavItem;