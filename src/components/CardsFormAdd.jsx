function CardsFormAdd(props) {
    return (
        <div>
            <input ref={props.inputCardName} placeholder="Card name" defaultValue="Visa" />
            <input ref={props.inputCardValue} type="number" min="0" defaultValue="0" />
            <button onClick={props.save}>Save</button>
        </div>
    )
}

export default CardsFormAdd;