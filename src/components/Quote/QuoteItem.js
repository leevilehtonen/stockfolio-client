import React from 'react';

const QuoteItem = (props) => {
        return (
            <tr onClick={handleClick}>
                <th className='quote-result-table-th' scope="row">{props.number+1}</th>
                <td className='quote-result-table-td'>{props.symbol}</td>
                <td className='quote-result-table-td'>{props.name}</td>
                <td className='quote-result-table-td'>{props.type}</td>
                <td className='quote-result-table-td'>{props.se}</td>
                <td className='quote-result-table-td'>{props.cat}</td>
            </tr>
        );

        function handleClick(e) {
            props.openQuote(props.symbol);
        }
}

export default QuoteItem;