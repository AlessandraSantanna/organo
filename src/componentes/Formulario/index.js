import { useState } from 'react'
import Botao from '../../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario =  (props)=> {

    const [tecnologia,setTecnologia]=useState('')
    const [imagem,setImagem]=useState('')
    const [tipo,setTipo]=useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.atecnologiaCadastrada({
            tecnologia,
            imagem,
            tipo,

        })
        setTecnologia('')
        setImagem('') 
        setTipo('')
        
    }
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os Dados para criar o card de tecnologias </h2>

            <CampoTexto
             obrigatorio={true} 
             label="Tecnologia:"
              placeholder="Digite a Tecnologia"
              valor={tecnologia}
              aoAlterado={valor =>setTecnologia(valor)}

            />

            <ListaSuspensa
             obrigatorio={true}
              label="Tipo:" 
              itens={props.times}
              valor={tipo}
              aoAlterado={valor =>setTipo(valor)}
              />


            <CampoTexto
             label="Imagem:(https://avatar.iran.liara.run/public?username)"
              placeholder="copie e cole o link do avatar"
               valor={imagem}
              aoAlterado={valor =>setImagem(valor)}
            />
            <Botao>
            Criar Card
            </Botao> 

           
            </form>
        </section>
    )

}
export default Formulario

/*import { useState } from 'react'
import Botao from '../../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario =  (props)=> {

    

    const [tecnologia,setTecnologia]=useState('')
    const [imagem,setImagem]=useState('')
    const [tipo,setTipo]=useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.atecnologiaCadastrada({
            tecnologia,
            imagem,
            tipo,

        })
        setTecnologia('')
        setImagem('') 
        setTipo('')
        
    }
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os Dados para criar o card das tecnologias necessários ser um dev </h2>

            <CampoTexto
             obrigatorio={true} 
             label="Tecnologia:"
              placeholder="Digite a Tecnologia"
              valor={tecnologia}
              aoAlterado={valor =>setTecnologia(valor)}

            />

            <ListaSuspensa
             obrigatorio={true}
              label="Tipo:" 
              itens={props.times}
              valor={tipo}
              aoAlterado={valor =>setTipo(valor)}
              />


            <CampoTexto
             label="Imagem:(https://avatar.iran.liara.run/public?username)"
              placeholder="copie e cole o link do avatar"
               valor={imagem}
              aoAlterado={valor =>setImagem(valor)}
            />
            <Botao>
            Criar Card
            </Botao> 

           
            </form>
        </section>
    )

}
export default Formulario*/