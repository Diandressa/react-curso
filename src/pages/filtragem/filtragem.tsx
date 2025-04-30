import Topo from "@/components/Topo";
import { useState, useEffect } from "react";

let digimons:any = ''
let listaPronta = false;

export default function Filtragem(){
    const [level, setLevel] = useState<string>('');
    const [linhas, setLinhas] = useState<any[]>([]);

    //consumir api com useEffect, renderiza somente uma vez ao abrir a página. Manda os dados para lista
    useEffect(()=> {
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response=>response.json())
        .then(response=>{
            //passa o resultado da api para variável digimon
            digimons = response
            listaPronta = true
        })
    }, [])

    console.log(digimons)

    function criarLinhas(levelSelecionado:any){
        if(listaPronta){
            //coloca a categoria selecionada no select, que foi enviada para a função no clique, no useState
            setLevel(levelSelecionado);

            //percorrer o array e retornar os elementos que correspondem a categoria selecionada

            let linha:any[] = []
            
            digimons.forEach((digimon:any)=>{
                //se o item tiver a mesma string da que foi passada pra função eu coloca na lista linha o conteúdo que quero renderizar com os valores daquele item
                if(digimon.level == levelSelecionado){
                    linha.push(
                    <div className="flex flex-row w-[500px]" key={digimon.name}>
                        <div className="w-full">{digimon.name}</div>
                        <div className="w-full">{digimon.level}</div>
                        <div className="w-full"><img src={digimon.img}/></div>
                    </div>
                    )
                }
            })

            //seta a nova array no setLinhas, para renderizar na tela
            setLinhas(linha)
        } else {
            alert('Lista ainda não foi carregada')
        }
        
    }

    return(
        <>
            <Topo/>
            <label>Selecione a categoria</label>
            <select value={level} onChange={(e)=>{criarLinhas(e.target.value)}}>
                <option value="In Training">In Training</option>
                <option value="Rookie">Rookie</option>
                <option value="Champion">Champion</option>
                <option value="Fresh">Fresh</option>
                <option value="Ultimate">Ultimate</option>
                <option value="Mega">Mega</option>
            </select>

            <div className="flex flex-col">
                <div className="flex flex-row w-[500px]">
                    <div className="w-full">Nome</div>
                    <div className="w-full">Level</div>
                    <div className="w-full">Imagem</div>
                </div>
                {linhas}
            </div>
        </>
    )
}