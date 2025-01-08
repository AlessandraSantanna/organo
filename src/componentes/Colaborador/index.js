import './Colaborador.css'

const Colaborador= ({tecnologia,tipo,imagem,corDeFundo})=> {
    return(
    <div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
            <img src={imagem} alt={tecnologia}/>
        </div>

        <div className='rodape'> 
            <h4>{tecnologia}</h4>
            <h5>{tipo} </h5>
        </div>
    </div>)
}
export default Colaborador