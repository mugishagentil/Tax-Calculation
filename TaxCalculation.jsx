import { useState } from "react";

function Tax(){
    const [tax, settax] = useState()
    const [symbol, setsymbol] = useState()
    const taxAdd = () => {
        const productTax = document.getElementById('MyTax').value;
        const Tax = Number(productTax);
        if(Tax < 20){
         settax(( Tax * 10) / 100)
        }else if(Tax > 20 && Tax < 100){
            settax((Tax * 20) / 100)
        }else{
            settax((Tax * 25) / 100)
        }
        setsymbol('$')
    }

    return (
        <div className="container">
            <h3 className="myHead">Total Tax</h3>
            <input type="number" id="MyTax"/><br></br>
            <button onClick={taxAdd} className="myButton">Calculate</button>
            <p>Total Tax: {tax}{symbol}</p>
        </div>
    )
}
export default Tax