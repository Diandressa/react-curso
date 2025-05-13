interface CompformProps {
    label:string,
    state:any,
    funcState:any,
}

export default function Compform(props:CompformProps){
    return(
        <div className="campoForm">
            <label>{props.label}</label>
            <input value={props.state} onChange={(e)=>props.funcState(e.target.value)}/>
        </div>
    )
}