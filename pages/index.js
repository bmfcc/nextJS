import { useState } from 'react';

function Contador(){
    const [contador, setContador] = useState(1);

    function addContador(){
        setContador(contador + 1);
    }

    return (<div>
                <h1>{contador}</h1>
                <button onClick={addContador}>Adicionar</button>
            </div>
            
    )
}

function Home() {
    return (
        <div>
            <h3>Home1</h3>
            <Contador />
        </div>
    )
}


export default Home