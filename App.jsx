import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cardNumber, setCardNumber] = useState("")
  const [isValid, setIsValid] = useState(true)
  //validCard function
  useEffect(() => {
    const validCard = (val) => {
      let sum = 0;
      let doubleDigit = false;
       
      //reverse the array of digits and process each digit using a function map

      const reverseCard = val.split("").reverse().map((cardDigit) => {
        let digit = parseInt(cardDigit, 10);
    
        //double every second digit

        if (doubleDigit) {
          digit *= 2;
          if (digit > 9) {
            digit -= 9;
          }
        }
        doubleDigit = !doubleDigit;

        return digit;
      });

      sum = reverseCard.reduce((prevValue, currValue) => prevValue + currValue, 0)
      return sum % 10 === 0;
   
    };
    setIsValid(validCard(cardNumber));
   }, [cardNumber]);
  
    const handleChange = (e) => {
      const input = e.target.value;
      setCardNumber(input);
      
    };
  

    return (
      <div>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleChange}
          placeholder="TypeCardNumber"
          maxLength={16}

        />
        {isValid ?  <p>Valid card number.</p> : <p>Invalid card number.</p>}
     
        <h1>Luhn Algorithm</h1>
      </div>
  
    );
   
 };
  

export default App
