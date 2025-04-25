import Topo from "@/components/Topo";
import { useState, useEffect } from "react";

//useeffect é chamado toda vez que a página é renderizada, quando a renderização é chamada, diferente do useState, o useState dispara a renderização 
//podemos configura o useEffect. Ex: chamar somente na primeira renderização; chamar quando determinado componente for alterado.

export default function UseEffect(){
    //espera uma funçao de callback, quando ela é acionado o useEffect acontece, pode ser até a função useState. Quando use state é acionado.
    const [cont, setCont] = useState<number>(0);
    //criar um state aux
    const [aux, setAux] = useState<number>(0);

    useEffect(()=>{
        //o useEffect é acionado quando acontece renderização, e a renderização está sendo chamada no setCont que renderiza com zero inicialmente. Isso é a renderização continua

        // let c = cont;
        // c++
        // setCont(c)

        //variável comum não aciona a renderização da página, só quando uso o useState
        //o valor de aux é 1 agora, mas não é renderizado na tela
        // aux++

        //chamar useEffect uma vez, somente quando a página for carregada ao abrir a página. Pra isso usamos o segundo parâmetros, que são chamadas de dependências. A segunda dependência é um array vazio.
        //o array vazio chama o effect uma vez 

        //chamar useEffect somente quando o useState for alterado, sem looping.

        //O use effect é disparado pq quando abrimos a página ele renderiza o aux. E ele executa só nessa renderização, por causa do colchetes vazio []
        alert('Use effect disparado')

        //se eu passo o aux na dependência, sempre que aux é alterado e a página é renderizada ele chama o alert
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
        </div>
    )
}