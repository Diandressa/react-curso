import Topo from "@/components/Topo";
import {useState, useEffect} from "react";

//importar os elementos statics
import Globais from "@/components/Globais";

//lista-array
const cursos=["HTML","React", "C++","Javascript", "CSS"]

export default function Inputs(){
    //capturar o valor do input com state
    const [nome, setNome]=useState<string>("")
    const [curso, setCurso]=useState<string>(cursos[0])

    //a mudança do elemento não causa a renderização, precisamos chamar a renderização 
    useEffect(()=>{
        Globais.curso = "React"
    },[])

    function fcursos(){
        return cursos.map((item:any)=>{
            return <option value={item}>{item}</option>  
        })
    }

    const ccursos = cursos.map((item:any)=>{
        return <option value={item}>{item}</option>  
    })

    const jcursos = [
        {"curso": "HTML"},
        {"curso": "Javascript"},
        {"curso": "C++"},
        {"curso": "Javascript"},
        {"curso": "CSS"}
    ]

    const jsoncursos = jcursos.map((item:any)=>{
        return <option value={item.curso}>{item.curso}</option>  
    })

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
                   {
                        //fcursos()
                        //ccursos
                        jsoncursos
                   }
                </select>
            </div>
            <div>Nome digitado: {nome}</div>
            <div>Curso digitado: {curso}</div>
            <div>
                <h1 className="text-3xl">Globais</h1>
                <p>{Globais.canal}</p>
                <p>{Globais.curso}</p>
                <p>{Globais.ano}</p>
            </div>
        </div>
    )
}