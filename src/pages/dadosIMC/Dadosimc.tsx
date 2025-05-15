import { useRouter} from "next/router";
import { useState, useEffect } from "react";

export default function Dadosimc(){
    const [peso, setPeso] = useState<any>('')
    const [altura, setAltura] = useState<any>('')
    const [imc, setImc] = useState<any>('')
    const [nome, setNome] = useState<any>('')
    const [data, setData] = useState<any>('')
    
    const router = useRouter()
    const {p_peso,p_altura,p_imc} = router.query
    console.log(p_peso,p_altura,p_imc)

    useEffect(()=>{
        setPeso(p_peso)
        setAltura(p_altura)
        setImc(p_imc)
        setData('2023-12-17')
    })

    return(
        <div>
            <div>
                <div>
                    <label>Nome</label>
                    <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                </div>
                <div>
                    <label>Peso</label>
                    <input type="text" value={peso} readOnly/>
                </div>
                <div>
                    <label>Altura</label>
                    <input type="text" value={altura} readOnly/>
                </div>
                <div>
                    <label>IMC</label>
                    <input type="text" value={imc} readOnly/>
                </div>
                <div>
                    <label>Data</label>
                    <input type="text" value={data} readOnly/>
                </div>
                <div>
                    <button className="border px-3">Gravar</button>
                </div>
            </div>
            <div>
                GRID
            </div>
        </div>
    )
}