import React, { useContext, useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import CardsFormAdd from './CardsFormAdd';

import { AppContext } from "../App"

function Cards() {
    const {cards, setCards} = useContext(AppContext);
    
    const [content, setContent] = useState('');

    const inputCardName = useRef();
    const inputCardValue = useRef();

    function save() {
        const name = inputCardName.current.value;
        const value = inputCardValue.current.value;

        const arr = cards;
        arr.push({
            name: name,
            balance: value
        })

        setCards([...arr]);

    }

    function update() {
        const html = (
            <ul>
                {cards.map((card, index) => {
                    return <li key={index}>
                        <h3>{card.name}</h3>
                        <div>{card.balance}</div>
                    </li>
                })}
            </ul>
        );

        setContent(html);
    }

    useEffect(() => {
        update();
    }, [cards]);
    
    function add() {
        setContent(<CardsFormAdd save={save} inputCardName={inputCardName} inputCardValue={inputCardValue} />);
    }

    return (
        <div>
            <header>
                <Link to="/balance/">&larr;</Link>
                <h3>My cards</h3>
            </header>

            {content}
            
            <button onClick={add}>Add</button>

            <Nav />
        </div>
    );
}

export default Cards;
