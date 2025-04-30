import Topo from "@/components/Topo"
import { useState } from "react"
import { InputType } from "zlib"

export default function TestePagina(){
    const [valor, setNome] = useState<string>('')

    const armazenar=(chave:string, valor:string)=>{
        localStorage.setItem(chave, valor)
        alert(`Gravou o valor: ${valor} com a chave ${chave}`)
    }

    const consultar=(chave:string)=>{
        alert(localStorage.getItem(chave))
    }

    const apagar = (chave:string)=>{
        localStorage.removeItem(chave)
        alert('Nome removido')
    }
    /*
    //criando a chave (nome, valor)
    localStorage.setItem('nome', 'Andressa')

    //se eu mude o setItem ele substitui o valor que inserir antes por esse novo
    localStorage.setItem('nome', 'Bruno')
a
    //recupera a chave
    localStorage.getItem('nome')

    //remover a chave
    localStorage.removeItem('nome')
    */
    return(
        <div>
            <Topo/>
            <div className="my-4">
                <label className="me-2">Digite um nome:</label>
                
                <input className="border rounded px-2" type="text" value={valor} onChange={(event)=>setNome(event.target.value)} />
            </div>

            <div className="flex gap-3">
                <button className="btnPadrao" onClick={()=>armazenar('ls_nome', valor)}>Gravar Nome</button>
                <button  className="btnPadrao"onClick={()=>consultar('ls_nome')}>Consultar Nome</button>
                <button className="btnPadrao" onClick={()=>apagar('ls_nome')}>Apagar Nome</button>
            </div>
        </div>
    )
}