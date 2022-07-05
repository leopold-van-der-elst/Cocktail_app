import axios from 'axios';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function Drinksdetails(){

const [drink,setDrink] = useState([])

const {id} = useParams()
// useEffect(()=> {
//     async function fetchData() {
//       try{
//         const result = await axios.get(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.drink}`)
//         const data = result.data.drinks.map(d => d.strDrink)
//         setDrink(data)
//         console.log(result)
//       }catch(err){
//         console.log(err)
//       } 
//     }
//     fetchData()
// },[])
console.log(id)
  return(
      <div>
        <p>hello</p>
      </div>
  )
}