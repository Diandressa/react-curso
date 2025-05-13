import { useState } from "react";

export default function Calcimc(){
    const [peso, setPeso] = useState<string>('');
    const [altura, setAltura] = useState<string>('');

    return(
        <div>
            <p>Cálculo do IMC</p>
        </div>
    )
}