import React, {useEffect, useState} from 'react';

function App() {
const [image, setImage] = useState(null);
const [isLoaded, setIsLoaded]= useState(false);

useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data)=> {
        setImage(data.message);
        setIsLoaded(true);
    });
}, [])

    if (!isLoaded) return <p>Loading...</p>;

return (
    <div>
        <img alt="A Random Dog" src={image}/>
    </div>
)
}

export default App;