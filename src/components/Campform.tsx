interface CampformProps {
    label:string,
    state:any,
    funcState:any,
}

export default function Compform(props:CampformProps){
    return(
        <div className="flex mx-2">
            <label className="w-[60px]">{props.label}</label>
            <input className="border border-amber-50 p-1 rounded w-full" value={props.state} onChange={(e)=>props.funcState(e.target.value)}/>
        </div>
    )
}