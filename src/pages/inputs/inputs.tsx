import Topo from "@/components/Topo";
import {useState} from "react";

export default function Inputs(){
    //capturar o valor do input com state
    const [nome, setNome]=useState<string>("")
    const [curso, setCurso]=useState<string>("")

    //onChange para alterar o value do input
    //event.target.value → É o valor atual que está dentro do input. Passamos ele para variável nome ou curso
    /*
    🔄 Processo completo
        O usuário digita "J".

        onChange dispara.

        event.target.value é "J".

        setNome("J") atualiza o estado.

        O input mostra o novo valor.
    */

    return(
        <div>
            <Topo/>
            <div className="campoForm">
                <label>Nome</label>
                {/*Pego o evento do input e passo para a função que alterar o componente*/}
                <input type="text" value={nome} onChange={(event)=>setNome(event.target.value)}/>
            </div>
            <div className="campoForm">
                <label>Curso</label>
                <select value={curso} onChange={(event)=> setCurso(event.target.value)}>
                    <option value=""></option>
                    <option value="HTML">HTML</option>
                    <option value="React">React</option>
                    <option value="C++">C++</option>
                    <option value="Javascript">Javascript</option>
                    <option value="CSS">CSS</option>
                </select>
            </div>
            <div>Nome digitado: {nome}</div>
            <div>Curso digitado: {curso}</div>
        </div>
    )
}