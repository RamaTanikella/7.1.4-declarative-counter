import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    return (
    <div>
        <h1>{counter}</h1>
        <h5>{counter}</h5>
    </div>
        
    )
}

export default App;

//changed h4 tag to h5 just because//