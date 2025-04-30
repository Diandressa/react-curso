import Topo from "@/components/Topo";

export default function KeyListas(){
    const array_numeros = [1,2,3,4,5,6,7,8,9];

    interface Props {
        numeros:number[]
    }

    /*
        Por que o key é importante?
        Sem uma key, o React não consegue distinguir facilmente um item de outro na lista, e pode acabar recriando ou reordenando os elementos de maneira ineficiente ou até com bugs visuais.
    */

    function ListaNumeros(props:Props){
        const num = props.numeros;

        const lista_numeros = num.map((n)=>
            
            //precisamos informar uma key em toda listas.
            <li key={n}>{n}</li>
        );

        return(
            <ul>
                {lista_numeros}
            </ul>
        )
    }
    return(
        <>
            <Topo/>
            <ListaNumeros numeros={array_numeros}/>
        </>
    )
}