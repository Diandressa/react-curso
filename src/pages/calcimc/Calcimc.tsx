import { useState } from "react";
import Compform from "@/components/Compform";

export default function Calcimc(){
    const [peso, setPeso] = useState<string>('');
    const [altura, setAltura] = useState<string>('');

    return(
        <div>
            <h1>Cálculo do IMC</h1>
            <Compform label="peso" state={peso} funcState={setPeso}/>
            <Compform label="altura" state={altura} funcState={setAltura}/>
        </div>
    )
}