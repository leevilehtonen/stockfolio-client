import React from 'react';

import LinkItem from './LinkItem';
import TitleItem from './TitleItem';

const NavItem = (props) => {
    if (props.link) {
        return <LinkItem  {...props} />
    } else {
        return <TitleItem {...props} />;
    }
}
export default NavItem;