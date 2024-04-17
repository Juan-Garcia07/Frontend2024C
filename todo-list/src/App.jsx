import List from "./List"
const taskList = [
  {
    id: 1,
    task: "Estudiar",
    limit: "13:00",
  },
  {
    id: 2,
    task: "Practicar",
    limit: "14:00",
  },
  {
    id: 3,
    task: "Trabajar",
    limit: "15:00",
  },

]

function App() {
 
  return (
    
      <div className="container">
          <h1>To Do List</h1>
          <hr />
          <List 
      taskList={taskList}
      />
    </div>
  )
}

export default App
