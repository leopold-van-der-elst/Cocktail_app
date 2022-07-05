import "../src/assets/app.css"
import Home from './components/home'
import Drinksdetails from './components/drinksdetails'
import {Routes, Route} from 'react-router-dom';
export default function App(){
  return(
    <div className="divApp">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/drinksdetails/:id" element={<Drinksdetails/>}/>
        </Routes>
        </div>
    )
}