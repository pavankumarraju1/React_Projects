import React from "react";
import Card from "./Card";
import vegetables from "../groceriesList";

function veg(entry) {
    return (
        <Card
            key={entry.id}
            img={entry.img}
            name={entry.name}
            price={entry.price}
        />
    );
}
function App() {
    return (
        <div>

            <h1 className="text">Vegetables Store</h1>
            <div className="pos">
           {vegetables.map(entry=><Card
            key={entry.id}
            img={entry.img}
            name={entry.name}
            price={entry.price}
        />)}
            </div>
            <input type="submit" value="click me" className="btn"></input>
        </div>
    )
}

export default App;
