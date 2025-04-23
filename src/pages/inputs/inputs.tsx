import {useState} from "react";

export default function inputs(){
    //capturar o valor do input com state
    const [nome, setNome]=useState<string>("")
    const [curso, setCurso]=useState<string>("")

    //onChange para alterar o value do input


    return(
        <div>
            <div className="campoForm">
                <label>Nome</label>
                {/*Pego o evento do input e passo para a função que alterar o componente*/}
                <input type="text" value={nome} onChange={(event)=>setNome(event.target.value)}/>
            </div>
            <div className="campoForm">
                <label>Curso</label>
                <input type="text" value={curso} onChange={(event)=>setCurso(event.target.value)}/>
            </div>
            <div>Nome digitado: {nome}</div>
            <div>Curso digitado: {curso}</div>
        </div>
    )
}