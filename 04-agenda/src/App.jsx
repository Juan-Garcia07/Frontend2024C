import ListItem from "./Listitem"

const persona = [
  {
    nombre:'Jose Juan',
    telefono:'2871316997',
    email: 'isc20350534@gmail.com'
  },
  
  {
    nombre:'Carlos',
    telefono:'2875658885',
    email: 'carlos@gmail.com'
  },
  {
    nombre:'Enrique',
    telefono:'25887788788',
    email: 'enrique@gmail.com'
  },
  {
    nombre:'Maria',
    telefono:'25887788455',
    email: 'maria@gmail.com'
  }

]

function App() {
  

  return (
     <div>
      <h1>Agenda</h1>
      <hr/>
    <ul>
    {
      persona.map((persona) => (
        <ListItem
        key={persona.email}
        nombre={persona.nombre}
        telefono={persona.telefono}
        email={persona.email}
        ></ListItem>
      ))
    }
    </ul>
     </div>
  )
}

export default App
