import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Start from './components/Start'
import Balance from './components/Balance';
import Cards from './components/Cards';
import Transactions from './components/Transactions';

export const AppContext = React.createContext();

function App() {
    const [cards, setCards] = useState([]);
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);

    return(
        <AppContext.Provider value={{cards, setCards, balance, setBalance, transactions, setTransactions}}>
        <Router>
            <Routes>
                <Route path="/" element={<Start />}></Route>
                <Route path="/balance/" element={<Balance />}></Route>
                <Route path="/cards/" element={<Cards />}></Route>
                <Route path="/transactions/" element={<Transactions />}></Route>
            </Routes>
        </Router>
        </AppContext.Provider>
    );
}



export default App;
