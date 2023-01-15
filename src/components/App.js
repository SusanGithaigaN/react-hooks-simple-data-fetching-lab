
import React from "react";
import { useState, useEffect } from "react";

// fetch data from API  
function App() {
  const[dog, setDog] =useState([]);
  const[loadDog, setLoadDog] = useState(false)


  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then(data => {
            setDog(data);
            setLoadDog(true);
          })
        }, [])

        if(!loadDog){return <p>Loading...</p>}

        return (
            <div>
                <img src={dog.message} alt="A Random Dog"></img>
            </div>
        )
}

export default App;