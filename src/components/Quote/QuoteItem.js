import React from 'react';
import { Button } from 'reactstrap';

const QuoteItem = (props) => {
    return (
        <tr>
            <th className='quote-result-table-th' onClick={handleClick} scope="row">{props.number + 1}</th>
            <td className='quote-result-table-td' onClick={handleClick}>{props.symbol}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{props.name}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{props.type}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{props.se}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{props.cat}</td>
            <td className='quote-result-table-td'>
                <Button color="info" size="sm" className='btn-block' onClick={handleClick}>Info</Button>
            </td>
            <td className='quote-result-table-td'>
                <Button color="primary" size="sm" className='btn-block' onClick={handleAddClick}>Add</Button>
            </td>

        </tr>
    );
    function handleAddClick(e) {
        props.addStock(props.symbol, props.name);
    }
    function handleClick(e) {
        props.openQuote(props.symbol);
    }
}

export default QuoteItem;