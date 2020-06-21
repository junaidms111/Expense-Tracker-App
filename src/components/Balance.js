import React, {useContext} from 'react'
import GlobalContxt, { GlobalContext } from '../context/GlobalState';
export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4 className="balance">Your Balance</h4>
    <h1 className="balance">${total}</h1>
        </>
    )
}

export default Balance;
