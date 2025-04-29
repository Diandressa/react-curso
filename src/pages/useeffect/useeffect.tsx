import Topo from "@/components/Topo";
import { useState, useEffect } from "react";

import Globais from "@/components/Globais";

//useeffect é chamado toda vez que a página é renderizada, quando a renderização é chamada, diferente do useState, o useState dispara a renderização 
//podemos configura o useEffect. Ex: chamar somente na primeira renderização; chamar quando determinado componente for alterado.

export default function UseEffect(){
    //espera uma funçao de callback, quando ela é acionado o useEffect acontece, pode ser até a função useState. Quando use state é acionado.
    const [cont, setCont] = useState<number>(0);
    //criar um state aux
    const [aux, setAux] = useState<number>(0);

    useEffect(()=>{
        alert('Use effect disparado');
        Globais.canal="CFB Cursos"
        Globais.curso="Typescript"
        Globais.ano="2024"
    },[aux])

    function add(){
        // let c = cont;
        // c++
        // setCont(c)

        //alterar o aux ao clicar em add
        let a = aux;
        a++;
        setAux(a);
    }

    return(
        <div>
            <Topo/>
            UseEffect
            <div>
                <p>{`Valor de cont: ${cont}`}</p>
                <p>{`Valor de aux: ${aux}`}</p>
                <button onClick={add} className="btnPadrao">Adicionar 1</button>
            </div>
            <div>
                <h1 className="text-3xl mt-3">Globais</h1>
                <p>{Globais.canal}</p>
                <p>{Globais.curso}</p>
                <p>{Globais.ano}</p>
            </div>
        </div>
    )
}