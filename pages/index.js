import { useState } from 'react';
import Link from 'next/link';

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
            <Link href="/about">
                <a>About</a> 
            </Link>
            
        </div>
    )
}


export default Home