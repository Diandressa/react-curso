import Topo from "@/components/Topo";
import { useState } from "react";

const carros=[
    {id:0, categ:'Esporte', valor:'120000.00', modelo: 'Golf GTI'},
    {id:1, categ:'Esporte', valor: '200000.00', modelo: 'Camaro'},
    {id:2, categ:'SUV', valor: '100000.00', modelo: 'HRV'},
    {id:3, categ: 'SUV', valor: '100000.00', modelo: 'T-Cross'},
    {id:4, categ: 'Utilitario', valor: '180000.00', modelo: 'Hillux'},
    {id:5, categ: 'Utilitario', valor: '160000.00', modelo: 'Ranger'},
]

export default function Filtragem(){
    const [categ, setCateg] = useState<string>('');
    const [linhas, setLinhas] = useState<any[]>([]);

    function criarLinhas(cat:any){
        //coloca a categoria selecionada no select, que foi enviada para a função no clique, no useState
        setCateg(cat);

        //percorrer o array e retornar os elementos que correspondem a categoria selecionada

        let linha:any[] = []
        
        carros.forEach((carro:any)=>{
            //se o item tiver a mesma string da que foi passada pra função eu coloca na lista linha o conteúdo que quero renderizar com os valores daquele item
            if(carro.categ == cat){
                linha.push(
                <div className="flex flex-row w-[500px]" key={carro.id}>
                    <div className="w-full">{carro.categ}</div>
                    <div className="w-full">{carro.valor}</div>
                    <div className="w-full">{carro.modelo}</div>
                </div>
                )
            }
        })

        //seta a nova array no setLinhas, para renderizar na tela
        setLinhas(linha)
    }

    return(
        <>
            <Topo/>
            <label>Selecione a categoria</label>
            <select value={categ} onChange={(e)=>{criarLinhas(e.target.value)}}>
                <option value="">Nenhuma</option>
                <option value="Esporte">Esporte</option>
                <option value="SUV">SUV</option>
            </select>

            <div className="flex flex-col">
                <div className="flex flex-row w-[500px]">
                    <div className="w-full">Categoria</div>
                    <div className="w-full">Valor</div>
                    <div className="w-full">Modelo</div>
                </div>
                {linhas}
            </div>
        </>
    )
}