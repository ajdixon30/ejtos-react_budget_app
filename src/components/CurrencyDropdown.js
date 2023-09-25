import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    
    return (
        <div className="alert alert-success text-success">
            <label htmlFor="currency">Currency:&nbsp;</label>
            <select className="bg-success bg-opacity-25" name="currency" onChange={e => dispatch({type:'CHG_CURRENCY', payload: e.target.value})}>
                <option value={String.fromCharCode(0x0024)}>$ Dollar</option>
                <option value={String.fromCharCode(0x00A3)} selected>&pound; Pound</option>
                <option value={String.fromCharCode(0x20AC)}>&euro; Euro</option>
                <option value={String.fromCharCode(0x20B9)}>&#8377; Rupee</option>
            </select>
        </div>
    )
}

export default CurrencyDropdown;