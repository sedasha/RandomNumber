import './random.scss'


const Random =({number, times})=>{
   
   
    return (

        <div >
            <div className= {times>1?"number bigger_than_one":"number"}>{number}</div>
        </div>
    )
}
export default Random