import ListItem from "./Listitem"
const List = ({taskList}) =>{
    return(
        <>
        <div className="row">
          <div className="col-5">
            <h4>Tasks</h4>
          </div>
          <div className="col-2">
          <h4>Limit</h4>
          </div>
          <div className="col-3">
          <h4>Location</h4>
          </div>
          <div className="col">
          <h4>Done</h4>
        </div> 
        </div>
        {
            taskList.map(
                (task) => (
                    <ListItem
                    key={task.id}
                    task={task}
                    
                    />
                )
            )
        }
        </>

    )
}

export default List