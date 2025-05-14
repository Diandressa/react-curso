import { useState } from "react";
import Campform from "@/components/Campform";
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
        <div className="flex flex-col border border-amber-300 w-[300px] gap-5">
            <h1 className="w-full text-center bg-amber-300 text-black font-bold text-lg">Cálculo do </h1>
            <Campform label="peso" state={peso} funcState={setPeso}/>
            <Campform label="altura" state={altura} funcState={setAltura}/>
            <button className="bg-amber-50 text-center mx-2 text-black p-1 rounded-lg cursor-pointer" onClick={calcular}>Calcular</button>
            <p className="p-1">Resultado: {imc}</p>
            <Tabelaimc/>
        </div>
    )
}