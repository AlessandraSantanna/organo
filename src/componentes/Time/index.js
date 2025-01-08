import Colaborador from '../Colaborador'
import './Time.css'
const Time = (props)=>{
    return(
    
       (props.tecnologia.length> 0 ) &&<section className='time' style={{backgroundColor:props.corSecundaria}}>
            <h3 style={{borderColor:props.corPrimaria}}> {props.nome}</h3>
            <div className='colaboradores'>
                {props.tecnologia.map(tecnologia=> <Colaborador cordeFundo={props.corPrimaria} key={tecnologia.nome} tecnologia ={tecnologia.tecnologia} tipo={tecnologia.tipo} imagem={tecnologia.imagem}/>)}
            </div>
        </section>
    )
}
export default Time