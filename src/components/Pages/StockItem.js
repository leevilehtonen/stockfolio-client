import React from 'react';
import { Button } from 'reactstrap';

const StockItem = (props) => {
    return (
        <tr>
            <th className='quote-result-table-th' onClick={handleClick} scope="row">{props.number + 1}</th>
            <td className='quote-result-table-td' onClick={handleClick}>{props.symbol || 'No data'}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{props.name || 'No data'}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{props.ask || 'No data'}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{props.bid || 'No data'}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{props.close || 'No data'}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{props.change || 'No data'}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{(props.changeInPercent) ? (props.changeInPercent.toFixed(4)) : 'No data'}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{props.dividend || 'No data'}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{props.amount || 'No data'}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{(props.value) ? (props.value.toFixed(2)) : 'No data'}</td>
            <td className='quote-result-table-td' onClick={handleClick}>{props.se || 'No data'}</td>

            <td className='quote-result-table-td'>
                <Button color="info" size="sm" className='btn-block' onClick={handleClick}>Info</Button>
            </td>
            <td className='quote-result-table-td'>
                <Button color="danger" size="sm" className='btn-block' onClick={handleDeleteClick}>Delete</Button>
            </td>

        </tr>
    );
    function handleDeleteClick(e) {
        props.deleteStock(props.id);
    }
    function handleClick(e) {
        props.openQuote(props.symbol);
    }
}

export default StockItem;