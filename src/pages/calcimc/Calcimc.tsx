import { useState } from "react";
import Compform from "@/components/Compform";
import Tabelaimc from "@/components/Tabelaimc";

export default function Calcimc(){
    const [peso, setPeso] = useState<number>(0);
    const [altura, setAltura] = useState<number>(0);
    const [imc, setImc] = useState<number>(0)

    function calcular(){
        let res = peso /(altura*altura)
        setImc(res)
    }

    return(
        <div>
            <h1>Cálculo do IMC</h1>
            <Compform label="peso" state={peso} funcState={setPeso}/>
            <Compform label="altura" state={altura} funcState={setAltura}/>
            <button className="btnPadrao" onClick={calcular}>Calcular</button>
            <p>Resultado: {imc}</p>
            <Tabelaimc/>
        </div>
    )
}