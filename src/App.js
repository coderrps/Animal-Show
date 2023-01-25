import React from 'react';
import {useState} from 'react';
import AnimalShow from './AnimalShow';

const getRandomAnimals=()=> {
    const animals = ['cat', 'dog', 'bird','cow','gator','heart', 'horse'];
    return animals[Math.floor(Math.random()*animals.length)];
}


//console.log(animals);
console.log(getRandomAnimals());
function App() 
{
    const [animals, setAnimals]=useState([]);


    const handleClick=() =>{
        
        setAnimals([...animals, getRandomAnimals()]);
    }
    //console.log(animals);

    return (
        <div>
            <h1>Animals</h1>
            <button onClick={handleClick}>Add Animal</button>
            <AnimalShow animals={animals}/>
        </div>
    )
}
export default App;