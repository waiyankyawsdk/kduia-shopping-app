import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const {expenses, location} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className="alert alert-primary">
            <span>CartValue: {location}</span>
            <span className="badge badge-secondary">Total Expenses: ${totalExpenses}</span>
        </div>
    );
};

export default CartValue;
