import '../assets/home.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Home(){

const [inputvalue, setInputvalue] = useState("");
const [drink, setDrink] = useState([]);
const [drinkunit, setDrinkunit] = useState("");

useEffect(()=>{
    //FOCUSING THE INPUT SEARCHBAR
    const input = document.querySelector('#searchbar');
    //WAIT FOR A EVENT TO CALL FUNCTION UPDATEVALUE
    input.addEventListener('input', updateValue);
    //CHANGING THE STATE OF INPUTVALUE WIITH THE NEW VALUE
    function updateValue(e){
    setInputvalue(e.target.value)
    };
},[inputvalue]);


 const getDrink = (target)=>{
     const element = document.getElementById(`drink-${target}`).innerHTML;
     console.log(element);
 }
 const url = "drinksdetails/" + drinkunit
   
const getData = async ()=> {
    try{
        const result = await axios.get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${inputvalue}`)
        const data = result.data.drinks
        const array = [];
        for (let i = 0 ; i < data.length; i++) {
            const {strDrink, } = data[i]
            array.push(strDrink)
            setDrink(array)
        }
    }
    catch(error) {
        console.log(error)
     } 
}
return (
    <section className="maindiv">
        <div className="divBar">
            <input id="searchbar" type="text" placeholder="Search for a cocktail"/>
            <button id="searchbarbtn" type="submit" onClick={getData} value="Submit">Rechercher</button>
        </div>
        <div className="divDrink">
            <ul className="drinkList">
                {drink.map((element,index)=>
                    <Link to={url} key={index} className="drinkElement" onClick={getDrink.bind(null,index)} id={`drink-${index}`}>
                    {element}
                    </Link>
                )}
            </ul>
        </div>
    </section>
    )
}