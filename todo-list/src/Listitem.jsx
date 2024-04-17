const ListItem = ({task, limit}) =>{
    return(
        <>
        <div className="row">
          <div className="col-6">
          {task}
          </div>
          <div className="col-2">
          {limit}
          </div>
          <div className="col">
            <button className="btn btn-sm btn-primary">Edit</button>
            <button className="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
        </>
    )
}

export default ListItem