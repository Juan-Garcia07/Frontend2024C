import ListItem from "./Listitem"

const links = [
  {
    name: 'Google',
    url: 'https://google.com'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com'
  }
]

function App() {
  

  return (
    <div>
      <h1>Links</h1>
      <hr />
      <ul>
        {
          links.map((link) => (
            <ListItem
            key={link.name}
            name={link.name}
            url={link.url}
            ></ListItem>
          ))
        }
        {/*{links.map((link) => (<li key={link.name}><a href={link.url}></a></li>))}*/}
      </ul>
    </div>
  )
}

export default App
