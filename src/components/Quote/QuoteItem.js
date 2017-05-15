import React from 'react';

const QuoteItem = (props) => {
        return (
            <tr>
                <th scope="row">{props.number+1}</th>
                <td>{props.symbol}</td>
                <td>{props.name}</td>
                <td>{props.type}</td>
                <td>{props.se}</td>
                <td>{props.cat}</td>
            </tr>
        );
    
}

export default QuoteItem;