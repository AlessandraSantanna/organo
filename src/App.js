import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
    const times = [
    {
      nome:'Back-End',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82cffa',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria:'#E06869',
      corSecundaria:'#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria:'#0B6EBF',
      corSecundaria:'#FEA9F5'
    },
    {
       nome:'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEED9',
    }
  ];

  const [tecnologias, setTecnologia] = useState([]);
  const atecnologiaAdicionada = (tecnologia) => {
    console.log(tecnologia);
    setTecnologia([...tecnologias, tecnologia]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} atecnologiaCadastrada={tecnologia => atecnologiaAdicionada(tecnologia)} />
      {times.map(time => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          tecnologia={tecnologias.filter(tecnologia => tecnologia.tipo === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
/*export default App;
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
    const times = [
    {
      nome:'Programação',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'FrontEnd',
      corPrimaria:'#82cffa',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria:'#E06869',
      corSecundaria:'#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria:'#0B6EBF',
      corSecundaria:'#FEA9F5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEED9',
    }
    




  ]
  const [tecnologias, setTecnologia]= useState ([])
  const  atecnologiaAdicionada=(tecnologia)=>{
    console.log(tecnologia)
    setTecnologia([...tecnologias, tecnologia])

  }
  return(
    <div className="App">
       <Banner/>
      <Formulario times={times.map(time =>time.nome)} atecnologiaCadastrada = {tecnologia=> atecnologiaAdicionada(tecnologia)}/>
      {times.map(time=> <Time 
      key={time.nome}
       nome={time.nome} 
       corPrimaria={time.corPrimaria} 
       corSecundaria={time.corSecundaria}
       //tecnologia= {tecnologias.filter(tecnologia=>tecnologia.tipo===time.nome)}
      //tecnologia= {tecnologias.filter(tecnologia=>tecnologia.time===time.nome)}
       tecnologia={tecnologias.filter(tecnologia=>tecnologia.tipo===time.nome)}

       />
       )}
    </div>
    
   
);

}
export default App;*/
