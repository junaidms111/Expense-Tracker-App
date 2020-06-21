import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial State

const initialState = {
    transactions: [
        
     ]
}

// creae context

export const GlobalContext = createContext (initialState);

// Provider Components
export const GobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
function deleteTransaction(id) {
    dispatch({
    
            type: 'DELETE_TRANSACTION',
            payload: id
    
        });
    }

function addTransaction(transaction) {
    dispatch({
    
            type: 'ADD_TRANSACTION',
            payload: transaction
    
        });
    }
        return (<GlobalContext.Provider value= {{
            transactions: state.transactions, 
            deleteTransaction,
            addTransaction,
        }}>
            {children}
        </GlobalContext.Provider>


        )
}



export default GobalProvider;