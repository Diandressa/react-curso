import Card from "./Card"
export default function Topo() {
    return(
        <div className='flex justify-between items-center bg-cyan-400 h-[100px] p-4'>
            <div>Logo</div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-3xl">CFBCursos</div>
                <div className="subtituloTopo">Curso de React</div>
            </div>
            <div>Andressa</div>
            {/*Podemos usar um componente dentro de outro componente */}
        </div>
    )
}