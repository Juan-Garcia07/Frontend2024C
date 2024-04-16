
function App() {
 
  return (
    
      <div className="container">
          <h1>To Do List</h1>
          <hr />
          <div className="row">
          <div className="col-6">
            <h4>Tasks</h4>
          </div>
          <div className="col-2">
          <h4>Limit</h4>
          </div>
          <div className="col">
          <h4>Actions</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">

          </div>
          <div className="col-2">
            13:00
          </div>
          <div className="col">
            <button className="btn btn-sm btn-primary">Edit</button>
            <button className="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
    </div>
  )
}

export default App
