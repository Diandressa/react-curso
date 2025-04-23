//hook useState - quando tem o valor alterado ele chama a renderização da página

//importar useState
import Topo from "@/components/Topo";
import { useState } from "react";

export default function usestate(){
    //ao clicar no btn alteramos o valor da variável e renderizamos na tela

    //nomedostate, funcaomanipuladora
    let [cont, setCont] = useState<number>(10);

    function contador(){
        let c = cont
        c++
        //atribuir novo valor pro useState
        setCont(c)
    }

    return(
        <div>
            <Topo/>
            useState
            <div>{cont}</div>
            <button onClick={contador} className="btnPadrao">Add</button>
        </div>
    )
}