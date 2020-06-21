import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';



export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('0');
    const { addTransaction} = useContext(GlobalContext);
    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}> 
        <div className="form-control">
          <label htmlFor="text">Please Enter Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Please Enter Amount <br />
            (Negative -) For Expenses,  (Positive +) For Income</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} 
          placeholder="Enter amount..." />
        </div>
        <button class="btn">Add Transaction</button>
      </form>
    </>
        
    )
}

export default AddTransaction;